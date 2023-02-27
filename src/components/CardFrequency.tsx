import { ReactNode } from "react"
import { RiCalendarCheckFill, RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri"

interface ContainerProps {
    children: ReactNode
}
export function CardFrequency() {
    return (
        <div className="relative flex flex-1 flex-col p-3 pl-6 justify-center gap-3 w-full rounded-xl shadow-lg  bg-backgroundColor-100 overflow-hidden">
            <div className="absolute bg-buttonColor-500 w-3 h-full left-0" />
            <div className="flex flex-row gap-2">
                <div className="flex items-center text-4xl rounded-full p-3 text-buttonColor-600/90 bg-buttonColor-500/30">
                <RiCalendarCheckFill/>
                </div>
                <div>
                    <h1 className="text-textSecondaryColor-600 text-3xl font-bold">30 dias</h1>
                    <span className="text-textColor-300">Janeiro</span>
                </div>
            </div>

            <div className="flex  gap-8">
                <span className="flex items-center gap-2 text-textSecondaryColor-400 bg-textSecondaryColor-300/20 rounded p-1"><RiCheckboxFill />20 presenças</span>
                <span className="flex items-center gap-2 text-textSecondaryColor-200 bg-textSecondaryColor-200/20  rounded p-1"><RiCheckboxIndeterminateFill/>5 faltas</span>
            </div>
        </div>
    )
}