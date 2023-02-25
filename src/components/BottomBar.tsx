import Link from "next/link"
import { RiHome3Fill } from "react-icons/ri";

export function BottomBar() {
    return (
        <footer className="fixed bottom-0 flex w-full h-16 bg-primaryColor-100">
            <div className="flex flex-1 p-3 items-center">
                <Link href='/' className="flex flex-col items-center">
                    <button className="flex text-backgroundColor-900 text-2xl items-center">
                        <RiHome3Fill/>
                    </button>
                    <span className="text-primaryColor-300">Home</span>
                </Link>
                <Link href='/' className="flex flex-col items-center">
                    <button className="flex text-backgroundColor-900 text-2xl items-center">
                        <RiHome3Fill/>
                    </button>
                    <span className="text-primaryColor-300">Home</span>
                </Link>
            </div>
        </footer>
    )
}