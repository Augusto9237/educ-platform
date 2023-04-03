'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { GlobalContext } from "app/context/GlobalContext";
import { extractMonth } from "app/utils/getMonth";
import clsx from "clsx";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";


export default function Payments() {
    const { user, loadingUser } = useContext(GlobalContext)
    const [paymentStatus, setPaymentStatus] = useState<boolean | null | undefined>(false);
    console.log(user?.values?.pictureUrl)

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
                        <Dialog.Root>
                            {user?.values?.finances.map((tuition) => (

                                <Dialog.Trigger key={tuition.id} className="relative grid grid-cols-3 pb-2 " disabled={tuition.payment!} onClick={() => setPaymentStatus(tuition.payment)}>
                                    <span className="flex justify-center">{extractMonth(dayjs(tuition.month).month() + 1, true)}</span>
                                    <span className="flex justify-center">R$ {tuition.value}</span>

                                    <span className={clsx('flex items-center justify-center max-sm:flex-1 gap-2 rounded',
                                        {
                                            "text-textSecondaryColor-400 bg-textSecondaryColor-300/20": tuition.payment,
                                            "text-textSecondaryColor-200 bg-textSecondaryColor-200/20": !tuition.payment,
                                            "text-buttonColor-600 bg-buttonColor-500/20": tuition.payment === null
                                        })}>
                                        {tuition.payment === true ? <><RiCheckboxFill />Pago</> : null}
                                        {!tuition.payment === false ? <><RiCheckboxIndeterminateFill />Atrasado</> : null}
                                        {tuition.payment === null ? <h1>Em aberto</h1> : null}
                                    </span>
                                    <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                </Dialog.Trigger>
                            ))}
                            <Dialog.Portal>
                                <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                    <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl  max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                        <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                            <strong className='text-textColor-300'>X</strong>
                                        </Dialog.Close>
                                        <div className='flex flex-1 flex-col overflow-hidden'>
                                            <img src='https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png' />
                                            <strong className='mx-auto'>Efeutue o pagmento!</strong>
                                            <span>OBS: Querido aluno, por favor! inclua no comprovante de pagamento seu e-mail</span>
                                        </div>
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