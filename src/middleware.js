import { NextResponse } from "next/server"


export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/login' || path === '/register' || path === '/about' || path === '/' || path === '/contact' || path === '/gift-pack' || path === '/products' || path === '/top-deals' || path === '/wishlist' || path === '/cart'
    const token = request.cookies.get('token')?.value || ''

    console.log(path, "path");

    if ((path === '/login' || path === '/register') && token) {
        if (path === '/login' || path === '/register') {
            return NextResponse.redirect(new URL("/", request.nextUrl))
        }
        return NextResponse.redirect(new URL(path, request.nextUrl))
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/login", request.nextUrl))
    }


}
export const config = {
    matcher: [
        '/',
        '/about',
        '/admin',
        '/cart',
        '/checkout',
        '/contact',
        '/gift-pack',
        '/login',
        '/order',
        '/products',
        '/profile',
        '/signup',
        '/register',
        '/top-deals',
        '/wishlist',
    ]
}