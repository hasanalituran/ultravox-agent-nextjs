import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const fullPath = path.join('/');
  const ultravoxApiUrl = `https://api.ultravox.ai/api/${fullPath}`;

  try {
    const response = await fetch(ultravoxApiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.ULTRAVOX_API_KEY || '',
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error forwarding to Ultravox API:', error);
    return NextResponse.json(
      { 
        message: 'Error forwarding to Ultravox API',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const fullPath = path.join('/');
  const ultravoxApiUrl = `https://api.ultravox.ai/api/${fullPath}`;
  const body = await request.json();

  try {
    const response = await fetch(ultravoxApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.ULTRAVOX_API_KEY || '',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error forwarding to Ultravox API:', error);
    return NextResponse.json(
      { 
        message: 'Error forwarding to Ultravox API',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
