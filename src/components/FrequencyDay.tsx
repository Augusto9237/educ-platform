import * as Popover from '@radix-ui/react-popover';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { useState } from 'react';

interface HabitDayProps {
  date: Date
  defaultCompleted?: number
  amount?: number
}

export function FrequencyDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted)

  const comlpetedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')

  function handleCompletedChaged(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className="w-5 h-5 bg-zinc-900 border-2 bg-backgroundColor-500 border-buttonColor-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>
          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}