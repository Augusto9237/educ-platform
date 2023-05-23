
import clsx from "clsx";
import dayjs from "dayjs";
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";
import { extractMonth } from "../app/utils/getMonth";
import * as Progress from '@radix-ui/react-progress';
import { calculateAverage } from "../app/utils/calculateAverage";

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
    subscriber?: {
        __typename?: "Subscriber" | undefined;
        id: string;
        name: string;
        email: string;
        phone?: string | null | undefined;
        pictureUrl?: string | null | undefined;
    } | null | undefined;
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

export function CardGradesSubscriber({ gradeses, month }: GradesProps) {
    const newMonth = dayjs(month).month() + 1;

    const assessments = gradeses.weeklyAssessments;
    
    const average = calculateAverage(assessments);
    const percentage = average > 0 ? Math.round((average / 1000) * 100) : 0;


    return (
        <div className="relative flex flex-col text-textSecondaryColor-600 bg-backgroundColor-50 hover:bg-backgroundColor-100 p-2 lg:p-3  rounded-xl shadow-md">
            <div className="flex flex-row flex-1 items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img className="w-full h-full" src={gradeses.subscriber.pictureUrl} alt="foto do aluno" />
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between mb-2">
                        <strong>{gradeses.subscriber.name}</strong>
                        <span>{extractMonth(newMonth, true)}</span>
                    </div>

                    <div>
                        <span
                            className={clsx("flex flex-1 gap-2 flex-row items-center", {
                                'text-textSecondaryColor-200/95': percentage === 0,
                                'text-textSecondaryColor-200': percentage >= 0 && percentage < 20,
                                'text-buttonColor-500': percentage >= 20 && percentage < 40,
                                'text-backgroundColor-500': percentage >= 40 && percentage < 80,
                                'text-textSecondaryColor-400': percentage >= 80,
                            })}
                        >
                            <RiCheckboxFill /> {`Media do aluno: ${average}pts /`}<span className="text-sm mt-1">1000pts</span>
                        </span>
                        <Progress.Root
                            className="relative overflow-hidden bg-backgroundColor-300 rounded-full w-full h-3"
                            style={{
                                transform: 'translateZ(0)',
                            }}
                            value={percentage}
                        >
                            <Progress.Indicator
                                className={clsx("flex justify-end w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]", {
                                    'text-textSecondaryColor-200 bg-textSecondaryColor-200/40': percentage === 0,
                                    'text-textSecondaryColor-200 bg-textSecondaryColor-200/30': percentage >= 0 && percentage < 20,
                                    'text-buttonColor-500/90 bg-buttonColor-500/30': percentage >= 20 && percentage < 40,
                                    'text-backgroundColor-500 bg-backgroundColor-500/40': percentage >= 40 && percentage < 80,
                                    'text-textSecondaryColor-400 bg-textSecondaryColor-300/20': percentage >= 80,
                                })}

                                style={{ transform: `translateX(-${100 - percentage}%)` }}
                            >
                                <span className=" text-xs leading-none">{percentage}%</span>
                            </Progress.Indicator>
                        </Progress.Root>
                    </div>

                    <div>
                        <span className="flex flex-1 gap-2 flex-row items-center text-textColor-300">
                            <RiCheckboxIndeterminateFill /> Média da turma: 900pts / <span className="text-xs">1000pts</span>
                        </span>
                        <Progress.Root
                            className="relative overflow-hidden bg-backgroundColor-300 rounded-full w-full h-3"
                            style={{
                                // Fix overflow clipping in Safari
                                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                                transform: 'translateZ(0)',
                            }}
                            value={90}
                        >
                            <Progress.Indicator
                                className="flex justify-end bg-textColor-300 w-full h-full items-center transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                                style={{ transform: `translateX(-${100 - 90}%)` }}
                            >
                                <span className="text-textColor-100 text-xs leading-none">90%</span>
                            </Progress.Indicator>
                        </Progress.Root>
                    </div>
                </div>
            </div>
        </div>
    )
}