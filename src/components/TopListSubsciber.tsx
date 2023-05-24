import dayjs from "dayjs";
import { useContext } from "react";
import { AdminContext } from "../app/context/AdminContext";
import { extractMonth } from "../app/utils/getMonth";
import { CardGradesSubscriber } from "./CardGradesSubscriber";

export function TopListSubscriber() {
    const { subscribers } = useContext(AdminContext);
    const newMonth = dayjs().month() + 1;

    
    return (
        <section className="bg-backgroundColor-100 rounded-lg p-4 gap-2">
            <header className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-medium">Top 10 alunos</h1>
                <span>{extractMonth(newMonth, true)}</span>
            </header>
            <div className="flex flex-col gap-4">
                {subscribers?.subscribers.map(({ gradeses }) => {
                    return (
                        gradeses.map((grades) =>
                        (
                            <CardGradesSubscriber key={grades.id} gradeses={grades} month={grades.month} />
                        )
                        )
                    )
                })}
            </div>
        </section>
    )
}