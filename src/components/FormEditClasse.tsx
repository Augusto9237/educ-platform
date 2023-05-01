'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { ClasseProps } from "../app/(admin)/classes/page";
import { AdminContext } from "../app/context/AdminContext";
import { ImUserPlus } from "react-icons/im";
import { useEditClassMutation } from "graphql/api";
import { RiDeleteBin2Fill } from 'react-icons/ri';
interface ClassesProps {
  classe: ClasseProps | null;
}
export function FormEditClasse({ classe }: ClassesProps) {
  const { subscribers, reloadSubscribers } = useContext(AdminContext);
  const [classeData, setClasseData] = useState<ClasseProps>({
    id: classe?.id!,
    code: classe?.code,
    name: classe?.name,
    subscribers: classe?.subscribers
  })
  const [updateClass] = useEditClassMutation()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setClasseData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleUpdate(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      await updateClass({
        variables: {
          id: classeData.id,
          code: classeData.code,
          name: classeData.name,
        }
      })
      toast.success('Cadastro do aluno atualizado com sucesso!')
      reloadSubscribers()

    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado! tente novamente')
    }

  }

  return (
    <form className="flex flex-col flex-1 w-full h-full  max-sm:justify-center">
      <h1 className="mx-auto text-lg font-semibold">Editar Turma</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col p-2 gap-2">
          <span className="text-textColor-600  font-semibold">Código</span>
          <input required className="text-lg  p-2 rounded" name="name" onChange={handleChange} value={classe?.code!} />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <span className="text-textColor-600  font-semibold">Nome</span>
          <input required className="text-lg p-2 rounded" name="email" value={classe?.name!} />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <span className="text-textColor-600 flex flex-1 justify-between  font-semibold">
            Alunos
          </span>
          <div className='p-2 bg-[#ffff] rounded overflow-y-auto'>
            {classe?.subscribers?.map((subscribe, index) => (
              <div key={subscribe.id} className="flex flex-1 text-lg justify-between">
                <span>{index + 1} - {subscribe.name}</span>
                <span>{subscribe.email}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 gap-4 mt-4">
          <button type="submit" className="flex w-full justify-center items-center rounded-lg py-2 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
            <strong>Salvar</strong>
          </button>

          <button type="reset" className="flex w-full justify-center items-center rounded-lg py-2 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
            <strong>Cancelar</strong>
          </button>
        </div>
      </div>
    </form>
  )
}