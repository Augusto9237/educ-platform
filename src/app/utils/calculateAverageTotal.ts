export function calculateAverageTotal(weeks: any[]): number {
    let totalSum = 0;
    let weekCount = 0;

    for (const week of weeks) {
        const { primaryReview, secondReview, thirdReview, fourthReview } = week.Week;
        const weekAverage = (primaryReview + secondReview + thirdReview + fourthReview) / 4;
        totalSum += weekAverage;
        weekCount++;
    }

    if (weekCount === 0) {
        return 0; // Para evitar divisão por zero
    }

    const average = totalSum / weekCount;
    return Math.round(average); // Arredonda para baixo para o inteiro mais próximo
}