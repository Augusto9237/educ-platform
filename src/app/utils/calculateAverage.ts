export interface WeekProps {
    __typename?: "Week" | undefined;
    id: string;
    fourthReview?: number | null | undefined;
    primaryReview?: number | null | undefined;
    secondReview?: number | null | undefined;
    thirdReview?: number | null | undefined;
}[];

export function calculateAverage(assessments: WeekProps[]): number {
    const validAssessments = assessments.filter((week) => {
        return week.fourthReview !== undefined && week.primaryReview !== undefined && week.secondReview !== undefined && week.thirdReview !== undefined;
    });

    if (validAssessments.length === 0) {
        throw new Error('Não há avaliações válidas');
    }

    const sum = validAssessments.reduce((total, week) => {
        return total + week.fourthReview! + week.primaryReview! + week.secondReview! + week.thirdReview!;
    }, 0);

    const count = validAssessments.length * 4;

    return sum / count;
}
