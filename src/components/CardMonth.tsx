import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";

interface CardMonthProps {
    month: string;
}

export function CardMonth({ month }: CardMonthProps) {
    return (
        <div className="flex  bg-backgroundColor-100 rounded-xl p-2 drop-shadow-md ">
            
            <div className="flex items-center justify-center rounded-full min-w-[60px] min-h-[60px] text-backgroundColor-500 bg-backgroundColor-400/40">
                <h1 className="text-lg font-bold">{month}</h1>
            </div>


            <div className="flex flex-row flex-1 justify-around items-center">
                <div className="flex items-center gap-2 text-textSecondaryColor-400">
                    <RiCheckboxFill  />
                    <span className="">
                        18 presenças
                    </span>
                </div>
                <div className="flex items-center gap-2 text-textSecondaryColor-200">
                    <RiCheckboxIndeterminateFill />
                    <span className="">
                        2 faltas</span></div>
            </div>
        </div>
    )
}