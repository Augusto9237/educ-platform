 interface SideBarProps {
    children: React.ReactNode
 }

export function Sidebar({children}:SideBarProps) {
    return (
        <section className="group z-10 max-lg:hidden flex  fixed left-0 w-20 rounded-sm h-screen bg-backgroundColor-100 shadow-lg hover:w-52 delay-80 duration-500">
            <div className="flex flex-col py-4 flex-1 gap-8">
                {children}
                {/*  */}
            </div>
        </section>
    )
}