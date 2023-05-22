import { useEffect, useState } from "react";
import { GradesProps } from "../app/(authenticated)/assessments/page";

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
            {grades.map((weeks, index) => (
                <div className="flex flex-col" key={weeks.id}>
                    <strong className="flex gap-2 text-textColor-500/70">{index + 1}ª semana</strong>
                    <div className="relative flex flex-1 py-2 justify-between">
                        <span className="text-sm">1ª Av: {weeks.primaryReview}</span>
                        <span className="text-sm"> + </span>
                        <span className="text-sm">2ª Av: {weeks.secondReview}</span>
                        <span className="text-sm"> + </span>
                        <span className="text-sm">3ª Av: {weeks.thirdReview}</span>
                        <span className="text-sm"> + </span>
                        <span className="text-sm">4ª Av: {weeks.fourthReview}</span>
                        <span className="text-sm"> / 4 = </span>
                        <strong className="text-sm">{(weeks.primaryReview! + weeks.secondReview! + weeks.thirdReview! + weeks.fourthReview!) / 4} pts</strong>
                        <div className="absolute bottom-0 w-full bg-textColor-200 h-[1px]" />
                    </div>

                </div>
            ))}

            <footer className="flex">
                <h1 className="mx-auto text-lg font-bold">{`Média mensal: ${totalMedia} pts`}</h1>
            </footer>
        </div>
    )
}