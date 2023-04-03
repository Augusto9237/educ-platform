import { useGetFrequenciesClassByMonthQuery } from "graphql/api";
import React, { useContext, useEffect, useState } from "react";
import { RiCalendarCheckFill, RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";
import { GlobalContext } from "../context/GlobalContext";

interface FrequencyGroupedByMonth {
  month: number;
  frequencies: Frequency[];
}

interface Frequency {
  createdAt: Date;
  id: string;
  subscribes: Array<{
    id: string;
    prensente?: boolean | null;
    subscriber?: {
      name: string;
      id: string;
    } | null;
  }>;
}

export function CardFrequency() {
  const { user } = useContext(GlobalContext);

  const [frequencyGroup, setFrequencyGroup] = useState<FrequencyGroupedByMonth[]>([]);
  const [monthStart, monthEnd] = getMonthBounds(new Date());
  const { data, loading } = useGetFrequenciesClassByMonthQuery({
    variables: {
      code: user?.values?.class?.code,
      id: user?.values?.id,
      monthStart,
      monthEnd,
    },
  });

  useEffect(() => {
    if (data?.frequencies) {
      const frequenciesGroupedByMonth: FrequencyGroupedByMonth[] = data.frequencies.reduce(
        (acc: FrequencyGroupedByMonth[], frequency: Frequency) => {
          const createdAt = new Date(frequency.createdAt);
          const month = createdAt.getMonth() + 1;
          const groupIndex = acc.findIndex((group) => group.month === month);

          if (groupIndex >= 0) {
            acc[groupIndex].frequencies.push(frequency);
          } else {
            acc.push({ month, frequencies: [frequency] });
          }

          return acc;
        },
        []
      );
      setFrequencyGroup(frequenciesGroupedByMonth);
    }
  }, [data?.frequencies, loading]);

  function getMonthBounds(date: Date): [Date, Date] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0, 23, 59, 59, 999);

    return [monthStart, monthEnd];
  }

  return (
    <div className="relative flex flex-1 flex-col p-3 pl-6 justify-center gap-4 w-full rounded-xl shadow-lg bg-backgroundColor-100 overflow-hidden">
      <div className="absolute bg-buttonColor-500 w-3 h-full left-0" />
      <div className="flex flex-row gap-4">
        <div className="flex items-center text-4xl rounded-full p-3 text-buttonColor-600/90 bg-buttonColor-500/30">
          <RiCalendarCheckFill />
        </div>
        <div>
          <h1 className="text-textSecondaryColor-600 text-2xl font-bold">4 aulas</h1>
          <span className="text-textColor-300 capitalize">
            {new Date().toLocaleDateString("pt-BR", {
              month: "long",
            })}
          </span>
        </div>
      </div>
      {frequencyGroup.map(({ frequencies }, i) => {
        const presences = frequencies
          .map((frequency) => frequency.subscribes[0])
          .filter(({ prensente, subscriber }) => prensente && subscriber?.id === user?.values?.id);

        const absences = frequencies
          .map((frequency) => frequency.subscribes[0])
          .filter(({ prensente, subscriber }) => !prensente && subscriber?.id === user?.values?.id);

        return (
          <div className="flex gap-4" key={i}>
            <span className="flex flex-1 gap-2 items-center justify-center  text-textSecondaryColor-400 bg-textSecondaryColor-300/20 rounded p-1">
              <RiCheckboxFill />
              {presences.length} presenças
            </span>
            <span className="flex flex-1 gap-2 items-center justify-center  text-textSecondaryColor-200 bg-textSecondaryColor-200/20 rounded p-1">
              <RiCheckboxIndeterminateFill />
              {absences.length} faltas
            </span>
          </div>
        );
      })}
    </div>
  );
};
