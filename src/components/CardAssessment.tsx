import { ReactNode } from "react"
import { RiBarChartBoxFill, RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri"

interface ContainerProps {
    children: ReactNode
}
export function CardAssessment() {
    return (
        <div className="relative flex flex-col p-3 justify-center gap-1.5 w-full rounded-xl shadow-lg  bg-gradient-to-r from-backgroundColor-500/80 to-backgroundColor-500/30">
            <h1 className="text-textColor-100 text-3xl font-bold mb-3">90%</h1>
            <span className="flex items-center gap-2 text-textColor-100"><RiCheckboxFill color="#56D551" />900 sua média</span>
            <span className="flex items-center gap-2 text-textColor-100"><RiCheckboxIndeterminateFill color="#E74B67" />800 média dos demais</span>
            <div className="absolute right-3 text-7xl text-textColor-100 opacity-40">
                <RiBarChartBoxFill/>
            </div>
        </div>
    )
}