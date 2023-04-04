"use client";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { extractMonth } from '../app/utils/getMonth';


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
  frequencies: Frequency[];
  month: number;
};

type events = {
  title: string;
  date: string;
}[]

export function CalendarEvent({ frequencies, month }: CalendarProps) {
  const [event, setEvent] = useState<events>([])
  useEffect(() => {
    if (frequencies) {
      const eventFrequency = frequencies.map((frequency) => {
        return { title: frequency.subscribes[0].prensente ? '✅' : '⛔', date: dayjs(frequency.createdAt).format('YYYY-MM-DD'), backgroundColor: frequency.subscribes[0].prensente ? "#8ce889" : "#f27a90", borderColor: 'transparent', };
      })
      setEvent(eventFrequency);
    }
  }, [frequencies])

  return (
    <>
      <h1 className="text-textSecondaryColor-600 text-lg font-bold mb-4">{extractMonth(month, true)}</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="br"
        headerToolbar={false}
        firstDay={1}
        initialDate={frequencies[0].createdAt}
        showNonCurrentDates={false}
        events={event}
        contentHeight="auto"
        fixedWeekCount={false}
      />
    </>
  );
};








