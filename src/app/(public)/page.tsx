import { Background } from "@/components/components/Background";
import { Container } from "@/components/components/Container";
import Logo from "@/components/components/Logo";
import { ButtonLogin } from "@/components/components/ButtonLogin";
import { getServerSession } from "next-auth";
import { authOptions } from "@/components/pages/api/auth/[...nextauth]";
import { redirect } from 'next/navigation';
import { Spinner } from "@/components/components/Spinner";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    const { data: subscribers } = await client.query({
      query: gql`
           query Subscriber($email: String = "") {
            subscriber(where: {email: $email}) {
              email
            }
          }
       `,
      variables: { email: session.user.email },
      context: {
        fetchOptions: {
          cache: "no-store"
        },
      },
    });

    const { data: teachers } = await client.query({
      query: gql`
        query Teacher($email: String = "") {
          teacher(where: {email: $email}){
            email
          }
        }
       `,
      variables: { email: session.user.email },
      context: {
        fetchOptions: {
          cache: "no-store"
        },
      },
    });


     if (subscribers.subscriber?.email === session.user.email) {
       redirect('/subscriber/home');
     }

     if (teachers.teacher?.email === session.user.email) {
      redirect('/dashboard');
    }

     redirect('/register');
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
            <Spinner />
          )}
        </div>
      </Container>
    </>
  )
}

