import { Background } from "@/components/components/Background";
import { Container } from "@/components/components/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "@/components/pages/api/auth/[...nextauth]";
import { FormUser } from "@/components/components/FormUser";
import ProvidersLayout from "./ProviderLayout";
import { StudentAvatar } from "@/components/components/StudentAvatar";


export default async function Register() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <ProvidersLayout>
        <Background />
        <Container>
          <div className="flex flex-col flex-1 w-full h-full my-auto bg-backgroundColor-100 rounded-xl  max-sm:justify-center">
            <div className="flex flex-col items-center h-80 justify-center">
              <StudentAvatar width="100px" height="100px" url={session?.user?.image} />
              <strong className="text-textSecondaryColor-600 text-2xl">{session?.user?.name}</strong>
            </div>
            <h1 className="mx-auto text-lg font-semibold">Prossiga com o cadastro</h1>
            <FormUser session={session} />
          </div>
        </Container>
      </ProvidersLayout>
    </>
  )
}

