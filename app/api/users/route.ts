import conn from "@/lib/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs"

export async function GET() {
  await conn();

  try {
    const data = await User.find();

    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
  }
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

    // Check the email if is already exist
    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      return NextResponse.json(
        { error: "Email already taken" },
        { status: 400 }
      );
    }
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
