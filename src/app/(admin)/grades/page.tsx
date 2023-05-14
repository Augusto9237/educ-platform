'use client';
import { WeekGrades } from '@/components/components/WeekGrades';
import * as Dialog from '@radix-ui/react-dialog';
import * as Progress from '@radix-ui/react-progress';
import clsx from 'clsx';
import { useDeleteFrequencyMutation, useDeleteGradesMutation } from 'graphql/api';

import { useContext, useState } from 'react';
import { HiChartSquareBar } from 'react-icons/hi';
import { RiDeleteBin2Fill, RiEditBoxFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { AdminContext } from '../../context/AdminContext';
import { calculateAverage } from '../../utils/calculateAverage';

export interface GradesProps {
    __typename?: "Week" | undefined;
    id: string;
    fourthReview?: number | null | undefined;
    primaryReview?: number | null | undefined;
    secondReview?: number | null | undefined;
    thirdReview?: number | null | undefined;
}[];

export default function Grades() {
    const { idClasses, classes, setIdClasses, assessmentsByClass, assessmentsLodingByClass, reloadAssesments } = useContext(AdminContext);
    const [gradesSelected, setGradesSelected] = useState<GradesProps[]>([]);
    const [deleteGrades] = useDeleteGradesMutation()

    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any) {
        const { name, value } = event.target;
        setIdClasses((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    async function handleDeleteReviews(id: string) {
        try {
            await deleteGrades({
                variables: {
                    id: id
                }
            })
            toast.success('Avaliação excluída com sucesso!');
            reloadAssesments();
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <section className="flex flex-col gap-4 flex-1 p-4 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100 overflow-hidden">
                <header className='grid grid-cols-3 items-center mb-1'>
                    <div className='flex flex-1'>
                        <select required className="text-lg p-1 rounded-md bg-textColor-200/20" name="id" value={idClasses.id} onChange={handleChange}>
                            <option value=''>Selecione uma turma</option>
                            {classes?.classes.map((classe) => (
                                <option key={classe.id} value={classe.id}>{classe.code} - {classe.name}</option>
                            ))}
                        </select>
                    </div>

                    <h1 className="mx-auto text-lg font-bold">Avaliações</h1>

                    <div className='flex justify-end'>

                    </div>

                </header>
                <div className='flex flex-1 justify-center'>
                    {idClasses.id === '' ? <h1>Nenhuma turma Selecionada</h1>
                        :
                        <div className="flex flex-col flex-1">
                            <div className="relative grid grid-cols-7 py-2 text-textColor-500/60">
                                <div className="flex font-semibold justify-center">Nº</div>
                                <div className="flex font-semibold col-span-2">Aluno</div>
                                <div className="flex font-semibold justify-center">Média</div>
                                <div className="flex font-semibold justify-center">Desempenho</div>
                                <div className="flex font-semibold justify-center col-span-2">•••</div>
                                <div className="absolute bottom-0 h-[2px] w-full bg-textColor-200" />
                            </div>
                            {!assessmentsLodingByClass && (
                                <>
                                    {assessmentsByClass?.gradeses.map((grades, i) => {
                                        const assessments = grades.weeklyAssessments;

                                        const average = calculateAverage(assessments);
                                        const percentage = average > 0 ? Math.round((average / 1000) * 100) : 0;

                                        return (
                                            <div key={grades.id} className="relative grid grid-cols-7 py-2 gap-2 overflow-hidden overflow-x-auto hover:bg-textColor-200/30">
                                                <div className="flex justify-center">{i + 1}</div>
                                                <div className="flex col-span-2">{grades.subscriber?.name}</div>
                                                <div className="flex justify-center">{average} pts</div>
                                                <div className="flex justify-center">
                                                    <Progress.Root
                                                        className="relative overflow-hidden bg-backgroundColor-300 rounded-md w-full"
                                                        style={{
                                                            transform: 'translateZ(0)',
                                                        }}
                                                        value={percentage}
                                                    >
                                                        <Progress.Indicator
                                                            className={clsx("flex justify-end px-2 items-center w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]", {
                                                                'text-textSecondaryColor-200 bg-textSecondaryColor-200/40': percentage === 0,
                                                                'text-textSecondaryColor-200 bg-textSecondaryColor-200/30': percentage >= 0 && percentage < 20,
                                                                'text-buttonColor-500/90 bg-buttonColor-500/80': percentage >= 20 && percentage < 40,
                                                                'text-backgroundColor-500 bg-backgroundColor-400/80': percentage >= 40 && percentage < 80,
                                                                'text-textSecondaryColor-400 bg-textSecondaryColor-300/20': percentage >= 80,
                                                            })}

                                                            style={{ transform: `translateX(-${100 - percentage}%)` }}
                                                        >
                                                            <span className="text-backgroundColor-50 text-xs leading-none">{percentage}%</span>
                                                        </Progress.Indicator>
                                                    </Progress.Root>
                                                </div>
                                                <div className='flex gap-2 col-span-2'>
                                                    <Dialog.Root>
                                                        <Dialog.Trigger onClick={() => setGradesSelected(grades.weeklyAssessments)} className='flex flex-1 items-center justify-center gap-2 rounded font-semibold bg-textColor-300/60 text-textSecondaryColor-600 hover:bg-textColor-200'>
                                                            <HiChartSquareBar />
                                                            <span>Notas</span>
                                                        </Dialog.Trigger>

                                                        <Dialog.Portal>
                                                            <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                                                <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl xl:max-w-[600px] max-md:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                                                    <header className='flex flex-1'>
                                                                        <h1 className="mx-auto text-lg font-bold">Avaliação detalhada</h1>
                                                                        <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                                                            <strong className='text-textColor-200'>X</strong>
                                                                        </Dialog.Close>
                                                                    </header>

                                                                    <WeekGrades grades={gradesSelected} />
                                                                </Dialog.Content>
                                                            </Dialog.Overlay>
                                                        </Dialog.Portal>
                                                    </Dialog.Root>
                                                    <button className='flex flex-1 items-center justify-center gap-2 rounded font-semibold text-backgroundColor-500 bg-backgroundColor-400/30 hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400'>
                                                        <RiEditBoxFill />
                                                        <span>Editar</span>
                                                    </button>
                                                    <button onClick={() => handleDeleteReviews(grades.id)} className='flex flex-1 items-center justify-center gap-2 rounded text-textSecondaryColor-200 bg-textSecondaryColor-200/25 hover:bg-textSecondaryColor-200/20'>
                                                        <RiDeleteBin2Fill />
                                                        <span>Excluir</span>
                                                    </button>
                                                </div>
                                                <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                            </div>
                                        )
                                    })}
                                </>
                            )}
                            {assessmentsLodingByClass && (
                                <div className='flex flex-1 py-2 justify-center'>
                                    <div
                                        className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-backgroundColor-300 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                        role="status">
                                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                        >Loading...
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                </div>

                {/* <Dialog.Root>
                        {assessmentsByClass?.gradeses.map((grades) => (
                            <Dialog.Trigger key={grades.id} onClick={() => setGradesSelected(grades.weeklyAssessments)}>
                                <CardGradesSubscriber gradeses={grades} month={grades.month} />
                            </Dialog.Trigger>
                        ))} 
                        <Dialog.Portal>
                            <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                    <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                        <strong className='text-textColor-200'>X</strong>
                                    </Dialog.Close>
                                    <WeekGrades grades={gradesSelected} />
                                </Dialog.Content>
                            </Dialog.Overlay>
                        </Dialog.Portal>
                    </Dialog.Root>  */}
            </section>

        </>
    )
}