
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const body = await req.json()
        const {searchParams} = new URL(req.url)
        const productID = searchParams.get("productID")
        return NextResponse.json({
            body,
            productID,
            message: "Product data received successfully!"
        })
    }catch(err){
        console.error("Error processing request:", err);
        return NextResponse.json({
            err,
            message: "Failed to process product data."
        })
    }
}