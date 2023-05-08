"use client";

import { useContext, useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as Popover from '@radix-ui/react-popover';

import { Spinner } from '@/components/components/Spinner';
import { RxCross2, RxDropdownMenu } from "react-icons/rx";
import { BsListCheck } from "react-icons/bs";
import { AdminContext } from '../../context/AdminContext';
import { extractMonth } from '../../utils/getMonth';
import dayjs from 'dayjs';

export interface FrequencyGroupedByMonth {
    month: number;
    frequencies: Frequency[];
}

interface Frequency {
    __typename?: 'Frequency';
    createdAt: any;
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

export default function Frequencies() {
    const [month, setMonth] = useState(0)
    const { frequencies, classes, idClasses, setIdClasses, loadingFequencies, reloadFrequencies } = useContext(AdminContext)
    const [frequencyGroup, setFrequencyGroup] = useState<FrequencyGroupedByMonth[]>([]);
    const [open, setOpen] = useState(false);
    const [openModalCallList, setOpenModalCallList] = useState(false);

    useEffect(() => {
        if (frequencies?.frequencies) {
            const frequenciesGroupedByMonth: FrequencyGroupedByMonth[] = frequencies.frequencies.reduce((acc: FrequencyGroupedByMonth[], frequency: Frequency) => {

                const createdAt = new Date(frequency.createdAt);
                const month = createdAt.getMonth() + 1;

                const groupIndex = acc.findIndex(group => group.month === month);
                if (groupIndex >= 0) {
                    acc[groupIndex].frequencies.push(frequency);
                } else {
                    acc.push({ month, frequencies: [frequency] });
                }

                return acc;
            }, []);
            setFrequencyGroup(frequenciesGroupedByMonth);
        }
    }, [frequencies]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any) => {
        const { name, value } = event.target;
        setIdClasses((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>
            <section className="flex flex-col gap-2 flex-1 p-4 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100 overflow-hidden">
                <header className='grid grid-cols-3 items-center mb-2'>
                    <div className='flex flex-1'>
                        <select required className="text-lg p-1 rounded" name="id" value={idClasses.id} onChange={handleChange}>
                            <option value=''>Selecione uma turma</option>
                            {classes?.classes.map((classe) => (
                                <option key={classe.id} value={classe.id}>{classe.code} - {classe.name}</option>
                            ))}
                        </select>
                    </div>

                    <h1 className="mx-auto text-lg font-bold">Frequencias</h1>

                    <div className='flex justify-end'>

                    </div>

                </header>
                <div className='flex flex-1 justify-center'>
                    {frequencies?.frequencies.length === 0 ? <h1>Nenhuma turma Selecionada</h1>
                        :
                        <>
                            {loadingFequencies && (
                                <Spinner />
                            )}

                            {!loadingFequencies && (
                                <>
                                    {
                                        frequencyGroup.map(({ frequencies, month }, i) => (
                                            <div key={i} className="flex flex-1 flex-col">
                                                <Collapsible.Root open={open} onOpenChange={setOpen}>
                                                    <header className='flex flex-1 justify-center'>
                                                        <h1>{extractMonth(month, true)}</h1>
                                                    </header>
                                                    <div className="grid grid-cols-4">
                                                        <div className="flex justify-center">Data</div>
                                                        <div className="flex justify-center">Presenças</div>
                                                        <div className="flex justify-center">Faltas</div>
                                                        <div className='flex justify-center'>
                                                            <Collapsible.Trigger asChild>
                                                                <button className="IconButton">{open ? <RxCross2 /> : <RxDropdownMenu />}</button>
                                                            </Collapsible.Trigger>
                                                        </div>
                                                    </div>
                                                    <Collapsible.Content>
                                                        {frequencies.map((frequency) => {
                                                            return (
                                                                <div key={frequency.id} className="grid grid-cols-4">
                                                                    <div className="flex justify-center">{dayjs(frequency.createdAt).format('DD/MM/YYYY')}</div>
                                                                    <div className="flex justify-center">{frequency.subscribes.filter((presence) => presence.prensente === true).length}</div>
                                                                    <div className="flex justify-center">{frequency.subscribes.filter((presence) => presence.prensente === false).length}</div>
                                                                    <Dialog.Root modal={openModalCallList}>
                                                                        <Dialog.Trigger onClick={() => setOpenModalCallList(true)} className="flex justify-center items-center gap-2"><BsListCheck />Lista de chamada</Dialog.Trigger>
                                                                        <Dialog.Portal>
                                                                            <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                                                                <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl  max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                                                                    <header className='flex flex-1 relative items-center'>
                                                                                        <h1 className="mx-auto text-lg font-semibold">Lista de chamada</h1>
                                                                                        <Dialog.Close className='absolute right-0 text-textColor-700'>
                                                                                            <strong className='text-textColor-300'>X</strong>
                                                                                        </Dialog.Close>
                                                                                    </header>
                                                                                    <div className="flex flex-row">
                                                                                        <span className="flex bg-backgroundColor-900 flex-1 justify-center">Nome</span>
                                                                                        <span className="flex bg-buttonColor-500 w-28 justify-center">Status</span>
                                                                                    </div>
                                                                                    {/* {financeSubscriber.map((tuition) => {
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
                                })} */}

                                                                                </Dialog.Content>
                                                                            </Dialog.Overlay>
                                                                        </Dialog.Portal>
                                                                    </Dialog.Root>

                                                                </div>
                                                            )
                                                        })}
                                                    </Collapsible.Content>
                                                </Collapsible.Root>
                                            </div>
                                        ))
                                    }
                                </>
                            )}
                        </>
                    }
                </div>
            </section>
        </>
    )
}