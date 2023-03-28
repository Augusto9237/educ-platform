import { GradesProps } from "app/(authenticated)/assessments/page";
import { useEffect, useState } from "react";

interface WeekGradesProps {
    grades: GradesProps[];
}

export function WeekGrades({ grades }: WeekGradesProps) {
    const [totalMedia, setTotalMedia] = useState(0)

    useEffect(() => {
        if (grades) {
            const sumAndCount = grades.reduce(
                (acc, curr) => {
                    Object.values(curr).forEach((value) => {
                        if (typeof value === "number") {
                            acc.sum += value;
                            acc.count++;
                        }
                    });
                    return acc;
                },
                { sum: 0, count: 0 }
            );

            setTotalMedia(sumAndCount.sum / sumAndCount.count);
        }
    }, [grades])

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
                <h1 className="mx-auto text-lg font-bold">{`Média mensal: ${totalMedia} pts`}</h1>
            </footer>
        </div>
    )
}