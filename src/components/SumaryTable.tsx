import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { FrequencyDay } from "./FrequencyDay";



const weekDays = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S',
];

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

type Summary = {
    id?: string;
    date: string;
    amount?: number;
    completed?: number;
}[]

const summaryArray: Summary = [
    {
      id: '1',
      date: 'Sun Feb 25 2023 02:00:34 GMT-0300 (Horário Padrão de Brasília)',
      amount: 100.50,
      completed: 1
    },
    {
      id: '2',
      date: 'Sun Feb 24 2023 02:00:34 GMT-0300 (Horário Padrão de Brasília)',
      amount: 75.25,
      completed: 0
    },
    {
      id: '3',
      date: 'Sun Feb 23 2023 02:00:34 GMT-0300 (Horário Padrão de Brasília)',
      amount: 150.00,
      completed: 1
    }
  ];
  


export function SummaryTable() {
    const [summary, setSummary] = useState<Summary>(summaryArray)
  

    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDay, i) => {
                    return (
                        <div
                            key={`${weekDay}-${i}`}
                            className="text-zinc-400 text-xl h-5 w-5 font-bold flex items-center justify-center"
                        >
                            {weekDay}
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summary.length && summaryDates.map((date) => {

                    const dayInSummary = summary.find(day => {
                        return dayjs(date).isSame(day.date, 'day')
                    })

                    return (
                        <FrequencyDay
                            key={date.toString()}
                            date={date}
                            amount={4}
                            defaultCompleted={5}
                        />
                    )
                })}

                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
                    return (
                        <div key={i} className="w-5 h-5 bg-textColor-300 border-2 border-textColor-500 rounded-lg opacity-40 cursor-not-allowed" />
                    )
                })}
            </div>
        </div>
    );
}