'use client';
import { GlobalContext } from "app/context/GlobalContext";
import { extractMonth } from "app/utils/getMonth";
import clsx from "clsx";
import dayjs from "dayjs";
import { useContext } from "react";
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";


export default function Payments() {
    const { user, loadingUser } = useContext(GlobalContext)

    return (
        <>
            {!loadingUser && (
                <section className="flex flex-col gap-2 flex-1 p-3 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100">
                    <h1 className="mx-auto text-lg font-bold">Mensalidades</h1>
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-3">
                            <span className="flex justify-center">Mês</span>
                            <span className="flex justify-center">Valor</span>
                            <span className="flex justify-center">status</span>
                        </div>
                        {user?.values?.finances.map((tuition) => (
                            <div key={tuition.id} className="relative grid grid-cols-3 pb-2">
                                <span className="flex justify-center">{extractMonth(dayjs(tuition.month).month() + 1, true)}</span>
                                <span className="flex justify-center">R$ 150,00</span>

                                <span className={clsx('flex items-center justify-center max-sm:flex-1 gap-2 rounded',
                                    {
                                        "text-textSecondaryColor-400 bg-textSecondaryColor-300/20": tuition.payment,
                                        "text-textSecondaryColor-200 bg-textSecondaryColor-200/20": !tuition.payment
                                    })}>
                                    {tuition.payment === true ? <><RiCheckboxFill />Pago</> : <> <RiCheckboxIndeterminateFill />Atrasado</>}
                                </span>
                                <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}