import { useGetFrequenciesClassByMonthQuery } from "graphql/api";
import { useContext, useEffect, useState } from "react"
import { RiCalendarCheckFill, RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri"
import { GlobalContext } from "../context/GlobalContext";

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
export function CardFrequency() {
    const { user } = useContext(GlobalContext)
    const monthStart = '2023-03-01T00:00:00.000Z';
    const monthEnd = '2023-03-31T23:59:59.999Z';

    const [frequencyGroup, setFrequencyGroup] = useState<FrequencyGroupedByMonth[]>([])
    const { data, loading } = useGetFrequenciesClassByMonthQuery({
        variables: {
            code: user?.subscriber?.class?.code,
            id: user?.subscriber?.id,
            monthStart: monthStart,
            monthEnd: monthEnd,
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
    }, [data?.frequencies, loading]);



    return (
        <div className="relative flex flex-1 flex-col p-3 pl-6 justify-center gap-4 w-full rounded-xl shadow-lg  bg-backgroundColor-100 overflow-hidden">
            <div className="absolute bg-buttonColor-500 w-3 h-full left-0" />
            {frequencyGroup.map(({ frequencies, month }, i) => {
                const presences = frequencies
                    .map((frequencia) => frequencia.subscribes[0])
                    .filter(({ prensente, subscriber }) => prensente && subscriber?.id === user?.subscriber?.id);

                const absences = frequencies
                    .map((frequencia) => frequencia.subscribes[0])
                    .filter(({ prensente, subscriber }) => !prensente && subscriber?.id === user?.subscriber?.id);
                return (
                    <>
                        <div className="flex flex-row gap-4">
                            <div className="flex items-center text-4xl rounded-full p-3 text-buttonColor-600/90 bg-buttonColor-500/30">
                                <RiCalendarCheckFill />
                            </div>
                            <div>
                                <h1 className="text-textSecondaryColor-600 text-2xl  font-bold">4 aulas</h1>
                                <span className="text-textColor-300 capitalize">{new Date(2023, month - 1).toLocaleDateString('pt-BR', {
                                    month: 'long',
                                })}</span>
                            </div>
                        </div>

                        <div className="flex  gap-4">
                            <span className="flex items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-400 bg-textSecondaryColor-300/20 rounded p-1"><RiCheckboxFill />{`${presences.length} presenças`}</span>
                            <span className="flex items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-200 bg-textSecondaryColor-200/20  rounded p-1"><RiCheckboxIndeterminateFill />{`${absences.length} faltas`}</span>
                        </div>
                    </>
                )
            })}
        </div>
    )
}