'use client';
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { StudentAvatar } from "./StudentAvatar";

interface FormProps {
    session: Session | null
}
export function FormUser({session}:FormProps){
    return(
        <div className="flex flex-col flex-1 w-full  max-sm:justify-center max-sm:pb-14">
        <div className="flex flex-col items-center h-80 justify-center">
          <StudentAvatar width="100px" height="100px" url={session?.user?.image} />
          <strong className="text-textSecondaryColor-600 text-2xl">{session?.user?.name}</strong>
        </div>

        <div className="flex flex-col bg-backgroundColor-100 rounded-xl p-3">
          <h1 className="mx-auto text-lg font-semibold">Prossiga com o cadastro</h1>
          <div className="flex flex-col p-2">
            <span className="text-textColor-600">Nome Completo</span>
            <input required className="text-lg font-semibold p-1 rounded " defaultValue={session?.user?.name!} />
          </div>
          <div className="flex flex-col p-2">
            <span className="text-textColor-600">E-mail</span>
            <input required className="text-lg font-semibold p-1 rounded" disabled value={session?.user?.email!} />
          </div>
          <div className="flex flex-col p-2">
            <span className="text-textColor-600">Telefone</span>
            <input required className="text-lg font-semibold p-1 rounded" placeholder="Digite o numero do seu telefone" />
          </div>
          <div className="flex flex-col p-2">
            <span className="text-textColor-600">Endereço</span>
            <input required className="text-lg font-semibold p-1 rounded" placeholder="Digite o seu endereço" />
          </div>

          <div className="flex flex-1 gap-4 mt-4">
            <button className="flex w-full justify-center items-center rounded-2xl py-4 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
              <strong>Salvar</strong>
            </button>

            <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })} className="flex w-full justify-center items-center rounded-2xl py-4 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
              <strong>Cancelar</strong>
            </button>
          </div>
        </div>
      </div>
    )
}