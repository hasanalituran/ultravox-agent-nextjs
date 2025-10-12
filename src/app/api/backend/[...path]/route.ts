import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const fullPath = path.join('/');
  const backendUrl = `${process.env.BACKEND_URL || 'https://ultravox-voice-agent.fly.dev/api'}/${fullPath}`;
  const body = await request.text();

  try {
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.BACKEND_API_KEY || '',
      },
      body: body || undefined,
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Error forwarding to backend API',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const fullPath = path.join('/');
  const backendUrl = `${process.env.BACKEND_URL || 'https://ultravox-voice-agent.fly.dev/api'}/${fullPath}`;

  try {
    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.BACKEND_API_KEY || '',
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Error forwarding to backend API',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
