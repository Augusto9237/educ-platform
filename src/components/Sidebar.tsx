interface SideBarProps {
    children: React.ReactNode
}

export function Sidebar({ children }: SideBarProps) {
    return (
        <nav className="group z-10 max-lg:hidden flex flex-col py-4 gap-8 fixed left-0 w-20 rounded-sm h-screen bg-backgroundColor-100 shadow-lg hover:w-52 delay-80 duration-500">
            {children}
        </nav>
    )
}