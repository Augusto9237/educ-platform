export { default } from "next-auth/middleware";

// export const config = {matcher: ["/dashboard",'/home','/classes','/frequency','/frequencies','/grades', '/financial','/finances']}
export const config = {matcher: ['/admin/:path*']}

