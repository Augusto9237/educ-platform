import Link from "next/link"
import { RiBarChartBoxFill, RiCalendarCheckFill, RiHome3Fill, RiMoneyDollarCircleFill } from "react-icons/ri";

export function BottomBar() {
    return (
        <footer className="fixed bottom-0 flex w-full bg-backgroundColor-900">
            <div className="flex flex-1 p-4 items-center justify-around gap-2">

                <Link href='/home' className="flex flex-col items-center text-textColor-100 hover:text-buttonColor-500">
                    <button className="flex  text-2xl items-center">
                        <RiHome3Fill />
                    </button>
                </Link>


                <Link href='/frequency' className="flex flex-col items-center text-textColor-100 hover:text-buttonColor-500">
                    <button className="flex text-2xl items-center">
                        <RiCalendarCheckFill />
                    </button>
                </Link>

                <Link href='/assessments' className="flex flex-col items-center text-textColor-100 hover:text-buttonColor-500">
                    <button className="flex  text-2xl items-center">
                        <RiBarChartBoxFill />
                    </button>
                </Link>

                <Link href='/payments' className="flex flex-col items-center  text-textColor-100 hover:text-buttonColor-500">
                    <button className="flex  text-2xl items-center">
                        <RiMoneyDollarCircleFill />
                    </button>
                </Link>
            </div>
        </footer>
    )
}