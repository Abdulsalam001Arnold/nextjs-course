import { NextResponse } from "next/server";



export async function GET(req: Request, params: any ) {
  try {
    const userId = params.id;
    return NextResponse.json(
      { message: `User with id ${userId} found` },
      { status: 200, statusText: "success" },
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500, statusText: "error" },
    );
  }
}


