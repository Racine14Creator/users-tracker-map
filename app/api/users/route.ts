import conn from "@/lib/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function GET() {
  await conn();
  try {
    const users = await User.find({});
    return NextResponse.json({ message: "Get Users", data: users });
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ message: "Get Users" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullname, email, password, sex, salary } = body;

    // Check for missing fields
    if (!fullname || !email || !password || !sex || !salary) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Establish database connection
    await conn();

    // Create a new user
    const newUser = await User.create({
      fullname,
      email,
      password, // Consider hashing the password for security
      sex,
      salary,
    });

    // Return a success response with the created user
    return NextResponse.json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 } // Return 500 for server errors
    );
  }
}
