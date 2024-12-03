import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const body = await req.json();
  return NextResponse.json({ body });
}

export async function PUT() {
  return NextResponse.json({ message: "Put request" });
}

export async function DELETE() {
  return NextResponse.json({ message: "Delete message" });
}
