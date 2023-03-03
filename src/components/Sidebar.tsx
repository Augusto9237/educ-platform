import Link from "next/link"
import { RiBarChartBoxFill, RiCalendarCheckFill, RiHome3Fill, RiLogoutBoxRFill, RiMoneyDollarCircleFill } from "react-icons/ri"

export function Sidebar() {
    return (
        <section className="group max-lg:hidden flex  fixed left-0 w-20 rounded-sm h-screen bg-backgroundColor-100 shadow-lg hover:w-52 delay-80 duration-500">
            <div className="flex flex-col py-4 flex-1 gap-8">
                <Link href='/home' className="flex flex-col  text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                    <button className="flex flex-row text-2xl items-center gap-2">
                        <RiHome3Fill /> <span className="hidden leading-none text-xl group-hover:flex delay-200 duration-600">Home</span>
                    </button>
                </Link>


                <Link href='/frequency' className="flex flex-col text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                    <button className="flex text-2xl items-center gap-2">
                        <RiCalendarCheckFill /><span className="hidden  leading-none text-xl group-hover:flex delay-150 duration-600">Frequência</span>
                    </button>
                </Link>

                <Link href='/assessments' className="flex flex-col text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                    <button className="flex text-2xl items-center gap-2">
                        <RiBarChartBoxFill /><span className="hidden  leading-none text-xl group-hover:flex delay-150 duration-600">Avaliações</span>
                    </button>
                </Link>

                <Link href='/payments' className="flex flex-col  text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                    <button className="flex  text-2xl items-center gap-2">
                        <RiMoneyDollarCircleFill /><span className="hidden  leading-none text-xl group-hover:flex delay-150 duration-600">Pagamentos</span>
                    </button>
                </Link>
            </div>
            <div className="fixed bottom-10 pl-7">
                <Link href='/' className="flex flex-col items-center  text-buttonColor-500 hover:text-buttonColor-600 group-hover:items-start">
                    <button className="flex  text-2xl items-center gap-2">
                    <RiLogoutBoxRFill/><span className="hidden  leading-none text-xl group-hover:flex delay-150 duration-600">Sair</span>
                    </button>
                </Link>
            </div>
        </section>
    )
}