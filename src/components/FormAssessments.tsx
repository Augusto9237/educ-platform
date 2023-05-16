import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useState } from 'react';
import { AdminContext } from '../app/context/AdminContext';
interface FormAssessmentsPros {
    subscribers?: {
        __typename?: "Subscriber" | undefined;
        id: string;
        name: string;
        email: string;
        phone?: string | null | undefined;
        address?: string | null | undefined;
        gradeses: {
            __typename?: "Grades" | undefined;
            id: string;
            month?: any;
            weeklyAssessments: {
                __typename?: "Week" | undefined;
                id: string;
                fourthReview?: number | null | undefined;
                primaryReview?: number | null | undefined;
                secondReview?: number | null | undefined;
                thirdReview?: number | null | undefined;
            }[];
        }[];
    }[] | undefined;
}

export function FormAssessments({ subscribers }: FormAssessmentsPros) {
    const { idClasses, classes, setIdClasses, assessmentsByClass, assessmentsLodingByClass, reloadAssesments } = useContext(AdminContext);
    const [modalForm, setModalForm] = useState(false);
    return (
        <Dialog.Root modal={modalForm}>
            <Dialog.Trigger onClick={() => setModalForm(true)} className='flex flex-1 items-center justify-center gap-2 rounded font-semibold bg-textColor-300/60 text-textSecondaryColor-600 hover:bg-textColor-200'>
                <span>+ Notas</span>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                    <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl xl:max-w-[700px] max-md:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                        <header className='flex flex-1 mb-2'>
                            <h1 className="mx-auto text-lg font-bold">Adicionar avaliação</h1>
                            <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                <strong className='text-textColor-200'>X</strong>
                            </Dialog.Close>
                        </header>
                        <form className='flex flex-col'>
                            <div className='relative flex flex-1 w-full gap-4 py-2'>
                                <select required name="subscriberSelect" id="" className='p-1 w-full bg-backgroundColor-300 rounded-md'>
                                    <option value="">Selecione um aluno</option>
                                    {subscribers?.map((subscriber, i) => (
                                        <option key={subscriber.id} value={subscriber.id}>{i+1} - {subscriber.name}</option>
                                    ))}
                                </select>
                                <div className='flex gap-2 max-w-fit items-center'>
                                    <label htmlFor="">Data</label>
                                    <input required type='date' className='bg-backgroundColor-300 rounded-md w-28 p-1' />
                                </div>
                                <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                            </div>

                            <div className='relative flex flex-col gap-2 py-2'>
                                <strong className="flex gap-2 text-textColor-500/70">1ª semana</strong>
                                <div className='grid grid-cols-5'>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="">1ª Av</label>
                                        <input max={1000} min={0} type='number' className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="">2ª Av</label>
                                        <input max={1000} min={0} type='number' className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="">3ª Av</label>
                                        <input max={1000} min={0} type='number' className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="">4ª Av</label>
                                        <input max={1000} min={0} type='number' className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        
                                    </div>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                    <span className='absolute left-1'>/4</span>
                                    <span className='absolute left-6'>=</span>
                                        <h1 className='font-semibold'>900pts</h1>  
                                    </div>
                                </div>
                                <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                            </div>
                            <div className="flex flex-1 gap-4 mt-4">
                                <button type="submit" className="flex w-full justify-center items-center rounded-lg py-2 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
                                    <strong>Salvar</strong>
                                </button>

                                <button type="reset" onClick={() => setModalForm(false)} className="flex w-full justify-center items-center rounded-lg py-2 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
                                    <strong>Cancelar</strong>
                                </button>
                            </div>
                        </form>

                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )
}