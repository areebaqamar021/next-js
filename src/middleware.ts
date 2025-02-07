import { auth } from "@src/lib"
import { NextResponse } from "next/server"

export default auth((req) => {
    console.log("🚀 ~ auth ~ req:", req.auth)
    if (!!req.auth?.user?.email && req.nextUrl.pathname === "/login") {
        return NextResponse.redirect(new URL("/", req.nextUrl))
    }
    return NextResponse.next()
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}