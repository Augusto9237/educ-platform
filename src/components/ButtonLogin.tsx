'use client'
import { signIn } from "next-auth/react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export function ButtonLogin() {
  return (
    <button onClick={() => signIn('google')} className="flex w-full justify-center items-center rounded-2xl py-5 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
      <strong className="mr-1">Entrar com o </strong><div className="p-1 bg-backgroundColor-100 rounded-full"><FcGoogle size={20} /></div>
    </button >
  )
}