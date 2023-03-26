import { GradesProps } from "app/(authenticated)/assessments/page";

interface WeekGradesProps {
    grades: GradesProps[];
}

export function WeekGrades({ grades }: WeekGradesProps) {
    return (
        <div className="flex flex-col gap-2 text-textSecondaryColor-600">
            <header><h1 className="text-lg font-bold">Avaliação semanal</h1></header>
            {grades.map((weeks, index) => (
                <div className="flex flex-col" key={weeks.id}>
                    <strong >{index + 1}ª semana</strong>
                    <div>
                        <span className="text-sm">1ª Av: {weeks.primaryReview}</span>
                        <span className="text-sm"> + </span>
                        <span className="text-sm">2ª Av: {weeks.secondReview}</span>
                        <span className="text-sm"> + </span>
                        <span className="text-sm">3ª Av: {weeks.thirdReview}</span>
                        <span className="text-sm"> + </span>
                        <span className="text-sm">4ª Av: {weeks.fourthReview}</span>
                        <span className="text-sm"> / 4 = </span>
                        <strong className="text-sm">{(weeks.primaryReview! + weeks.secondReview! + weeks.thirdReview! + weeks.fourthReview!) / 4} pts</strong>
                    </div>
                    <div className="bg-textColor-200 h-[1px] my-2" />
                </div>
            ))}

            <footer className="flex">
                <h1 className="mx-auto text-lg font-bold">Média mensal: 200 pts</h1>
            </footer>
        </div>
    )
}