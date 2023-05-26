'use client'
import dayjs from "dayjs";
import * as Progress from '@radix-ui/react-progress';
import { useGetAssessmentsQuery } from "graphql/api";
import { extractMonth } from "../app/utils/getMonth";
import { Spinner } from "./Spinner";
import { calculateAverage } from "../app/utils/calculateAverage";
import clsx from "clsx";
import { useContext } from "react";
import { AdminContext } from "../app/context/AdminContext";

interface gradeses {
    __typename?: "Grades" | undefined;
    id: string;
    month?: string | null | undefined;
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


export function TopListClasses() {
    const { classes } = useContext(AdminContext)
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


    const gradesList = data?.gradeses.slice().reduce((result: gradeses[], grade) => {
        const existingGrade = result.find(g => g.class?.id === grade.class?.id);
        if (existingGrade) {
          existingGrade.weeklyAssessments = existingGrade.weeklyAssessments.map((week, index) => {
            return {
              primaryReview: week.primaryReview! + grade.weeklyAssessments[index].primaryReview!/4,
              secondReview: week.secondReview! + grade.weeklyAssessments[index].secondReview!/4,
              thirdReview: week.thirdReview! + grade.weeklyAssessments[index].thirdReview!/4,
              fourthReview: week.fourthReview! + grade.weeklyAssessments[index].fourthReview!/4,
            };
          });
        } else {
          result.push({ ...grade });
        }
        return result;
      }, []).sort((a, b) => {
        const sumA = a.weeklyAssessments.reduce((sum, week) => {
          return sum + week.primaryReview! + week.secondReview! + week.thirdReview! + week.fourthReview! ;
        }, 0);
        
        const sumB = b.weeklyAssessments.reduce((sum, week) => {
          return sum + week.primaryReview! + week.secondReview! + week.thirdReview! + week.fourthReview! ;
        }, 0);
        
        return sumB- sumA; // Ordenar em ordem decrescente
      });
      


    return (
        <section className="bg-backgroundColor-100 rounded-lg p-4 gap-2">
            <header className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-medium">Ranking das turmas</h1>
                <span>{extractMonth(newMonth, true)}</span>
            </header>
            <div className="flex flex-col gap-4">
                {loading && (
                    <Spinner />
                )}

                {!loading && (
                    <>
                        {gradesList?.map((grades) => {
                            const assessments = grades.weeklyAssessments;

                            const average = calculateAverage(assessments);
                            const percentage = average > 0 ? Math.round((average / 1000) * 100) : 0;
                           
                            return (

                                <div key={grades.id} className="flex flex-1 items-center gap-2 bg-backgroundColor-50 p-2 rounded-lg shadow-md">
                                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-backgroundColor-400/20 text-textSecondaryColor-600 font-bold">
                                        {grades.class?.code}
                                    </div>
                                    <div className="flex flex-col flex-1 justify-center">
                                        <span className="leading-tight">{grades.class?.name}</span>

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
                                                <span className="mr-1 text-xs leading-none">{percentage}%</span>
                                            </Progress.Indicator>
                                        </Progress.Root>

                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
        </section>
    )
}