
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./type";


export const customHeader: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const response = NextResponse.next()
        if(request.nextUrl.pathname.startsWith('/')){
            response.headers.set('X-powered-by', 'Abdul Middleware in Next.js');
        }
        return response;
    }
}