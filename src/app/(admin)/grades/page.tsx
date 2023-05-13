'use client';
import { CardGradesSubscriber } from '@/components/components/CardGradesSubscriber';
import { WeekGrades } from '@/components/components/WeekGrades';
import * as Dialog from '@radix-ui/react-dialog';

import { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';

export interface GradesProps {
    __typename?: "Week" | undefined;
    id: string;
    fourthReview?: number | null | undefined;
    primaryReview?: number | null | undefined;
    secondReview?: number | null | undefined;
    thirdReview?: number | null | undefined;
}[]


export default function Grades() {
    const {idClasses, classes, setIdClasses, assessmentsByClass} = useContext(AdminContext);
    const [gradesSelected, setGradesSelected] = useState<GradesProps[]>([]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any) {
        const { name, value } = event.target;
        setIdClasses((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
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



                <Dialog.Root>
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
                    </Dialog.Root> 
            </section>

        </>
    )
}