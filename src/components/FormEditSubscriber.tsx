'use client';
import { useEditSubscriberMutation } from "graphql/api";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { AdminContext } from "../app/context/AdminContext";


interface SubscriberDataProps {
  id: string;
  name: string;
  email: string;
  pictureUrl?: string | null;
  phone?: string | null;
  address?: string | null;
  class?: {
    __typename?: "Class";
    code?: string;
    id: string;
    name?: string;
  };
}

interface SubscriberProps {
  subscriber: SubscriberDataProps | null;
}
export function FormEditSubscriber({ subscriber }: SubscriberProps) {
  const { classes, reloadSubscribers } = useContext(AdminContext);
  const [updateSubscriber] = useEditSubscriberMutation()
  const [selectedClassId, setSelectedClassId] = useState('');
  const [subscriberData, setSubscriberData] = useState<SubscriberDataProps>({
    id: subscriber?.id!,
    name: subscriber?.name!,
    email: subscriber?.email!,
    phone: subscriber?.phone!,
    address: subscriber?.address,
    class: subscriber?.class
  })

  console.log(subscriberData)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any) => {
    const { name, value } = event.target;

    setSubscriberData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleUpdate(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      await updateSubscriber({
        variables: {
          id: subscriberData.id,
          name: subscriberData?.name,
          email: subscriberData?.email,
          phone: subscriberData?.phone,
          address: subscriberData?.address,
          id1: (subscriberData.class?.id || subscriberData.class)?.toString()
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
    <form className="flex flex-col flex-1 w-full h-full  max-sm:justify-center" onSubmit={handleUpdate}>
      <h1 className="mx-auto text-lg font-semibold">Editar Aluno(a)</h1>
      <div className="flex flex-col">
        <div className="flex flex-col p-2">
          <span className="text-textColor-600">Nome Completo</span>
          <input required className="text-lg font-semibold p-1 rounded" name="name" onChange={handleChange} value={subscriberData.name!} />
        </div>
        <div className="flex flex-col p-2">
          <span className="text-textColor-600">E-mail</span>
          <input required className="text-lg font-semibold p-1 rounded" name="email" disabled value={subscriberData.email!} />
        </div>
        <div className="flex flex-col p-2">
          <span className="text-textColor-600">Telefone</span>
          <input required className="text-lg font-semibold p-1 rounded" name="phone" onChange={handleChange} value={subscriberData.phone!} placeholder="Digite o numero do seu telefone" />
        </div>
        <div className="flex flex-col p-2">
          <span className="text-textColor-600">Endereço</span>
          <input required className="text-lg font-semibold p-1 rounded" name="address" onChange={handleChange} value={subscriberData.address!} placeholder="Digite o seu endereço" />
        </div>

        <div className="flex flex-col p-2">
          <span className="text-textColor-600">Turma</span>
          <select required className="text-lg font-semibold p-1 rounded" name="class" defaultValue={subscriberData.class?.name!} value={subscriberData.class?.id!} onChange={handleChange}>
            <option value=''>Selecione uma turma</option>
            {classes?.classes.map((classe) => (
              <option key={classe.id} value={classe.id}>{classe.code} - {classe.name}</option>
            ))}
          </select>
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