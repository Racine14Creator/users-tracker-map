import connectMongo from "@/utils/connectMongo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { fullname, email, dob, salary, sex } = body;

  await connectMongo();

  console.log(fullname, email, dob, salary, sex);

  return NextResponse.json({ body });
}

export function GET() {
  return NextResponse.json({ message: "Getting users" });
}
