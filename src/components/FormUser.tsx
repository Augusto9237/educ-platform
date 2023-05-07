'use client';
import { useRegisterSubscriberMutation } from "graphql/api";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { SetStateAction, useState } from "react";
import { StudentAvatar } from "./StudentAvatar";
import { toast } from 'react-toastify';
interface FormProps {
  session?: Session | null
  setIsOpenAddSubscriber?: (value: SetStateAction<boolean>) => void
}

interface SubscriberDataProps {
  name: string;
  email: string;
  image: string;
  phone: string;
  address: string;
}
export function FormUser({ session, setIsOpenAddSubscriber }: FormProps) {
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
      if (session) {
        signOut({ callbackUrl: 'http://localhost:3000/' })
      }
      toast.success('Cadastrado com sucesso! faça login novamente')

    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado! tente novamente')
    }

  }

  return (
    <form onSubmit={handleRegister}>
      <div className="flex flex-col p-3">
        {!session && (
          <div className="flex flex-col p-2">
            <span className="text-textColor-600">Foto de perfil</span>
            <input required className="text-lg font-semibold p-1 rounded" name="image" onChange={handleChange} value={subscriberData.image} placeholder="Digite o seu nome completo" />
          </div>
        )}

        <div className="flex flex-col p-2">
          <span className="text-textColor-600">Nome completo</span>
          <input required className="text-lg font-semibold p-1 rounded" name="name" onChange={handleChange} value={subscriberData.name} placeholder="Digite o seu nome completo" />
        </div>
        <div className="flex flex-col p-2">
          <span className="text-textColor-600">E-mail</span>
          <input required className="text-lg font-semibold p-1 rounded" name="email" disabled={session ? true : false} onChange={handleChange} value={session?.user?.email!} placeholder="Digite o seu e-mail" />
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
          <button type="submit" className="flex w-full justify-center items-center rounded-lg py-2 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
            <strong>Salvar</strong>
          </button>

          {session && (
            <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })} className="flex w-full justify-center items-center rounded-lg py-2 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
              <strong>Cancelar</strong>
            </button>
          )}

          {!session && (
            <button onClick={setIsOpenAddSubscriber ? () => setIsOpenAddSubscriber(false) : () => null} className="flex w-full justify-center items-center rounded-lg py-2 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
              <strong>Cancelar</strong>
            </button>
          )}

        </div>
      </div>
    </form>
  )
}