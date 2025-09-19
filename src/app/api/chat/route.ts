import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { input } = await request.json().catch(() => ({ input: '' }))

  if (!input) {
    return NextResponse.json({ error: 'No input provided' }, { status: 400 })
  }

  const key = process.env.GOOGLE_API_KEY
  if (!key) {
    // Fallback mock reply when no API key is configured.
    const mock = `Mock reply for: "${input}". Set GOOGLE_API_KEY in env to enable real Gemini 1.5 Flash responses.`
    return NextResponse.json({ reply: mock })
  }

  try {
    // Example Gemini 1.5 Flash proxy call.
    // Confirm the exact endpoint & request shape with Google's Generative Language docs and adjust as needed.
    const url = 'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-chat:generate'
    const body = {
      // Simple message format; adapt to Google's required schema if different.
      messages: [{ author: 'user', content: { text: input } }],
      temperature: 0.2,
      maxOutputTokens: 512,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: 'Downstream API error', details: text }, { status: 502 })
    }

    const data = await res.json()
    // Extract a reasonable text reply depending on returned schema.
    // Try common keys, and fall back to stringified body.
    let reply = ''
    if (Array.isArray((data as any).candidates) && (data as any).candidates[0]?.content?.[0]?.text) {
      reply = (data as any).candidates[0].content[0].text
    } else if ((data as any).output?.[0]?.content?.[0]?.text) {
      reply = (data as any).output[0].content[0].text
    } else if ((data as any).response) {
      reply = (data as any).response
    } else {
      reply = JSON.stringify(data)
    }

    return NextResponse.json({ reply })
  } catch (err) {
    return NextResponse.json({ error: 'Server error', details: String(err) }, { status: 500 })
  }
}
