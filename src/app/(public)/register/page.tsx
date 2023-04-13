import { Background } from "@/components/components/Background";
import { Container } from "@/components/components/Container";
import Logo from "@/components/components/Logo";
import { ButtonLogin } from "@/components/components/ButtonLogin";
import { getServerSession } from "next-auth";
import { authOptions } from "@/components/pages/api/auth/[...nextauth]";
import { redirect } from 'next/navigation';
import { Spinner } from "@/components/components/Spinner";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import { StudentAvatar } from "@/components/components/StudentAvatar";
import { signIn } from "next-auth/react";
import { FormUser } from "@/components/components/FormUser";


export default async function Register() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Background />
      <Container>
        <FormUser session={session} />
      </Container>
    </>
  )
}

