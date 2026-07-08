import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase Database (if configured)
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createServerSupabaseClient();
      const { error } = await supabase.from('contact_messages').insert([
        {
          name,
          email,
          phone: phone || '',
          subject: subject || 'General Inquiry',
          message,
        },
      ]);

      if (error) {
        console.error('Supabase insert error:', error);
      }
    }

    // 2. Trigger Make.com Webhook
    const webhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'RosaBlu Website Contact Form',
            timestamp: new Date().toISOString(),
            data: { name, email, phone, subject, message },
          }),
        });
      } catch (webhookError) {
        console.error('Make.com webhook error:', webhookError);
        // We don't fail the request if the webhook fails, as long as it's saved to DB
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
