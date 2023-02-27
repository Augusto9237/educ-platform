import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";

interface CardMonthProps {
    month: string;
}

export function CardMonth({month}: CardMonthProps) {
    return (
        <div className="flex flex-col bg-backgroundColor-100 rounded-lg p-2 drop-shadow-md ">
            <h1 className="text-textSecondaryColor-600 text-xl font-bold">{month}</h1>
            <div className="flex flex-row flex-1 justify-around">
                <div className="flex items-center gap-1">
                    <RiCheckboxFill color="#56D551" />
                    <span className="text-textSecondaryColor-300">
                        18 presenças
                    </span>
                </div>
                <div className="flex items-center gap-2">
                <RiCheckboxIndeterminateFill color="#E74B67" />
                    <span className="text-textSecondaryColor-200">
                        2 faltas</span></div>
            </div>
        </div>
    )
}