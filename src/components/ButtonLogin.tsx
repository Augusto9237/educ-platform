'use client'
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export function ButtonLogin() {
  return (
    <button onClick={() => signIn('google')} className="flex w-full justify-center items-center rounded-2xl py-5 gap-2 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
      <div className="p-1 bg-backgroundColor-100 rounded-full"><FcGoogle size={20} /></div>
      <h1 className="text-lg font-semibold">Entrar com o Google</h1>
    </button >
  )
}