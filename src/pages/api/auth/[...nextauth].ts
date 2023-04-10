import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID! ,
      clientSecret:process.env.GOOGLE_SECRET!,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  pages: {
    signOut: '/',
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions);
