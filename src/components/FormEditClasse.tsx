import { SetStateAction, useContext, useState } from "react";
import { toast } from 'react-toastify';
import { ClasseProps } from "../app/(admin)/classes/page";
import { AdminContext } from "../app/context/AdminContext";
import { useEditClassMutation } from "graphql/api";
import { RiDeleteBin2Fill } from 'react-icons/ri';
interface ClassesProps {
  classe: ClasseProps | null;
  setIsOpen: (value: SetStateAction<boolean>) => void
}
export function FormEditClasse({ classe, setIsOpen }: ClassesProps) {
  const { reloadClasses } = useContext(AdminContext);
  const [classeData, setClasseData] = useState<ClasseProps>({
    id: classe?.id!,
    code: classe?.code,
    name: classe?.name,
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
      toast.success('Cadastro da turma atualizado com sucesso!');
      reloadClasses();
      setIsOpen(false)

    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado! tente novamente')
    }

  }

  return (
    <form className="flex flex-col flex-1 w-full h-full  max-sm:justify-center" onSubmit={handleUpdate}>
      <h1 className="mx-auto text-lg font-semibold">Editar Turma</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col p-2 gap-2">
          <span className="text-textColor-600  font-semibold">Código</span>
          <input required className="text-lg  p-2 rounded" name="code" onChange={handleChange} value={classeData.code!} />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <span className="text-textColor-600  font-semibold">Nome</span>
          <input required className="text-lg p-2 rounded" name="name" onChange={handleChange} value={classeData.name!} />
        </div>

        <div className="flex flex-1 gap-4 mt-4">
          <button type="submit" className="flex w-full justify-center items-center rounded-lg py-2 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
            <strong>Salvar</strong>
          </button>

          <button type="reset" onClick={() => setIsOpen(false)} className="flex w-full justify-center items-center rounded-lg py-2 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
            <strong>Cancelar</strong>
          </button>
        </div>
      </div>
    </form>
  )
}