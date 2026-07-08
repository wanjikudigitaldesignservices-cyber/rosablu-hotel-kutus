import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      userId, 
      roomId, 
      checkInDate, 
      checkOutDate, 
      totalPrice,
      guests
    } = body;

    if (!roomId || !checkInDate || !checkOutDate || !totalPrice) {
      return NextResponse.json(
        { error: 'Missing required booking fields' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase Database
    let bookingId = 'BKG-MOCK-' + Math.floor(Math.random() * 10000);
    
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createServerSupabaseClient();
      
      const { data, error } = await supabase.from('bookings').insert([
        {
          user_id: userId || null, // Allow guest bookings if no user ID
          room_id: roomId,
          check_in_date: checkInDate,
          check_out_date: checkOutDate,
          total_price: Number(totalPrice).toFixed(4), // Enforce 4 decimal places
          status: 'Confirmed'
        },
      ]).select('id').single();

      if (error) {
        console.error('Supabase booking insert error:', error);
      } else if (data) {
        bookingId = data.id;
      }
    }

    // 2. Trigger Make.com Webhook
    const webhookUrl = process.env.MAKE_BOOKING_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'RosaBlu Booking System',
            event: 'new_booking',
            timestamp: new Date().toISOString(),
            data: { 
              bookingId,
              userId,
              roomId,
              checkInDate,
              checkOutDate,
              guests,
              totalPrice: Number(totalPrice).toFixed(4)
            },
          }),
        });
      } catch (webhookError) {
        console.error('Make.com booking webhook error:', webhookError);
      }
    }

    return NextResponse.json({ success: true, bookingId });
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
