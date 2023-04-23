import { Background } from "@/components/components/Background";
import { Container } from "@/components/components/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "@/components/pages/api/auth/[...nextauth]";
import { FormUser } from "@/components/components/FormUser";
import ProvidersLayout from "./ProviderLayout";


export default async function Register() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <ProvidersLayout>
        <Background />
        <Container>
          <FormUser session={session} />
        </Container>
      </ProvidersLayout>
    </>
  )
}

