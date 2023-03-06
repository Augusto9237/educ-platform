import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";

export function CardGrades() {
    return (
        <div className="relative flex flex-col text-textSecondaryColor-600 bg-backgroundColor-100 p-2  rounded-xl shadow-md">
            <strong className="mx-auto text-lg">Janeiro</strong>
           
            <div className="fixed flex items-center justify-center rounded-full min-w-[60px] min-h-[60px] text-backgroundColor-500 bg-backgroundColor-400/40 translate-y-3 ">
                <h1 className="text-lg font-bold">90%</h1>
            </div>

            <div className="flex flex-col items-center max-sm:pl-10">
                <h1 className="flex flex-row items-center gap-1 text-lg font-semibold text-textSecondaryColor-400">
                    <RiCheckboxFill /> Sua média: 900pts /<span className="text-sm mt-1">1000pts</span>
                </h1>
                <h1 className="flex flex-row items-center gap-2 text-sm font-semibold  text-textSecondaryColor-200/90 mb-1">
                    <RiCheckboxIndeterminateFill /> Média da turma: 900pts / <span className="text-xs">1000pts</span>
                </h1>
            </div>


            {/* <div className="flex pb-2">
                <div className="flex flex-1 flex-col items-center ">
                    <span className="text-xs">1ª</span>
                    <h1 className="text-sm font-semibold leading-none">900</h1>
                </div>
                <div className="w-1 h-full bg-textColor-200 rounded-sm" />

                <div className="flex flex-1 flex-col items-center">
                    <span className="text-xs">2ª</span>
                    <h1 className="text-sm font-semibold leading-none">900</h1>
                </div>
                <div className="w-1 h-full bg-textColor-200" />

                <div className="flex flex-1 flex-col items-center">
                    <span className="text-xs">3ª</span>
                    <h1 className="text-sm font-semibold leading-none">900</h1>
                </div>
                <div className="w-1 h-full bg-textColor-200" />
                <div className="flex flex-1 flex-col items-center">
                    <span className="text-xs">4ª</span>
                    <h1 className="text-sm font-semibold leading-none">900</h1>
                </div>
            </div> */}
        </div>
    )
}