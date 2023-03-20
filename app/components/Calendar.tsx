"use client";
import { useState } from 'react';
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from 'react-icons/ri';
import clsx from 'clsx';

interface Frequency {
  __typename?: 'Frequency';
  createdAt: Date;
  id: string;
  subscribes: Array<{
    __typename?: 'Presence';
    id: string;
    prensente?: boolean | null;
    subscriber?: {
      __typename?: 'Subscriber';
      name: string;
      id: string
    } | null
  }>;
}

type CalendarProps = {
  month: number;
  year: number;
  frequencies: Frequency[];
};

type SelectedDate = Date | undefined;

export function Calendar({ month, year, frequencies }: CalendarProps) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days: Date[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab'];
    return (
      <div className="grid grid-cols-7 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-gray-500">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDaysOfMonth = () => {
    const daysToRender = Array(firstDayOfMonth).fill(null).map((_, index) => (
      <div key={`empty-${index}`} className="h-6 w-6"></div>
    ));
    daysToRender.push(
      ...days.map((day) => {
        const foundFrequency = frequencies.find(frequency => {
          const frequencyDate = new Date(frequency.createdAt);
          return frequencyDate.getFullYear() === year && frequencyDate.getMonth() === month && frequencyDate.getDate() === day.getDate();
        });

        const presences = foundFrequency?.subscribes.filter(subscribe => subscribe.prensente);
        const absences = foundFrequency?.subscribes.filter(subscribe => !subscribe.prensente);
   
        return (
          <div
            key={day.toString()}
            className={clsx(
              'h-6 w-6 flex items-center justify-center cursor-pointer rounded-full p-1',
              {
                'bg-textSecondaryColor-300/95 text-textSecondaryColor-600': foundFrequency && day.getDate() === new Date(foundFrequency.createdAt).getDate() && foundFrequency?.subscribes.filter(subscribe => subscribe.prensente),
              }
            )}
          >
            {day.getDate()}
          </div>
        );
      })
    );
    return <div className="grid grid-cols-7 gap-2 ml-4 -mr-1">{daysToRender}</div>;
  };

  return (
    <div>
      <h1 className="capitalize text-lg font-bold px-2 mb-2 ">
        {new Date(year, month).toLocaleDateString('pt-BR', {
          month: 'long',
        })}
      </h1>
      {renderDaysOfWeek()}
      {renderDaysOfMonth()}

      <div className="flex gap-4 mt-8">
        <span className="flex items-center justify-center flex-1 gap-2 text-textSecondaryColor-400 bg-textSecondaryColor-300/20 rounded p-1"><RiCheckboxFill />2 presenças</span>
        <span className="flex items-center justify-center flex-1 gap-2 text-textSecondaryColor-200 bg-textSecondaryColor-200/20  rounded p-1"><RiCheckboxIndeterminateFill />2 faltas</span>
      </div>
    </div>
  );
};


