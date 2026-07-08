import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const apiKey = process.env.NVIDIA_NIM_API_KEY;

    if (!apiKey) {
      // Return a mocked response for the prototype if API key is missing
      return NextResponse.json({
        choices: [
          {
            message: {
              role: 'assistant',
              content: 'Hello! I am the RosaBlu AI Assistant (Mocked). I can help answer questions about our amenities, check-in times, and local attractions in Kutus.'
            }
          }
        ]
      });
    }

    // Call NVIDIA NIM API (using meta-llama3-8b-instruct or similar available model)
    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        model: 'meta/llama3-8b-instruct',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful, polite, and knowledgeable concierge for RosaBlu Hotel Kutus in Kirinyaga County, Kenya. You answer questions about amenities (Starlink, Free Parking), check-in/out times (14:00/11:00), and local attractions (Thiba Dam, Mt. Kenya). Keep responses concise.'
          },
          ...messages
        ],
        temperature: 0.2,
        max_tokens: 256,
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('NVIDIA NIM API Error:', errorText);
      throw new Error('Failed to fetch from NVIDIA NIM');
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
