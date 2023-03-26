
import { extractMonth } from "app/utils/getMonth";
import { useContext } from "react";
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";
import { GlobalContext } from "../context/GlobalContext";


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
interface CardMonthProps {
    month: number;
    frequencies: Frequency[];
}

export function CardMonth({ month, frequencies }: CardMonthProps) {
    const { user } = useContext(GlobalContext)
    const presences = frequencies
        .map((frequencia) => frequencia.subscribes[0])
        .filter(({ prensente, subscriber }) => prensente && subscriber?.id === user?.values?.id);

    const absences = frequencies
        .map((frequencia) => frequencia.subscribes[0])
        .filter(({ prensente, subscriber }) => !prensente && subscriber?.id === user?.values?.id);
    return (
        <div className="flex  bg-backgroundColor-100 rounded-xl p-2 lg:p-3 drop-shadow-md ">

            <div className="flex items-center justify-center rounded-full min-w-[60px] min-h-[60px] text-backgroundColor-500 bg-backgroundColor-400/40">
                <h1 className="uppercase text-lg font-bold">{extractMonth(month)}</h1>
            </div>

            <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center justify-center flex-1">
                    <h1 className="max-sm:-ml-4 text-lg font-bold">4 aulas</h1>
                </div>
                <div className="flex flex-row flex-1 justify-between items-center">
                    <div className="flex flex-1 items-center justify-center gap-2 text-textSecondaryColor-400">
                        <RiCheckboxFill />
                        <span className="">
                            {`${presences.length} presenças`}
                        </span>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-2 text-textSecondaryColor-200">
                        <RiCheckboxIndeterminateFill />
                        <span>{`${absences.length} faltas`}</span></div>
                </div>
            </div>
        </div>
    )
}