import conn from "@/lib/mongodb";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await conn();

  const id = params;

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  console.log("ID: ", params);

  return NextResponse.json({ id });
}

// export async function GET(req: Request) {
//   try {
//     const { id } = await req.json();

//     if (!id) {
//       return NextResponse.json(
//         { error: "User ID is required" },
//         { status: 400 }
//       );
//     }

//     await conn();

//     const user = await User.findById(id);

//     if (user) {
//       return NextResponse.json({ message: "User found", data: user });
//     } else {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

export async function PUT() {
  return NextResponse.json({ message: "Put request" });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    await conn();

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User Deleted..." }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete Enfant" },
      { status: 500 }
    );
  }
}
