

import { NextResponse } from "next/server";

export async function GET() {
    const users = [
        {id: 1, name: 'Me'},
        {id: 2, name: 'Nextjs'}
    ]

    return NextResponse.json(users, {status: 200, statusText: 'success'})
};


