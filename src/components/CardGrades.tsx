
export function CardGrades() {
    return (
        <div className="flex flex-col text-textSecondaryColor-600 bg-backgroundColor-100 p-2 gap-2 rounded-xl shadow-md">
            <h1 className="mx-auto text-lg font-bold">Janeiro</h1>
            <div className="flex mb-1">
                <div className="flex flex-1 flex-col items-center">
                    <span>1ª</span>
                    <h1 className="text-xl font-semibold">900pts</h1>
                </div>
                <div className="w-1 h-full bg-textColor-300"/>

                <div className="flex flex-1 flex-col items-center">
                    <span>2ª</span>
                    <h1 className="text-xl font-semibold">900pts</h1>
                </div>
                <div className="w-1 h-full bg-textColor-300"/>

                <div className="flex flex-1 flex-col items-center">
                    <span>3ª</span>
                    <h1 className="text-xl font-semibold">900pts</h1>
                </div>
                <div className="w-1 h-full bg-textColor-300"/>
                <div className="flex flex-1 flex-col items-center">
                    <span>4ª</span>
                    <h1 className="text-xl font-semibold">900pts</h1>
                </div>
            </div>
        </div>
    )
}