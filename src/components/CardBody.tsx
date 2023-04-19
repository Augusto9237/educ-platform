interface CardBodyProps {
    children: React.ReactNode;
}


export function CardBody({children}: CardBodyProps) {

    return (
        <div className="relative flex flex-1 flex-col p-3 pl-6 justify-center gap-4 w-full min-h-[100px] rounded-xl shadow-lg  bg-backgroundColor-100 overflow-hidden">
           {children}
        </div>
    )
}