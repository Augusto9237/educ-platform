"use client";
import * as Dialog from '@radix-ui/react-dialog';
import { GlobalContext } from '../../context/GlobalContext';
import { useGetFrequenciesClassQuery } from 'graphql/api';

import { useContext, useEffect, useState } from 'react';
import { CalendarEvent } from '../../../components/Calendar';
import { Spinner } from '@/components/components/Spinner';
import { CardMonth } from '@/components/components/CardMonth';

export interface FrequencyGroupedByMonth {
    month: number;
    frequencies: Frequency[];
}

interface Frequency {
    __typename?: 'Frequency';
    createdAt: any;
    id: string;
    subscribes: Array<{
        __typename?: 'Presence';
        id: string;
        prensente?: boolean | null;
        subscriber?: {
            __typename?: 'Subscriber';
            name: string;
            id: string
        } | null
    }>;
}

export default function Frequency() {
    const [month, setMonth] = useState(0)
    const { user } = useContext(GlobalContext)
    const [frequencyGroup, setFrequencyGroup] = useState<FrequencyGroupedByMonth[]>([])

    const { data, loading } = useGetFrequenciesClassQuery({
        variables: {
            code: user?.values?.class?.code,
            id: user?.values?.id
        }
    });

    useEffect(() => {
        if (data?.frequencies) {
            const frequenciesGroupedByMonth: FrequencyGroupedByMonth[] = data?.frequencies.reduce((acc: FrequencyGroupedByMonth[], frequency: Frequency) => {

                const createdAt = new Date(frequency.createdAt);
                const month = createdAt.getMonth() + 1;

                const groupIndex = acc.findIndex(group => group.month === month);
                if (groupIndex >= 0) {
                    acc[groupIndex].frequencies.push(frequency);
                } else {
                    acc.push({ month, frequencies: [frequency] });
                }

                return acc;
            }, []);
            setFrequencyGroup(frequenciesGroupedByMonth);
        }
    }, [data?.frequencies, loading])

    return (
        <>
            <section className="fl:grid grid-cols-3 flex flex-col flex-1 gap-6 justify-start max-sm:pb-14 ">
                <Dialog.Root>
                    <>
                        {loading && (
                            <Spinner />
                        )}

                        {!loading && (
                            <>
                                {
                                    frequencyGroup.map(({ frequencies, month }, i) => (
                                        <Dialog.Trigger key={i} onClick={() => setMonth(month)}>
                                            <CardMonth month={month} frequencies={frequencies} />
                                        </Dialog.Trigger>
                                    ))
                                }
                            </>
                        )}
                        <Dialog.Portal>
                            <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl  max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                    <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                        <strong className='text-textColor-300'>X</strong>
                                    </Dialog.Close>
                                    {
                                        frequencyGroup.map(({ frequencies, month }, i) =>
                                        (
                                            <CalendarEvent key={i} month={month} frequencies={frequencies} />
                                        )
                                        )
                                    }
                                </Dialog.Content>
                            </Dialog.Overlay>
                        </Dialog.Portal>
                    </>
                </Dialog.Root>
            </section>
        </>
    )
}