
import { GlobalContext } from "app/context/GlobalContext";
import { extractMonth } from "app/utils/getMonth";
import dayjs from "dayjs";
import { useContext } from "react";
import { RiCheckboxFill, RiCheckboxIndeterminateFill, RiMoneyDollarCircleFill } from "react-icons/ri"

export function CardPayments() {
    const { user } = useContext(GlobalContext);
    const payments = user?.values?.finances.filter((payment) => dayjs(payment.month).month() === dayjs().month())

    return (
        <div className="relative flex flex-1 flex-col p-3 pl-6 justify-center gap-4 w-full rounded-xl shadow-lg bg-backgroundColor-100 overflow-hidden">
            <div className="absolute bg-textSecondaryColor-400 w-3 h-full left-0" />
            {payments?.map((payment) => (
                <div className="flex flex-row gap-4" key={payment.id}>
                    <div className="flex items-center text-4xl rounded-full p-3 text-textSecondaryColor-400 bg-textSecondaryColor-300/20">
                        <RiMoneyDollarCircleFill />
                    </div>
                    <div>
                        <h1 className="text-textSecondaryColor-600 text-2xl font-bold">Mensalidade</h1>
                        <span className="text-textColor-300">{extractMonth(dayjs(payment.month).month() + 1, true)}</span>
                    </div>
                </div>
            ))}
            <div className="flex  gap-4">
                <span className="flex items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-400 bg-textSecondaryColor-300/20 rounded p-1"><RiCheckboxFill />1 pago</span>
                <span className="flex items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-200 bg-textSecondaryColor-200/20  rounded p-1"><RiCheckboxIndeterminateFill />0 atrasado</span>
            </div>
        </div>


    )
}