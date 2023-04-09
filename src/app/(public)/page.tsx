import { Background } from "@/components/components/Background";
import { Container } from "@/components/components/Container";
import Logo from "@/components/components/Logo";
import { ButtonLogin } from "@/components/components/ButtonLogin";
import { getServerSession } from "next-auth";
import { authOptions } from "@/components/pages/api/auth/[...nextauth]";
import { redirect } from 'next/navigation';
import { Spinner } from "@/components/components/Spinner";

export default async function Login() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/home');
  }
  
  return (
    <>
      <Background />
      <Container>
        <div className="max-sm:flex-col max-sm:flex max-sm:flex-1 w-full max-sm:h-[96vh] sm:h-[96vh] sm:grid sm:grid-cols-2 items-center justify-between">
          <div className="max-sm:my-auto sm:flex sm:flex-1">
            <Logo />
          </div>
          {!session && (
            <ButtonLogin />
          )}
          {session && (
            <Spinner/>
          )}
        </div>
      </Container>
    </>
  )
}

