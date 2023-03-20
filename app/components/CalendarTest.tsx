"use client";
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from 'react-icons/ri';
import clsx from 'clsx';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

export function CalendarTest({ month, year, frequencies }: CalendarProps) {
  const arrayDate = frequencies.map((obj) => obj.createdAt);
  return (
    <div>
      <Calendar  defaultValue={arrayDate} />
    </div>
  );
}
