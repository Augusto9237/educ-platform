'use client';
import { useRegisterSubscriberMutation } from "graphql/api";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { StudentAvatar } from "./StudentAvatar";
import { toast } from 'react-toastify';
interface FormProps {
  session: Session | null
}

interface SubscriberDataProps {
  name: string;
  email: string;
  image: string;
  phone: string;
  address: string;
}
export function FormUser({ session }: FormProps) {
  const [createSubscriber] = useRegisterSubscriberMutation()
  const [subscriberData, setSubscriberData] = useState<SubscriberDataProps>({
    name: session?.user?.name!,
    email: session?.user?.email!,
    image: session?.user?.image!,
    phone: '',
    address: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setSubscriberData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleRegister(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      await createSubscriber({
        variables: {
          name: subscriberData?.name,
          email: subscriberData?.email,
          pictureUrl: subscriberData?.image,
          phone: subscriberData?.phone,
          address: subscriberData?.address
        }
      })
      signOut({ callbackUrl: 'http://localhost:3000/' })
      toast.success('Cadastrado com sucesso! faça login novamente')

    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado! tente novamente')
    }

  }

  return (
    <form className="flex flex-col flex-1 w-full  max-sm:justify-center max-sm:pb-14" onSubmit={handleRegister}>
      <div className="flex flex-col items-center h-80 justify-center">
        <StudentAvatar width="100px" height="100px" url={session?.user?.image} />
        <strong className="text-textSecondaryColor-600 text-2xl">{session?.user?.name}</strong>
      </div>

      <div className="flex flex-col bg-backgroundColor-100 rounded-xl p-3">
        <h1 className="mx-auto text-lg font-semibold">Prossiga com o cadastro</h1>
        <div className="flex flex-col p-2">
          <span className="text-textColor-600">Nome Completo</span>
          <input required className="text-lg font-semibold p-1 rounded" name="name" onChange={handleChange} value={subscriberData.name} />
        </div>
        <div className="flex flex-col p-2">
          <span className="text-textColor-600">E-mail</span>
          <input required className="text-lg font-semibold p-1 rounded" name="email" disabled value={session?.user?.email!} />
        </div>
        <div className="flex flex-col p-2">
          <span className="text-textColor-600">Telefone</span>
          <input required className="text-lg font-semibold p-1 rounded" name="phone" onChange={handleChange} value={subscriberData.phone} placeholder="Digite o numero do seu telefone" />
        </div>
        <div className="flex flex-col p-2">
          <span className="text-textColor-600">Endereço</span>
          <input required className="text-lg font-semibold p-1 rounded" name="address" onChange={handleChange} value={subscriberData.address} placeholder="Digite o seu endereço" />
        </div>

        <div className="flex flex-1 gap-4 mt-4">
          <button type="submit" className="flex w-full justify-center items-center rounded-2xl py-4 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
            <strong>Salvar</strong>
          </button>

          <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })} className="flex w-full justify-center items-center rounded-2xl py-4 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
            <strong>Cancelar</strong>
          </button>
        </div>
      </div>
    </form>
  )
}