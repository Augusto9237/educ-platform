import dayjs from "dayjs";
import { useGetAssessmentsQuery } from "graphql/api";
import { extractMonth } from "../app/utils/getMonth";
import { CardGradesSubscriber } from "./CardGradesSubscriber";
import { Spinner } from "./Spinner";

export function TopListSubscriber() {
    const newMonth = dayjs().month() + 1;
    const [monthStart, monthEnd] = getMonthBounds(new Date());
    const { data, loading } = useGetAssessmentsQuery({
        variables: {
            month_start: monthStart,
            month_end: monthEnd
        }
    });

    function getMonthBounds(date: Date): [Date, Date] {
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthStart = new Date(year, month, 1);
        const monthEnd = new Date(year, month + 1, 0, 23, 59, 59, 999);

        return [monthStart, monthEnd];
    }

    const gradesList = data?.gradeses.slice().sort((a, b) => {
        const sumA = a.weeklyAssessments.reduce((sum, week) => {
            return sum + week.primaryReview! + week.secondReview! + week.thirdReview! + week.fourthReview!;
        }, 0);

        const sumB = b.weeklyAssessments.reduce((sum, week) => {
            return sum + week.primaryReview! + week.secondReview! + week.thirdReview! + week.fourthReview!;
        }, 0);

        return sumB - sumA; // Ordenar em ordem decrescente
    });


    console.log(gradesList)

    return (
        <section className="bg-backgroundColor-100 rounded-lg p-4 gap-2">
            <header className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-medium">Top 10 alunos</h1>
                <span>{extractMonth(newMonth, true)}</span>
            </header>
            <div className="flex flex-col gap-4">
                {loading && (
                    <Spinner />
                )}

                {!loading && (
                    <>
                        {gradesList?.map((grades) => (
                            <CardGradesSubscriber key={grades.id} gradeses={grades} month={grades.month} />
                        ))}
                    </>
                )}
            </div>
        </section>
    )
}