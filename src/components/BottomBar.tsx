interface BottomBarProps {
    children: React.ReactNode
}

export function BottomBar({children}: BottomBarProps) {
    return (
        <footer className="fixed bottom-0 flex w-full bg-backgroundColor-900 lg:hidden">
            
             <div className="flex flex-1 p-4 items-center justify-around gap-2">
                        {children}
                {/*  */}
            </div> 
        </footer>
    )
}