import { NextResponse } from 'next/server';

export async function GET() {
  // Lógica da sua rota
  return NextResponse.json({ message: 'Hello, world!' });
}
