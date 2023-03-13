import { RiBarChartBoxFill, RiCalendarCheckFill, RiHome3Fill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { ActiveLink } from "./ActiveLink";

export function BottomBar() {
    return (
        <footer className="fixed bottom-0 flex w-full bg-backgroundColor-900 lg:hidden">
            <div className="flex flex-1 p-4 items-center justify-around gap-2">

                <ActiveLink href='/home'>
                    <button className="flex  text-2xl items-center">
                        <RiHome3Fill />
                    </button>
                </ActiveLink>

                <ActiveLink href='/frequency'>
                    <button className="flex text-2xl items-center">
                        <RiCalendarCheckFill />
                    </button>
                </ActiveLink>

                <ActiveLink href='/assessments' >
                    <button className="flex  text-2xl items-center">
                        <RiBarChartBoxFill />
                    </button>
                </ActiveLink>

                <ActiveLink href='/payments'>
                    <button className="flex  text-2xl items-center">
                        <RiMoneyDollarCircleFill />
                    </button>
                </ActiveLink>
            </div>
        </footer>
    )
}