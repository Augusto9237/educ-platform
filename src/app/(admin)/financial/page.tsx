'use client';
import * as Dialog from '@radix-ui/react-dialog';

import clsx from "clsx";
import dayjs from "dayjs";
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";
import { extractMonth } from '../../utils/getMonth';
import { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

interface FinanceSubscriberProps {
    __typename?: "Finance" | undefined;
    id: string;
    month?: any;
    payment?: boolean | null | undefined;
    value?: number | null | undefined;
}


export default function Financial() {
    const { dataSubscribers, loadingUser } = useContext(AdminContext);
    const [financeSubscriber, setFinanceSubscriber] = useState<FinanceSubscriberProps[]>([]);

    return (
        <>
            {!loadingUser && (
                <section className="flex flex-col gap-2 flex-1 p-3 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100 overflow-hidden">
                    <h1 className="mx-auto text-lg font-bold">Mensalidades</h1>
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-3">
                            <span className="flex justify-center">Aluno</span>
                            <span className="flex justify-center">Turma</span>
                            <span className="flex justify-center">Status</span>
                        </div>
                        <Dialog.Root>
                            {dataSubscribers?.subscribers.map((finance) => {
                                const paids = finance.finances.filter((payment) => payment.payment === true)
                                const late = finance.finances.filter((payment) => payment.payment === false)
                                const isOpen = finance.finances.filter((payment) => payment.payment !== true && payment.payment !== false)

                                return (
                                    <Dialog.Trigger key={finance.id} className="relative grid grid-cols-3 pb-2 max-sm:overflow-x-auto" onClick={() => setFinanceSubscriber(finance.finances)}>
                                        <span className="flex justify-center">{finance.name}</span>
                                        <span className="flex justify-center">{finance.class?.code}</span>
                                        <div className="flex flex-1 gap-4 justify-center">
                                            <span className='text-textSecondaryColor-400'>{paids.length} Pagos</span>
                                            <span className='text-textSecondaryColor-200'>{late.length} Atrasados</span>
                                            <span className='text-buttonColor-500'>{isOpen.length} Abertos</span>
                                        </div>
                                        <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                    </Dialog.Trigger>
                                )
                            })}
                            {/* {finances?.finances.map((tuition) => (

                                <Dialog.Trigger key={tuition.id} className="relative grid grid-cols-3 pb-2 " disabled={tuition.payment!} onClick={() => setPaymentStatus(tuition.payment)}>
                                    <span className="flex justify-center">{}</span>
                                    <span className="flex justify-center">{extractMonth(dayjs(tuition.month).month() + 1, true)}</span>
                                    <span className="flex justify-center">R$ {tuition.value}</span>

                                    <span className={clsx('flex items-center justify-center max-sm:flex-1 gap-2 rounded',
                                        {
                                            "text-textSecondaryColor-400 bg-textSecondaryColor-300/20": tuition.payment === true,
                                            "text-textSecondaryColor-200 bg-textSecondaryColor-200/20": tuition.payment === false,
                                            "text-buttonColor-600 bg-buttonColor-500/20": tuition.payment === null
                                        })}>
                                        {tuition.payment === true ? <><RiCheckboxFill />Pago</> : null}
                                        {!tuition.payment === false ? <><RiCheckboxIndeterminateFill />Atrasado</> : null}
                                        {tuition.payment === null ? <h1>Em aberto</h1> : null}
                                    </span>
                                    <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                </Dialog.Trigger>
                            ))} */}
                            <Dialog.Portal>
                                <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                    <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl  max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                        <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                            <strong className='text-textColor-300'>X</strong>
                                        </Dialog.Close>
                                        <div className="grid grid-cols-3">
                                            <span className="flex justify-center">Mês</span>
                                            <span className="flex justify-center">Valor</span>
                                            <span className="flex justify-center">Status</span>
                                        </div>
                                        {financeSubscriber.map((tuition) => {
                                            return (
                                                <div key={tuition.id} className="relative grid grid-cols-3 pb-2 " >
                                                    <span className="flex justify-center">{extractMonth(dayjs(tuition.month).month() + 1, true)}</span>
                                                    <span className="flex justify-center">R$ {tuition.value}</span>

                                                    <span className={clsx('flex items-center justify-center max-sm:flex-1 gap-2 rounded',
                                                        {
                                                            "text-textSecondaryColor-400 bg-textSecondaryColor-300/20": tuition.payment === true,
                                                            "text-textSecondaryColor-200 bg-textSecondaryColor-200/20": tuition.payment === false,
                                                            "text-buttonColor-600 bg-buttonColor-500/20": tuition.payment === null
                                                        })}>
                                                        {tuition.payment === true ? <><RiCheckboxFill />Pago</> : null}
                                                        {tuition.payment === false ? <><RiCheckboxIndeterminateFill />Atrasado</> : null}
                                                        {tuition.payment === null ? <h1>Em aberto</h1> : null}
                                                    </span>
                                                    <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                                </div>

                                            )
                                        })}

                                    </Dialog.Content>
                                </Dialog.Overlay>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                </section>
            )}
        </>
    )
}