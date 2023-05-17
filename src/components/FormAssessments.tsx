import * as Dialog from '@radix-ui/react-dialog';
import { useCreateAssessmentsMutation } from 'graphql/api';
import { useContext, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
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

// interface WeeksProps {
//     __typename?: "Week" | undefined;
//     id: string;
//     fourthReview?: number | null | undefined;
//     primaryReview?: number | null | undefined;
//     secondReview?: number | null | undefined;
//     thirdReview?: number | null | undefined;
// }[];

interface  FormValues {
    IdSubsriber: string;
    primaryReview1Week: number;
    secondReview1Week: number;
    thirdReview1Week: number;
    fourthReview1Week: number;
    primaryReview2Week: number;
    secondReview2Week: number;
    thirdReview2Week: number;
    fourthReview2Week: number;
    primaryReview3Week: number;
    secondReview3Week: number;
    thirdReview3Week: number;
    fourthReview3Week: number;
    primaryReview4Week: number;
    secondReview4Week: number;
    thirdReview4Week: number;
    fourthReview4Week: number;
    month: string;
  }[];

export function FormAssessments({ subscribers }: FormAssessmentsPros) {
    const { idClasses, classes, setIdClasses, assessmentsByClass, assessmentsLodingByClass, reloadAssesments } = useContext(AdminContext);
    const [modalForm, setModalForm] = useState(false);
    const [formValues, setFormValues] = useState<FormValues[]>([]);
    const [createGrades] = useCreateAssessmentsMutation();
    console.log(formValues)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    return (
        <Dialog.Root modal={modalForm}>
            <Dialog.Trigger onClick={() => setModalForm(true)} className='flex flex-1 max-w-fit items-center font-semibold rounded-md p-2 gap-2 justify-center text-textColor-500 bg-buttonColor-500/80'>
                <FaPlusCircle />
                <span className='leading-none'>Adicionar Avaliação</span>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                    <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl xl:max-w-[700px] max-md:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                        <header className='flex flex-1 mb-2'>
                            <h1 className="mx-auto text-lg font-bold">Nova avaliação</h1>
                            <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                <strong className='text-textColor-200'>X</strong>
                            </Dialog.Close>
                        </header>
                        <form className='flex flex-col'>
                            <div className='relative flex flex-1 w-full gap-4 py-2'>
                                <select required name="IdSubsriber" id="subSelect" onChange={handleChange} className='p-1 w-full bg-backgroundColor-300 rounded-md'>
                                    <option value="">Selecione um aluno</option>
                                    {subscribers?.map((subscriber, i) => (
                                        <option key={subscriber.id} value={subscriber.id}>{i + 1} - {subscriber.name}</option>
                                    ))}
                                </select>
                                <div className='flex gap-2 max-w-fit items-center'>
                                    <label htmlFor="month">Data</label>
                                    <input required type='date' name='month' onChange={handleChange} className='bg-backgroundColor-300 rounded-md w-28 p-1' />
                                </div>
                                <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                            </div>

                            <div id='primaryWeek' className='relative flex flex-col gap-2 py-2'>
                                <strong className="flex gap-2 text-textColor-500/70">1ª semana</strong>
                                <div className='grid grid-cols-5'>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="primaryReview">1ª Av</label>
                                        <input max={1000} min={0} type='number' name='primaryReview1Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="secondReview">2ª Av</label>
                                        <input max={1000} min={0} type='number' name="secondReview1Week" onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="thirdReview">3ª Av</label>
                                        <input max={1000} min={0} type='number' name='thirdReview1Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="fourthReview">4ª Av</label>
                                        <input max={1000} min={0} type='number' name='fourthReview1Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />

                                    </div>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <span className='absolute left-1'>/4</span>
                                        <span className='absolute left-6'>=</span>
                                        <h1 className='font-semibold'>{formValues.length > 0 ? formValues[0].primaryReview1Week + formValues[0].secondReview1Week + formValues[0].thirdReview1Week + formValues[0].fourthReview1Week / 4 : 0} pts</h1>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                            </div>

                            <div id='secondWeek' className='relative flex flex-col gap-2 py-2'>
                                <strong className="flex gap-2 text-textColor-500/70">2ª semana</strong>
                                <div className='grid grid-cols-5'>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="primaryReview">1ª Av</label>
                                        <input max={1000} min={0} type='number' name='primaryReview2Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="secondReview">2ª Av</label>
                                        <input max={1000} min={0} type='number' name="secondReview2Week" onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="thirdReview">3ª Av</label>
                                        <input max={1000} min={0} type='number' name='thirdReview2Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="fourthReview">4ª Av</label>
                                        <input max={1000} min={0} type='number' name='fourthReview2Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />

                                    </div>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <span className='absolute left-1'>/4</span>
                                        <span className='absolute left-6'>=</span>
                                        <h1 className='font-semibold'>900pts</h1>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                            </div>

                            <div id='thirdWeek' className='relative flex flex-col gap-2 py-2'>
                                <strong className="flex gap-2 text-textColor-500/70">3ª semana</strong>
                                <div className='grid grid-cols-5'>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="primaryReview">1ª Av</label>
                                        <input max={1000} min={0} type='number' name='primaryReview3Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="secondReview">2ª Av</label>
                                        <input max={1000} min={0} type='number' name="secondReview3Week" onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="thirdReview">3ª Av</label>
                                        <input max={1000} min={0} type='number' name='thirdReview3Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="fourthReview">4ª Av</label>
                                        <input max={1000} min={0} type='number' name='fourthReview3Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />

                                    </div>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <span className='absolute left-1'>/4</span>
                                        <span className='absolute left-6'>=</span>
                                        <h1 className='font-semibold'>900pts</h1>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                            </div>

                            <div id='fourthWeek' className='relative flex flex-col gap-2 py-2'>
                                <strong className="flex gap-2 text-textColor-500/70">4ª semana</strong>
                                <div className='grid grid-cols-5'>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="primaryReview">1ª Av</label>
                                        <input max={1000} min={0} type='number' name='primaryReview4Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="secondReview">2ª Av</label>
                                        <input max={1000} min={0} type='number' name="secondReview4Week" onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="thirdReview">3ª Av</label>
                                        <input max={1000} min={0} type='number' name='thirdReview4Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                        <span className='absolute right-0'>+</span>
                                    </div>

                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <label htmlFor="fourthReview">4ª Av</label>
                                        <input max={1000} min={0} type='number' name='fourthReview4Week' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />

                                    </div>
                                    <div className='relative flex gap-2 items-center justify-center'>
                                        <span className='absolute left-1'>/4</span>
                                        <span className='absolute left-6'>=</span>
                                        <h1 className='font-semibold'>900pts</h1>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                            </div>
                            <div className="flex flex-1 gap-4 mt-6">
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