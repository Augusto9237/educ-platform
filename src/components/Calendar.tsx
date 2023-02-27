import { useState } from 'react';
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from 'react-icons/ri';

type CalendarProps = {
  month: number;
  year: number;
};

export function Calendar({ month, year }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Obter o número de dias no mês
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Obter o dia da semana do primeiro dia do mês

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
    const daysToRender = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysToRender.push(
        <div key={`empty-${i}`} className=" h-6 w-6"></div>
      );
    }
    days.forEach((day) => {
      daysToRender.push(
        <div
          key={day.toString()}
          className={`h-6 w-6 flex items-center justify-center cursor-pointer rounded-full p-1 ${selectedDate?.getDate() === day.getDate() ? 'bg-textSecondaryColor-300/95 text-textSecondaryColor-600' : ''
            }`}
          onClick={() => setSelectedDate(day)}
        >
          {day.getDate()}
        </div>
      );
    });
    return <div className="grid grid-cols-7 gap-2 ml-4 -mr-1">{daysToRender}</div>;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold px-2 mb-2 ">
        {new Date(year, month).toLocaleDateString('pt-BR', {
          month: 'long',
          year: 'numeric',
        })}
      </h1>
      {renderDaysOfWeek()}
      {renderDaysOfMonth()}

      <div className="flex flex-col gap-4 mt-8">
        <span className="flex  items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-400 bg-textSecondaryColor-300/20 rounded p-1"><RiCheckboxFill />2 presenças</span>
        <span className="flex items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-200 bg-textSecondaryColor-200/20  rounded p-1"><RiCheckboxIndeterminateFill />2 faltas</span>
      </div>
    </div>
  );
};


