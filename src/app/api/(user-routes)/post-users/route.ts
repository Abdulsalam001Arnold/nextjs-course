
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(request: Request){
    try{
        const body = await request.json()
        const product = await prisma.product.create({
            data:{
                title: body.title,
                price: body.price,
                description: body.description,
            }
        })
        return NextResponse.json(product, {status: 201, statusText: 'created'})
    }catch(err){
        return NextResponse.json({error: 'Something went wrong'}, {status: 500, statusText: 'error'})
    }
}