import { ReactNode } from "react"
import { RiCalendarCheckFill, RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri"

interface ContainerProps {
    children: ReactNode
}
export function CardFrequency() {
    return (
        <div className="relative flex flex-col p-3 justify-center gap-1.5 w-full rounded-xl shadow-lg  bg-gradient-to-r from-gradientColor-900 to-gradientColor-500 to-gradientColor-300">
            <h1 className="text-textColor-100 text-3xl font-bold mb-3">30 dias</h1>
            <span className="flex items-center gap-2 text-textColor-100"><RiCheckboxFill color="#56D551" />2 presenças</span>
            <span className="flex items-center gap-2 text-textColor-100"><RiCheckboxIndeterminateFill color="#E74B67" />2 faltas</span>
            <div className="absolute right-3 text-7xl text-textColor-100 opacity-40">
                <RiCalendarCheckFill/>
            </div>
        </div>
    )
}