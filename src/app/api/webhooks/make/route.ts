import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;
    
    if (!makeWebhookUrl) {
      console.warn("MAKE_WEBHOOK_URL is not configured. Simulating success.");
      return NextResponse.json({ success: true, message: "Simulated success (Make webhook not configured)" }, { status: 200 });
    }

    const response = await fetch(makeWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Make.com webhook failed with status ${response.status}`);
    }

    return NextResponse.json({ success: true, message: "Data forwarded to Make.com" }, { status: 200 });

  } catch (error: any) {
    console.error("Webhook processing error:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
