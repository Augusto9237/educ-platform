'use client';
import { useEditSubscriberMutation } from "graphql/api";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { ClasseProps } from "../app/(admin)/classes/page";
import { AdminContext } from "../app/context/AdminContext";
import { ImUserPlus } from "react-icons/im";

interface ClassesProps {
  classe: ClasseProps | null;
}
export function FormEditClasse({ classe }: ClassesProps) {
  const { reloadSubscribers } = useContext(AdminContext);
  const [updateSubscriber] = useEditSubscriberMutation()
  const [classeData, setClasseData] = useState<ClasseProps>({
    id: classe?.id!,
    code: classe?.code,
    name: classe?.name,
    subscribers: classe?.subscribers
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setClasseData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // async function handleUpdate(event: React.FormEvent<HTMLFormElement>): Promise<void> {
  //   event.preventDefault();

  //   try {
  //     await updateSubscriber({
  //       variables: {
  //         id: subscriberData.id,
  //         name: subscriberData?.name,
  //         email: subscriberData?.email,
  //         phone: subscriberData?.phone,
  //         address: subscriberData?.address
  //       }
  //     })
  //     toast.success('Cadastro do aluno atualizado com sucesso!')
  //     reloadSubscribers()

  //   } catch (error) {
  //     console.log(error)
  //     toast.error('Algo deu errado! tente novamente')
  //   }

  // }

  return (
    <form className="flex flex-col flex-1 w-full h-full  max-sm:justify-center">
      <h1 className="mx-auto text-lg font-semibold">Editar Turma</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col p-2 gap-2">
          <span className="text-textColor-600">Código</span>
          <input required className="text-lg font-semibold p-1 rounded" name="name" onChange={handleChange} value={classe?.code!} />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <span className="text-textColor-600">Nome</span>
          <input required className="text-lg font-semibold p-1 rounded" name="email" value={classe?.name!} />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <span className="text-textColor-600 flex flex-1 justify-between">
            Alunos
            <button className="flex gap-2 items-center text-backgroundColor-500 bg-backgroundColor-400/30 px-2 rounded hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400"><ImUserPlus />Adicionar</button>
          </span>
          {classe?.subscribers?.map((subscribe) => (
            <div key={subscribe.id} className="flex flex-1 justify-between p-2 bg-[#ffff] rounded">
              <span>{subscribe.name}</span>
              <span>{subscribe.email}</span>
              <span>{subscribe.phone}</span>
            </div>
          ))}
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