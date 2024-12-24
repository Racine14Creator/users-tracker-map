import conn from "@/lib/mongodb";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

// Fetch all users
export async function GET() {
  await conn();
  try {
    const users = await User.find();
    return NextResponse.json({ data: users });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// Create a new user
export async function POST(req: Request) {
  try {
    const { fullname, email, password, sex, salary } = await req.json();

    // Check for missing fields
    if (!fullname || !email || !password || !sex || !salary) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await conn();

    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already taken" },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = await User.create({
      fullname,
      email,
      password,
      sex,
      salary,
    });
    return NextResponse.json({ message: "User created", data: newUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Delete a user
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    await conn();

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted", data: deletedUser });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
