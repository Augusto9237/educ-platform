'use client';
import { AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";
import { Background } from "app/components/Background";
import { Container } from "app/components/Container";
import Logo from "app/components/Logo";
import { Button } from "app/components/Button";



export default function Login() {
  return (
    <>
      <Background />
      <Container>
        <div className="max-sm:flex-col max-sm:flex max-sm:flex-1 w-full max-sm:h-[96vh] sm:h-[96vh] sm:grid sm:grid-cols-2 items-center justify-between">
          <div className="max-sm:my-auto sm:flex sm:flex-1">
            <Logo />
          </div>
          <Link href='/home' className="w-full sm:flex sm:flex-1">
            <Button>
              <strong className="mr-1">Entrar com o </strong><AiFillGoogleCircle size={20} />
            </Button>
          </Link>

        </div>
      </Container>
    </>
  )
}
