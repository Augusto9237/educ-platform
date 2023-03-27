import { GradesProps } from "app/(authenticated)/assessments/page";
import { GlobalContext } from "app/context/GlobalContext"
import { extractMonth } from "app/utils/getMonth";
import dayjs from "dayjs";
import { useContext } from "react"
import { RiBarChartBoxFill, RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";

interface Week {
    __typename?: "Week" | undefined;
    id: string;
    fourthReview?: number | null | undefined;
    primaryReview?: number | null | undefined;
    secondReview?: number | null | undefined;
    thirdReview?: number | null | undefined;
}[];

export function CardAssessment() {
    const { user } = useContext(GlobalContext);

    const newMonth = dayjs(user?.values?.gradeses[user.values.gradeses.length - 1].month).month() + 1;
    const assessments = user?.values?.gradeses[user.values.gradeses.length - 1].weeklyAssessments;

    const average = calculateAverage(assessments!);
    const percentage = average > 0 ? Math.round((average / 1000) * 100) : 0;

    function calculateAverage(assessments: Week[]) {
        if (assessments) {
            const sum = assessments.reduce((total, week) => {
                return total + week.fourthReview! + week.primaryReview! + week.secondReview! + week.thirdReview!;
            }, 0);
            const count = assessments.length * 4;
            return sum / count;
        }
        return 0;
    }

    return (
        <div className="relative flex flex-1 flex-col p-3 pl-6 justify-center gap-4 w-full rounded-xl shadow-lg  bg-backgroundColor-100 overflow-hidden">
            <div className="absolute bg-backgroundColor-500/90 w-3 h-full left-0" />
            <div className="flex flex-row gap-4">
                <div className="flex items-center text-4xl rounded-full p-3 text-backgroundColor-500/90 bg-backgroundColor-400/40">
                    <RiBarChartBoxFill />
                </div>
                <div>
                    <h1 className="text-textSecondaryColor-600 text-2xl font-bold">{`${percentage}%`}</h1>
                    <span className="text-textColor-300">{extractMonth(newMonth, true)}</span>
                </div>
            </div>

            <div className="flex gap-4">
                <span className="flex  items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-400 bg-textSecondaryColor-300/20 rounded p-1"><RiCheckboxFill />{average ? `${average} sua média` : '0 sua'}</span>
                <span className="flex items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-200 bg-textSecondaryColor-200/20  rounded p-1"><RiCheckboxIndeterminateFill />1000 sua meta</span>
            </div>
        </div>
    )
}