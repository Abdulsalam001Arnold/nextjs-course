
//auth.ts
import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { MiddlewareFactory } from './type';

export const authMiddleware: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const token = request.cookies.get('token')?.value;
        console.log(token)
        if(!token && request.nextUrl.pathname.startsWith('/dashboard')){
            return NextResponse.redirect(new URL('/login', request.url))
        }
        return next(request, _next)
    }
}
