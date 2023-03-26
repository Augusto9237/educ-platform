'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { CardGrades } from 'app/components/CardGrades';
import { WeekGrades } from 'app/components/WeekGrades';
import { GlobalContext } from 'app/context/GlobalContext';
import dayjs from 'dayjs';

import { useContext } from 'react';


export default function Assesments() {
    const { user, loadingUser } = useContext(GlobalContext)

    return (
        <>
            {!loadingUser && (
                <section className="fl:grid grid-cols-2 flex flex-col flex-1 gap-6 justify-start max-sm:pb-14">
                    <Dialog.Root>
                        {user?.values?.gradeses.map((grades) => (
                            <Dialog.Trigger key={grades.id}>
                                <CardGrades gradeses={grades} month={grades.month} />
                            </Dialog.Trigger>
                        ))} 
                        <Dialog.Portal>
                            <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                    <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                        <strong className='text-textColor-200'>X</strong>
                                    </Dialog.Close>
                                    <WeekGrades />
                                </Dialog.Content>
                            </Dialog.Overlay>
                        </Dialog.Portal>
                    </Dialog.Root>
                </section>
            )}
        </>
    )
}