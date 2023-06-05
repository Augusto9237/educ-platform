import { useContext, useEffect } from "react";
import dayjs from "dayjs";
import * as Progress from '@radix-ui/react-progress';
import { useGetAssessmentsQuery } from "graphql/api";
import { calculateAverage } from "../app/utils/calculateAverage";
import { extractMonth } from "../app/utils/getMonth";
import { CardGradesSubscriber } from "./CardGradesSubscriber";
import { Spinner } from "./Spinner";
import clsx from "clsx";
import { AdminContext } from "../app/context/AdminContext";


interface gradeses {
    __typename?: "Grades" | undefined;
    id: string;
    month?: string | null | undefined;
    average?: number | null | undefined;
    subscriber?: {
        __typename?: "Subscriber" | undefined;
        email: string;
        id: string;
        name: string;
        phone?: string | null | undefined;
        pictureUrl?: string | null | undefined;
    } | null | undefined;
    weeklyAssessments: {
        __typename?: "Week" | undefined;
        fourthReview?: number | null | undefined;
        primaryReview?: number | null | undefined;
        secondReview?: number | null | undefined;
        thirdReview?: number | null | undefined;
    }[];
    class?: {
        __typename?: 'Class';
        code?: string | null;
        id: string;
        name?: string | null;
        teacher?: {
            __typename?: 'Teacher';
            id: string;
            email?: string | null;
            name: string;
        } | null | undefined;
    } | null | undefined;
}[]


interface ClassStats {
    classId: string;
    classCode: string;
    classeName: string;
    totalAverage: number;
    average: number;
}

export function TopListSubscriber() {
    const { loadingClassesById } = useContext(AdminContext)
    const newMonth = dayjs().month() + 1;
    const [monthStart, monthEnd] = getMonthBounds(new Date());
    const { data, loading, refetch } = useGetAssessmentsQuery({
        variables: {
            month_start: monthStart,
            month_end: monthEnd
        }
    });

    useEffect(() => {
        refetch()
    }, [loadingClassesById]);

    function getMonthBounds(date: Date): [Date, Date] {
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthStart = new Date(year, month, 1);
        const monthEnd = new Date(year, month + 1, 0, 23, 59, 59, 999);

        return [monthStart, monthEnd];
    }

    function calculateClassStats(grades: gradeses[]): ClassStats[] {
        const classMap: { [code: string]: ClassStats } = {};
        if (data?.gradeses) {
            for (const grade of grades) {
                const classId = grade.class?.id!;
                const classCode = grade.class?.code!;
                const classeName = grade.class?.name!;

                if (!classMap[classId]) {
                    classMap[classId] = {
                        classId,
                        classCode,
                        classeName,
                        totalAverage: 0,
                        average: 0,
                    };
                }

                const classStats = classMap[classId];
                classStats.totalAverage += grade.average!;
                classStats.average += 1;
            }
        }

        const classStatsArray = Object.values(classMap);

        for (const classStats of classStatsArray) {
            classStats.average = classStats.totalAverage / classStats.average;
        }

        return classStatsArray;
    }

    const classStats = calculateClassStats(data?.gradeses!);
    console.log(classStats);

    return (
        <main className="grid lg:grid-cols-2 gap-4">
            {loading && <Spinner />}
            {!loading && (
                <>
                    <div className="bg-backgroundColor-100 rounded-lg p-4 gap-2 flex-1">
                        <header className="flex justify-between items-center mb-2">
                            <h1 className="text-lg font-medium">Top 10 alunos</h1>
                            <span>{extractMonth(newMonth, true)}</span>
                        </header>
                        <div className="flex flex-col gap-4">

                            {data?.gradeses.map((grades) => (
                                <CardGradesSubscriber key={grades.id} gradeses={grades} month={grades.month} />
                            ))}

                        </div>
                    </div>
                    <div className="bg-backgroundColor-100 rounded-lg p-4 gap-2 flex-1">
                        <header className="flex justify-between items-center mb-2">
                            <h1 className="text-lg font-medium">Ranking das turmas</h1>
                            <span>{extractMonth(newMonth, true)}</span>
                        </header>
                        <div className="flex flex-col gap-4">

                            {classStats?.map((classStat) => {
                                const percentage = classStat.average > 0 ?  (classStat.average / 1000) * 100 : 0;
                                return (

                                    <div key={classStat.classId} className="flex flex-1 items-center gap-4 bg-backgroundColor-50 p-2 rounded-lg shadow-md">
                                        <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-backgroundColor-400/20 text-textSecondaryColor-600 text-lg font-bold">
                                            {classStat.classCode}
                                        </div>
                                        <div className="flex flex-col flex-1 justify-center gap-2">
                                            <span className="leading-tight font-medium">{classStat.classeName}</span>

                                            <Progress.Root
                                                className="relative overflow-hidden bg-backgroundColor-300 rounded-full w-full h-3"
                                                style={{
                                                    transform: 'translateZ(0)',
                                                }}
                                                value={percentage}
                                            >
                                                <Progress.Indicator
                                                    className={clsx("flex justify-end w-full h-full text-backgroundColor-50 transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]", {
                                                        'bg-textSecondaryColor-200/40': percentage === 0,
                                                        'bg-textSecondaryColor-200/50': percentage >= 0 && percentage < 20,
                                                        'bg-buttonColor-500/70': percentage >= 20 && percentage < 40,
                                                        'bg-backgroundColor-500/50': percentage >= 40 && percentage < 80,
                                                        'bg-textSecondaryColor-300/60': percentage >= 80,
                                                    })}

                                                    style={{ transform: `translateX(-${100 - percentage}%)` }}
                                                >
                                                    <span className="mr-1 text-xs leading-none">{(percentage).toFixed(0)}%</span>
                                                </Progress.Indicator>
                                            </Progress.Root>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </>
            )}
        </main>
    )
}