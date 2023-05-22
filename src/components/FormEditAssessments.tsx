'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { useUpdateandCreateGradesMutation, useUpdateGradesMutation } from 'graphql/api';
import { useContext, useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { RiEditBoxFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { GradesProps } from '../app/(authenticated)/assessments/page';
import { AdminContext } from '../app/context/AdminContext';
import { getWeeksInCurrentMonth } from '../app/utils/getWeekCurrentMonth';

interface FormAssessmentsPros {
    idSubsriber: string | undefined;
    IdGrades: string;
    nameSubsriber: string | undefined;
    month?: string | null | undefined
    grades: GradesProps[];
}

interface FormValues {
    IdGrades: string;
    weeks: {
        Week: {
            id: string;
            primaryReview: number;
            secondReview: number;
            thirdReview: number;
            fourthReview: number;
        },
    }[];
    month: string;
};

export function FormEditAssessments({ idSubsriber, month, grades, nameSubsriber, IdGrades }: FormAssessmentsPros) {
    const { reloadAssesments, assessmentsLodingByClass } = useContext(AdminContext);
    const [modalEditForm, setModalEditForm] = useState(false);
    const [updateGrades] = useUpdateGradesMutation()
    const [updateandCreateGrades] = useUpdateandCreateGradesMutation()
    const [orderInput, setOrderInput] = useState(0)
    const [formValues, setFormValues] = useState<FormValues>({
        IdGrades: '',
        weeks: [],
        month: ''
    });
    const [formValuesUpinsert, setFormValuesUpinsert] = useState<FormValues>({
        IdGrades: '',
        weeks: [],
        month: ''
    });
    const [countInput, setCountInput] = useState(0);

    const countWeeks = getWeeksInCurrentMonth();

    useEffect(() => {
        setFormValues({
            IdGrades: IdGrades!,
            weeks: grades?.map((grade) => ({
                Week: {
                    id: grade.id!,
                    primaryReview: grade.primaryReview!,
                    secondReview: grade.secondReview!,
                    thirdReview: grade.thirdReview!,
                    fourthReview: grade.fourthReview!,
                },
            })),
            month: month!,
        })
    }, [grades]);

    function handleAddInput() {
        const diff = (countWeeks - grades.length);
        if (countInput < diff) {
            setCountInput(countInput + 1);
        }

    }

    function handleChangeUpdate(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value, id } = event.target;
        const weekNumber = Number(id)

        setFormValues((prevFormValues) => {
            if (name === 'IdSubsriber' || name === 'month') {
                return {
                    ...prevFormValues,
                    [name]: value
                };
            }

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
                            id: '',
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

    const handleChangeCreate = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, id } = event.target;
        const weekRegex = /(\d+)Week/; // Regex para extrair o número da semana do ID do input

        setFormValuesUpinsert((prevFormValues) => {
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
                            id: '',
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


    async function handleSubmitUpdateGrades(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        try {

            const weeksArray = formValues.weeks.map(item => ({
                Week: {
                    where: {
                        id: item.Week.id
                    },
                    data: {
                        primaryReview: Number(item.Week.primaryReview),
                        secondReview: Number(item.Week.secondReview),
                        thirdReview: Number(item.Week.thirdReview),
                        fourthReview: Number(item.Week.fourthReview)
                    }
                }
            }));

            const weeksArrayCreate = formValuesUpinsert.weeks.map(item => ({
                Week: {
                    data: {
                        primaryReview: Number(item.Week.primaryReview),
                        secondReview: Number(item.Week.secondReview),
                        thirdReview: Number(item.Week.thirdReview),
                        fourthReview: Number(item.Week.fourthReview)
                    }
                }
            }));

            if (formValuesUpinsert.weeks.length > 0) {
                await updateandCreateGrades({
                    variables: {
                        id: formValues.IdGrades,
                        update: weeksArray,
                        create: weeksArrayCreate,
                    }
                })
            } else {
                await updateGrades({
                    variables: {
                        id: formValues.IdGrades,
                        update: weeksArray
                    }
                });
            }
            reloadAssesments();
            toast.success('Frequência atualizada com sucesso');
            setModalEditForm(false);
            setCountInput(0);
            setFormValuesUpinsert({
                IdGrades: '',
                weeks: [],
                month: ''
            });
        } catch (error) {
            console.log(error);
            toast.error('Algo deu errado, tente novamente!');
        }
    }

    function onClose() {
        setModalEditForm(false);
        setCountInput(0);
        setFormValuesUpinsert({
            IdGrades: '',
            weeks: [],
            month: ''
        });
    }
    return (
        <Dialog.Root modal={modalEditForm}>
            <Dialog.Trigger onClick={() => setModalEditForm(true)} className='flex flex-1 items-center justify-center gap-2 rounded font-semibold text-backgroundColor-500 bg-backgroundColor-400/30 hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400'>
                <RiEditBoxFill />
                <span>Editar</span>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                    <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl xl:max-w-[700px] max-md:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                        <header className='flex flex-1 mb-2'>
                            <h1 className="mx-auto text-lg font-bold">Editar avaliação</h1>
                            <Dialog.Close onClick={() => onClose()} className='absolute right-4 top-4 text-textColor-700'>
                                <strong className='text-textColor-200'>X</strong>
                            </Dialog.Close>
                        </header>
                        <form onSubmit={handleSubmitUpdateGrades} className='flex flex-col'>
                            <div className='relative flex flex-1 w-full gap-4 py-2'>
                                <select required name="IdSubsriber" id="subSelect" onChange={handleChangeUpdate} className='p-1 w-full bg-backgroundColor-300 rounded-md'>
                                    <option value={idSubsriber}>{nameSubsriber}</option>
                                </select>
                                <div className='flex gap-2 max-w-fit items-center'>
                                    <label htmlFor="month">Data</label>
                                    <input required type='date' value={formValues.month} name='month' onChange={handleChangeUpdate} className='bg-backgroundColor-300 rounded-md w-28 p-1' />
                                </div>
                                <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                            </div>
                            {formValues.weeks.map((week, i) => {
                                return (
                                    <div key={week.Week.id} className='relative flex flex-col gap-2 py-2'>
                                        <strong className="flex gap-2 text-textColor-500/70">{i + 1}ª semana</strong>
                                        <div className='grid grid-cols-5'>
                                            <div className='relative flex gap-2 items-center justify-center'>
                                                <label htmlFor="primaryReview">1ª Av</label>
                                                <input id={String(i + 1)} max={1000} min={0} type='number' value={formValues.weeks[i].Week.primaryReview} name="primaryReview" onChange={handleChangeUpdate} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                                <span className='absolute right-0'>+</span>
                                            </div>

                                            <div className='relative flex gap-2 items-center justify-center'>
                                                <label htmlFor="secondReview">2ª Av</label>
                                                <input id={String(i + 1)} max={1000} min={0} type='number' value={formValues.weeks[i].Week.secondReview} name="secondReview" onChange={handleChangeUpdate} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                                <span className='absolute right-0'>+</span>
                                            </div>

                                            <div className='relative flex gap-2 items-center justify-center'>
                                                <label htmlFor="thirdReview">3ª Av</label>
                                                <input id={String(i + 1)} max={1000} min={0} type='number' value={formValues.weeks[i].Week.thirdReview} name='thirdReview' onChange={handleChangeUpdate} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                                <span className='absolute right-0'>+</span>
                                            </div>

                                            <div className='relative flex gap-2 items-center justify-center'>
                                                <label htmlFor="fourthReview">4ª Av</label>
                                                <input id={String(i + 1)} max={1000} min={0} type='number' name='fourthReview' value={formValues.weeks[i].Week.fourthReview} onChange={handleChangeUpdate} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />

                                            </div>
                                            <div className='relative flex gap-2 items-center justify-center'>
                                                <span className='absolute left-1'>/4</span>
                                                <span className='absolute left-6'>=</span>
                                                <h1 className='font-semibold'>{(formValues.weeks[i].Week.primaryReview + formValues.weeks[i].Week.secondReview + formValues.weeks[i].Week.thirdReview + formValues.weeks[i].Week.fourthReview) / 4}pts</h1>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                                    </div>
                                )
                            })}

                            {Array.from(Array(countInput)).map((_, index) => (
                                <div key={index} className='relative flex flex-col gap-2 py-2'>
                                    <strong className="flex gap-2 text-textColor-500/70">{index + grades.length + 1}ª semana</strong>
                                    <div className='grid grid-cols-5'>
                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <label htmlFor="primaryReview">1ª Av</label>
                                            <input id={`primaryReview${index + 1}Week`} max={1000} min={0} type='number' name="primaryReview" onChange={handleChangeCreate} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                            <span className='absolute right-0'>+</span>
                                        </div>

                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <label htmlFor="secondReview">2ª Av</label>
                                            <input id={`secondReview${index + 1}Week`} max={1000} min={0} type='number' name="secondReview" onChange={handleChangeCreate} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                            <span className='absolute right-0'>+</span>
                                        </div>

                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <label htmlFor="thirdReview">3ª Av</label>
                                            <input id={`thirdReview${index + 1}Week`} max={1000} min={0} type='number' name='thirdReview' onChange={handleChangeCreate} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />
                                            <span className='absolute right-0'>+</span>
                                        </div>

                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <label htmlFor="fourthReview">4ª Av</label>
                                            <input id={`fourthReview${index + 1}Week`} max={1000} min={0} type='number' name='fourthReview' onChange={handleChangeCreate} className='bg-backgroundColor-300 rounded-md p-1 max-w-[55px]' />

                                        </div>
                                        <div className='relative flex gap-2 items-center justify-center'>
                                            <span className='absolute left-1'>/4</span>
                                            <span className='absolute left-6'>=</span>
                                            <h1 className='font-semibold'>pts</h1>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                                </div>
                            ))}

                            {countInput < (countWeeks - grades.length) ? <>
                                <button onClick={() => handleAddInput()} type='button' className='flex max-w-fit mx-auto p-2 mt-2 items-center justify-center gap-2 rounded font-semibold text-backgroundColor-500 bg-backgroundColor-400/30 hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400'>
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