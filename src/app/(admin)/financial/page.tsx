'use client';
import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from '@radix-ui/react-popover';

import clsx from "clsx";
import dayjs from "dayjs";
import { RiCheckboxFill, RiCheckboxIndeterminateFill, RiSearchLine } from "react-icons/ri";
import { extractMonth } from '../../utils/getMonth';
import { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useCreateFinancesMutation, useUpdateFinancePaymentMutation } from 'graphql/api';
import { toast } from 'react-toastify';
import { Spinner } from '@/components/components/Spinner';
import { FaPlusCircle } from 'react-icons/fa';
export interface FinanceSubscriberProps {
    __typename?: "Finance" | undefined;
    id: string;
    month?: any;
    payment?: boolean | null | undefined;
    value?: number | null | undefined;
}

interface SubscriberProps {
    __typename?: 'Subscriber';
    id: string;
    name: string;
    email: string;
    pictureUrl?: string | null;
    phone?: string | null;
    address?: string | null;
    finances?: {
        __typename?: "Finance" | undefined;
        id: string;
        month?: any;
        payment?: boolean | null | undefined;
        value?: number | null | undefined;
    }[];
}[];


export default function Financial() {
    const { subscribers, reloadSubscribers, loadingUser } = useContext(AdminContext);
    const [financeSubscriber, setFinanceSubscriber] = useState<FinanceSubscriberProps[]>([]);
    const [createFinanceData, setCreateFinanceData] = useState({
        month: '',
        value: ''
    })
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [loadingCreatePayment, setLoadingCreatePayment] = useState(false);
    const [updateFinance] = useUpdateFinancePaymentMutation();
    const [createFinance] = useCreateFinancesMutation();

    async function handleUpdatePayment(id: string, status: boolean) {
        try {
            await updateFinance({
                variables: {
                    id: id,
                    payment: status
                }
            })

            const updatedArray = financeSubscriber.map(obj => {
                if (obj.id === id) {
                    return {
                        ...obj,
                        payment: status
                    };
                }
                return obj;
            });
            setFinanceSubscriber(updatedArray)
            toast.success('Status de Pagamento do aluno alterado')
        } catch (error) {
            toast.error('Erro! Tente novamente')
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setCreateFinanceData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    async function createFinances(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            if (subscribers?.subscribers) {
                setLoadingCreatePayment(true)
                await Promise.all(
                    subscribers?.subscribers.map(async (subscriber: SubscriberProps) => {
                        await createFinance({
                            variables: {
                                id: subscriber.id,
                                month: createFinanceData.month,
                                value: parseFloat(createFinanceData.value),
                            },
                        });
                    })
                );
                setLoadingCreatePayment(false);
                toast.success('Pagamentos criados com sucesso!')
                reloadSubscribers();
                setIsOpenModal(false)
            }
        } catch (error) {
            toast.error('Algo deu errado, tente novamente')
            console.log(error);
        }
    }

    async function handleSelectedFinance(finance: FinanceSubscriberProps[]) {
        setFinanceSubscriber(finance)
    }

    return (
        <>
            {!loadingUser && (
                <section className="flex flex-col gap-2 flex-1 p-4 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100 overflow-hidden">
                    <header className='grid grid-cols-3 items-center mb-2'>
                        <div className='flex flex-1 rounded-md border-solid border border-textColor-200 bg-textColor-200/20 overflow-hidden'>
                            <button className='px-2'><RiSearchLine /></button>
                            <input type='search' className='p-1 flex flex-1 bg-backgroundColor-300/0' placeholder='Pesquisar por aluno' />
                        </div>

                        <h1 className="text-lg font-bold mx-auto">Mensalidades</h1>
                        <div className='flex justify-end'>
                            <Dialog.Root modal={isOpenModal}>
                                <Dialog.Trigger onClick={() => setIsOpenModal(true)} className='flex flex-1 max-w-fit items-center font-semibold rounded-md p-2 gap-2 justify-center text-textColor-500 bg-buttonColor-500/80 hover:bg-buttonColor-600/90'>
                                    <FaPlusCircle />
                                    <span className='leading-none'>Adicionar Mensalidade</span>
                                </Dialog.Trigger>
                                <Dialog.Portal>
                                    <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                        {loadingCreatePayment && (
                                            <Spinner />
                                        )}
                                        {!loadingCreatePayment && (
                                            <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl  max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>

                                                <div className='flex flex-1 flex-col w-full text-textColor-600 gap-2'>
                                                    <header className='flex flex-1 relative items-center'>
                                                        <h1 className="mx-auto text-lg font-semibold">Adicionar mensalidade</h1>
                                                        <Dialog.Close className='absolute right-0 text-textColor-700'>
                                                            <strong className='text-textColor-300'>X</strong>
                                                        </Dialog.Close>
                                                    </header>
                                                    <form className='flex flex-col gap-2' onSubmit={createFinances}>
                                                        <div className='flex flex-col'>
                                                            <label className="font-semibold">Data de Vencimento</label>
                                                            <input className="text-lg p-1 rounded" required type='date' name='month' onChange={handleChange} />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <label className="font-semibold">Valor</label>
                                                            <input className="text-lg p-1 rounded" required type='number' name='value' onChange={handleChange} />
                                                        </div>

                                                        <div className="flex flex-1 gap-4 mt-4">
                                                            <button type="submit" className="flex w-full justify-center items-center rounded-lg py-2 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
                                                                <strong>Salvar</strong>
                                                            </button>

                                                            <button type="reset" onClick={() => setIsOpenModal(false)} className="flex w-full justify-center items-center rounded-lg py-2 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
                                                                <strong>Cancelar</strong>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>

                                            </Dialog.Content>
                                        )}
                                    </Dialog.Overlay>
                                </Dialog.Portal>
                            </Dialog.Root>
                        </div>
                    </header>
                    <div className="flex flex-col">
                        <div className="relative grid grid-cols-5 py-2 text-textColor-500/60">
                            <strong className="flex justify-center">Aluno</strong>
                            <strong className="flex justify-center">E-mail</strong>
                            <strong className="flex justify-center">Telefone</strong>
                            <strong className="flex justify-center">Turma</strong>
                            <strong className="flex justify-center">Status</strong>
                            <div className="absolute bottom-0 h-[2px] w-full bg-textColor-200" />
                        </div>
                        <Dialog.Root >
                            {subscribers?.subscribers.map((finance) => {
                                const paids = finance.finances.filter((payment) => payment.payment === true)
                                const late = finance.finances.filter((payment) => payment.payment === false)
                                const isOpen = finance.finances.filter((payment) => payment.payment !== true && payment.payment !== false)

                                return (
                                    <Dialog.Trigger key={finance.id} className="relative grid grid-cols-5 py-2 items-center hover:bg-textColor-200/30 max-sm:overflow-x-auto" onClick={() => handleSelectedFinance(finance.finances)}>
                                        <span className="flex justify-center">{finance.name}</span>
                                        <span className="flex justify-center">{finance.email}</span>
                                        <span className="flex justify-center">{`(${finance.phone!.slice(0, 2)}) ${finance.phone!.slice(2)}`}</span>
                                        <span className="flex justify-center">{finance.class?.code}</span>
                                        <div className="flex flex-1">
                                            <span className={clsx('flex flex-1 items-center justify-center max-sm:flex-1 gap-2 rounded',
                                                {
                                                    "text-textSecondaryColor-400 bg-textSecondaryColor-300/20": late.length === 0 && isOpen.length === 0,
                                                    "text-textSecondaryColor-200 bg-textSecondaryColor-200/20": late.length > 0,
                                                    "text-buttonColor-600 bg-buttonColor-500/20": isOpen.length > 0
                                                })}>
                                                {late.length === 0 && isOpen.length === 0 && (<>{paids.length} Pago{paids.length > 1 ? 's' : null}</>)}
                                                {late.length > 0 && (<>{late.length} Atrasado{late.length > 1 ? 's' : null}</>)}
                                                {late.length === 0 && isOpen.length > 0 && (<h1>{isOpen.length} Em aberto</h1>)}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                    </Dialog.Trigger>
                                )
                            })}
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
                                                <div key={tuition.id} className=" relative grid grid-cols-3 py-2" >
                                                    <span className="flex justify-center">{extractMonth(dayjs(tuition.month).month() + 1, true)}</span>
                                                    <span className="flex justify-center">R$ {tuition.value}</span>
                                                    <Popover.Root>
                                                        <Popover.Trigger className={clsx('flex items-center justify-center max-sm:flex-1 gap-2 rounded',
                                                            {
                                                                "text-textSecondaryColor-400 bg-textSecondaryColor-300/20 hover:bg-textSecondaryColor-300/30": tuition.payment === true,
                                                                "text-textSecondaryColor-200 bg-textSecondaryColor-200/20 hover:bg-textSecondaryColor-200/30": tuition.payment === false,
                                                                "text-buttonColor-600 bg-buttonColor-500/20": tuition.payment === null
                                                            })}>
                                                            {tuition.payment === true ? <><RiCheckboxFill />Pago</> : null}
                                                            {tuition.payment === false ? <><RiCheckboxIndeterminateFill />Atrasado</> : null}
                                                            {tuition.payment === null ? <h1>Em aberto</h1> : null}
                                                        </Popover.Trigger>
                                                        <Popover.Anchor />
                                                        <Popover.Portal >
                                                            <Popover.Content className='flex flex-1 flex-col gap-2 bg-textColor-100 rounded shadow-md shadow-textColor-700 p-2 w-full z-50 mt-[6px] ml-[221%] max-sm:ml-[182%] max-ip:ml-[175%]'>
                                                                <Popover.Close />
                                                                <button onClick={() => handleUpdatePayment(tuition.id, true)} className='flex flex-1 items-center px-3 gap-2 rounded-sm text-textSecondaryColor-400 bg-textSecondaryColor-300/20 hover:bg-textSecondaryColor-300/30'><RiCheckboxFill />Pago</button>
                                                                <button onClick={() => handleUpdatePayment(tuition.id, false)} className='flex flex-1 items-center px-3 gap-2 rounded-sm text-textSecondaryColor-200 bg-textSecondaryColor-200/20 hover:bg-textSecondaryColor-200/30'><RiCheckboxIndeterminateFill />Atrasado</button>
                                                            </Popover.Content>
                                                        </Popover.Portal>
                                                    </Popover.Root>
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