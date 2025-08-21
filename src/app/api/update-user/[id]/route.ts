import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: any) {
  const userId = params?.id;
  const body = await req.json();

  if (!userId || !body) {
    return NextResponse.json({ error: "Missing user ID or body" }, { status: 400 });
  }

  return NextResponse.json(
    {
      updatedFields: body,
      message: `User with id ${userId} updated successfully`,
    },
    { status: 201 }
  );
}
