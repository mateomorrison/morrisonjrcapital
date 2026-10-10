import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ count: 0 });
}

export async function POST(request: Request) {
  // Store nothing yet — the studio is in stealth. Acknowledge quietly.
  await request.json().catch(() => null);
  return NextResponse.json({ ok: true, count: 0 });
}
