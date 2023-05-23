import { useContext } from "react";
import { AdminContext } from "../app/context/AdminContext";
import { CardGradesSubscriber } from "./CardGradesSubscriber";

export function TopListSubscriber() {
    const { assessmentsByClass } = useContext(AdminContext);
    return (
        <section className="bg-backgroundColor-100 rounded-lg p-4 gap-2">
            <header className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-medium">Top 10 Alunos</h1>
            </header>
            <div className="flex flex-col gap-4">
                {assessmentsByClass?.gradeses.map((assessments) => (
                    <CardGradesSubscriber key={assessments.id} gradeses={assessments} month={assessments.month} />
                ))}
            </div>
        </section>
    )
}