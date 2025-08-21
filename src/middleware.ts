
// import { stackMiddlewares } from "./middlewares/stackMiddlewares";
// import { authMiddleware } from "./middlewares/auth";
// import { customHeader } from "./middlewares/custom";
// import clerkMiddleware from "./middlewares/clerkMiddleware";
// const middlware = [customHeader, authMiddleware]

// export default stackMiddlewares(middlware)

// export const config = {
//     matcher: ['/', '/dashboard/:path*']
// }



import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
const isProtectedRoute = createRouteMatcher(["/dashboard/:path*", "/products(.*)", "/react-form-server", "/user-profile"])

export default clerkMiddleware(async (auth, req) => {
    if(isProtectedRoute(req)) await auth.protect()
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
