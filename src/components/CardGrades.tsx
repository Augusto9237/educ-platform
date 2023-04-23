
import clsx from "clsx";
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
            <strong className="mx-auto text-lg">{extractMonth(newMonth, true)}</strong>

            <div
                className={clsx("fixed flex items-center justify-center rounded-full min-w-[60px] min-h-[60px] translate-y-3", {
                    'text-textSecondaryColor-200 bg-textSecondaryColor-200/40': percentage === 0,
                    'text-textSecondaryColor-200 bg-textSecondaryColor-200/30': percentage >= 0 && percentage < 20,
                    'text-buttonColor-600/90 bg-buttonColor-500/30': percentage >= 20 && percentage < 40,
                    'text-backgroundColor-500 bg-backgroundColor-400/40': percentage >= 40 && percentage < 80,
                    'text-textSecondaryColor-400 bg-textSecondaryColor-300/20': percentage >= 80,
                })}
            >
                <h1 className="absolute text-lg font-bold">{`${percentage}%`}</h1>

            </div>


            <div className="flex flex-col pl-20">
                <h1 className="flex flex-1 gap-2 flex-row items-center text-textSecondaryColor-400">
                    <RiCheckboxFill /> {`Sua média: ${average}pts /`}<span className="text-sm mt-1">1000pts</span>
                </h1>
                <h1 className="flex flex-1 gap-2 flex-row items-center text-textSecondaryColor-200/90">
                    <RiCheckboxIndeterminateFill /> Média da turma: 900pts / <span className="text-xs">1000pts</span>
                </h1>
            </div>
        </div>
    )
}