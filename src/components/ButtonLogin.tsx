'use client'
import {  signIn } from "next-auth/react";
import { AiFillGoogleCircle } from "react-icons/ai";
 
export function ButtonLogin() {
    return (
        <button onClick={() => signIn('google')} className="flex w-full justify-center items-center rounded-2xl py-5 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
        <strong className="mr-1">Entrar com o </strong><AiFillGoogleCircle size={20} />
      </button >
    )
}