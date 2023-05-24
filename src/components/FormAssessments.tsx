import * as Dialog from '@radix-ui/react-dialog';
import { useCreateAssessmentsMutation } from 'graphql/api';
import { useContext, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AdminContext } from '../app/context/AdminContext';
import { getWeeksInCurrentMonth } from '../app/utils/getWeekCurrentMonth';
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

interface FormValues {
    IdSubsriber: string;
    weeks: {
        Week: {
            primaryReview: number;
            secondReview: number;
            thirdReview: number;
            fourthReview: number;
        },
    }[];
    month: string;
};

export function FormAssessments({ subscribers }: FormAssessmentsPros) {
    const { reloadAssesments } = useContext(AdminContext);
    const [modalForm, setModalForm] = useState(false);
    const [createGrades] = useCreateAssessmentsMutation();
    const [countInput, setCountInput] = useState(1);
    const [formValues, setFormValues] = useState<FormValues>({
        IdSubsriber: '',
        weeks: [],
        month: ''
    });

    const countWeeks = getWeeksInCurrentMonth()

    function handleAddInput() {

        if (countInput < countWeeks) {
            setCountInput(countInput + 1);
        }

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, id } = event.target;
        const weekRegex = /(\d+)Week/; // Regex para extrair o número da semana do ID do input

        setFormValues((prevFormValues) => {
            if (name === 'IdSubsriber' || name === 'month') {
                return {
                    ...prevFormValues,
                    [name]: value
                };
            }

            const match = id.match(weekRegex);
            const weekNumber = match ? parseInt(match[1]) : -1;

            if (weekNumber > 0) {
                const updatedWeeks = [...prevFormValues.weeks];

                // Verifica se a semana já existe no estado
                if (weekNumber <= updatedWeeks.length) {
                    const updatedWeek = {
                        ...updatedWeeks[weekNumber - 1],
                        Week: {
                            ...updatedWeeks[weekNumber - 1].Week,
                            [name]: parseInt(value)
                        }
                    };

                    updatedWeeks[weekNumber - 1] = updatedWeek;
                } else {
                    const newWeek = {
                        Week: {
                            primaryReview: 0,
                            secondReview: 0,
                            thirdReview: 0,
                            fourthReview: 0
                        }
                    };

                    const updatedWeek = {
                        ...newWeek,
                        Week: {
                            ...newWeek.Week,
                            [name]: parseInt(value)
                        }
                    };

                    updatedWeeks.push(updatedWeek);
                }

                return {
                    ...prevFormValues,
                    weeks: updatedWeeks
                };
            }

            return prevFormValues;
        });
    };


    async function handleSubmitCreateGrades(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        await createGrades({
            variables: {
                id: formValues.IdSubsriber,
                month: formValues.month,
                create: formValues.weeks
            }
        })
        reloadAssesments();
        toast.success('Frequência criada com sucesso');
        setModalForm(false);
    }

    function calculateAverageWeeks(i: number): number {
        if (formValues.weeks.length > 0 && formValues.weeks[i]?.Week) {
            const { primaryReview, secondReview, thirdReview, fourthReview } = formValues.weeks[i].Week;
            const weekSum = primaryReview + secondReview + thirdReview + fourthReview;
            return weekSum / 4;
        } else {
            return 0;
        }
    }

    function onClose() {
        setModalForm(false);
        setCountInput(1);
        setFormValues({
            IdSubsriber: '',
            weeks: [],
            month: ''
        });
    }

    return (
        <Dialog.Root modal={modalForm}>
            <Dialog.Trigger onClick={() => setModalForm(true)} className='flex flex-1 max-w-fit items-center font-semibold rounded-md p-2 gap-2 justify-center text-textColor-500 bg-buttonColor-500/80'>
                <FaPlusCircle />
                <span className='leading-none'>Adicionar Avaliação</span>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                    <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl md:max-w-[700px] max-md:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                        <header className='flex flex-1 mb-2'>
                            <h1 className="mx-auto text-lg font-bold">Nova avaliação</h1>
                            <Dialog.Close onClick={() => onClose()} className='absolute right-4 top-4 text-textColor-700'>
                                <strong className='text-textColor-200'>X</strong>
                            </Dialog.Close>
                        </header>
                        <form onSubmit={handleSubmitCreateGrades} className='flex flex-col'>
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
                            {Array.from(Array(countInput)).map((_, index) => (
                                <div key={index} className='relative flex flex-col gap-2 py-2'>
                                    <strong className="flex gap-2 text-textColor-500/70">{index + 1}ª semana</strong>
                                    <div className='grid grid-cols-5'>
                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <label htmlFor="primaryReview">1ª Av</label>
                                            <input id={`primaryReview${index + 1}Week`} max={1000} min={0} type='number' name="primaryReview" onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                            <span className='absolute right-0'>+</span>
                                        </div>

                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <label htmlFor="secondReview">2ª Av</label>
                                            <input id={`secondReview${index + 1}Week`} max={1000} min={0} type='number' name="secondReview" onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                            <span className='absolute right-0'>+</span>
                                        </div>

                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <label htmlFor="thirdReview">3ª Av</label>
                                            <input id={`thirdReview${index + 1}Week`} max={1000} min={0} type='number' name='thirdReview' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                            <span className='absolute right-0'>+</span>
                                        </div>

                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <label htmlFor="fourthReview">4ª Av</label>
                                            <input id={`fourthReview${index + 1}Week`} max={1000} min={0} type='number' name='fourthReview' onChange={handleChange} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />

                                        </div>
                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <span className='absolute left-1'>/4</span>
                                            <span className='absolute left-6'>=</span>
                                            <h1 className='font-semibold'>{calculateAverageWeeks(index)} pts</h1>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                                </div>
                            ))}

                            {countInput < countWeeks ? <>
                                <button onClick={() => handleAddInput()} type='button' className='flex max-w-fit mx-auto py-1 px-2 mt-2 items-center justify-center gap-2 rounded font-semibold text-textColor-700 bg-textColor-300 hover:bg-textColor-300/80'>
                                    <FaPlusCircle />
                                    <span className='leading-snug'>Semana</span>
                                </button>
                            </> : null}
                            <div className="flex flex-1 gap-4 mt-6">
                                <button type="submit" className="flex w-full justify-center items-center rounded-lg py-2 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
                                    <strong>Salvar</strong>
                                </button>

                                <button type="reset" onClick={() => onClose()} className="flex w-full justify-center items-center rounded-lg py-2 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
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