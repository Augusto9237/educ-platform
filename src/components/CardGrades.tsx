import clsx from "clsx";
import * as Progress from '@radix-ui/react-progress';
import dayjs from "dayjs";
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";
import { extractMonth } from "../app/utils/getMonth";

interface Week {
    __typename: string;
    id: string;
    fourthReview: number;
    primaryReview: number;
    secondReview: number;
    thirdReview: number;
}

interface Grades {
    __typename?: "Grades" | undefined;
    id: string;
    month?: any;
    weeklyAssessments: {
        __typename?: "Week" | undefined;
        id: string;
        fourthReview?: number | null | undefined;
        primaryReview?: number | null | undefined;
        secondReview?: number | undefined;
        thirdReview?: number | undefined;
    }[];
}
interface GradesProps {
    gradeses?: Grades[] | any;
    month?: any;
}

export function CardGrades({ gradeses, month }: GradesProps) {
    const newMonth = dayjs(month).month() + 1;

    const assessments = gradeses.weeklyAssessments;

    function calculateAverage(assessments: Week[]) {
        const sum = assessments.reduce((total, week) => {
            return total + week.fourthReview + week.primaryReview + week.secondReview + week.thirdReview;
        }, 0);
        const count = assessments.length * 4;
        return sum / count;
    }

    const average = calculateAverage(assessments);
    const percentage = average > 0 ? Math.round((average / 1000) * 100) : 0;


    return (
        <div className="relative flex flex-col text-textSecondaryColor-600 bg-backgroundColor-100 p-2 lg:p-3  rounded-xl shadow-md">
            <div className="flex flex-row flex-1 gap-4">
            <div className="flex items-center justify-center rounded-full min-w-[60px] min-h-[60px] text-backgroundColor-500 bg-backgroundColor-400/40">
                <h1 className="uppercase text-lg font-bold">{extractMonth(newMonth)}</h1>
            </div>
            <div className="flex flex-col">
                <span
                            className={clsx("flex flex-1 gap-2 flex-row items-center", {
                                'text-textSecondaryColor-200/95': percentage === 0,
                                'text-textSecondaryColor-200': percentage >= 0 && percentage < 20,
                                'text-buttonColor-500': percentage >= 20 && percentage < 40,
                                'text-backgroundColor-500': percentage >= 40 && percentage < 80,
                                'text-textSecondaryColor-400': percentage >= 80,
                            })}
                        >
                            <RiCheckboxFill /> {`Sua média: ${average}pts /`}<span className="text-sm mt-1">1000pts</span>
                        </span>
                <Progress.Root
                    className="relative overflow-hidden bg-backgroundColor-300 rounded-full w-full h-3"
                    style={{transform: 'translateZ(0)'}}
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
                <h1 className="flex flex-1 gap-2 flex-row items-center text-textSecondaryColor-200/90">
                    <RiCheckboxIndeterminateFill /> Média da turma: 900pts / <span className="text-xs">1000pts</span>
                </h1>
            </div>
            </div>
        </div>
    )
}