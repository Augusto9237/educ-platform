'use client';
import { AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";
import { Background } from "@/components/components/Background";
import { Container } from "@/components/components/Container";
import Logo from "@/components/components/Logo";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  console.log(session)

  if (session) {
    return (
      <>
        <Background />
        <Container>
          <div className="max-sm:flex-col max-sm:flex max-sm:flex-1 w-full max-sm:h-[96vh] sm:h-[96vh] sm:grid sm:grid-cols-2 items-center justify-between">
            <div className="max-sm:my-auto sm:flex sm:flex-1">
              <Logo />
            </div>
            <Link href='/home' className="w-full sm:flex sm:flex-1">
              <button onClick={() => signOut()} >
                <strong className="mr-1">Sair </strong><AiFillGoogleCircle size={20} />
              </button>
            </Link>

          </div>
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Background />
        <Container>
          <div className="max-sm:flex-col max-sm:flex max-sm:flex-1 w-full max-sm:h-[96vh] sm:h-[96vh] sm:grid sm:grid-cols-2 items-center justify-between">
            <div className="max-sm:my-auto sm:flex sm:flex-1">
              <Logo />
            </div>
              <button onClick={()=> signIn()} className="flex w-full justify-center items-center rounded-2xl py-5 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
                <strong className="mr-1">Entrar com o </strong><AiFillGoogleCircle size={20} />
              </button >

          </div>
        </Container>
      </>
    )
  }

}
