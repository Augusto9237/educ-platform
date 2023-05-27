"use client";
import { useContext, useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import * as Collapsible from '@radix-ui/react-collapsible';

import { Spinner } from '@/components/components/Spinner';
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { BsListCheck } from "react-icons/bs";
import { AdminContext } from '../../context/AdminContext';
import { extractMonth } from '../../utils/getMonth';
import dayjs from 'dayjs';
import { RiCheckboxFill, RiCheckboxIndeterminateFill, RiDeleteBin2Fill} from 'react-icons/ri';

import { NewListCall } from '@/components/components/NewListCall';
import { useDeleteFrequencyMutation } from 'graphql/api';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { EditListCall } from '@/components/components/EditListCall';

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

export interface SubscriberSelected {
    __typename?: "Presence" | undefined;
    id: string;
    prensente?: boolean | null | undefined;
    subscriber?: {
        __typename?: "Subscriber" | undefined;
        name: string;
        id: string;
    } | null | undefined;
}[]


export default function Frequencies() {
    const { classes, idClasses, setIdClasses, classById, loadingClassesById, reloadClassById } = useContext(AdminContext)
    const [frequencyGroup, setFrequencyGroup] = useState<FrequencyGroupedByMonth[]>([]);
    const [callList, setCallList] = useState<SubscriberSelected[]>([]);
    const [open, setOpen] = useState(false);
    const [openModalCallList, setOpenModalCallList] = useState(false);
    const [deleteFrequency] = useDeleteFrequencyMutation()

    useEffect(() => {
        if (classById?.class?.frequencies) {
            const frequenciesGroupedByMonth: FrequencyGroupedByMonth[] = classById.class.frequencies.reduce((acc: FrequencyGroupedByMonth[], frequency: Frequency) => {

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
    }, [classById]);


    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any) {
        const { name, value } = event.target;
        setIdClasses((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    async function handleSelectedCallList(frequncy: SubscriberSelected[]) {
        setCallList(frequncy);
        setOpenModalCallList(true);
    }

    async function handleDeleteFrequency(frequencyId: string) {
        try {
            await deleteFrequency({
                variables: {
                    id: frequencyId
                }
            })
            toast.success("Lista de frequência excluida com sucesso");
            reloadClassById();
        } catch (error) {
            console.log(error);
            toast.error("Algo deu errado, tente novamente");
        }

    }

    return (
        <>
            <section className="flex flex-col gap-2 max-h-screen flex-1 p-4 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100 overflow-hidden">
                <header className='grid grid-cols-3 items-center mb-2'>
                    <div className='flex flex-1'>
                        <select required className="text-lg p-1 rounded-md bg-textColor-200/20" name="id" value={idClasses.id} onChange={handleChange}>
                            <option value=''>Selecione uma turma</option>
                            {classes?.classes.map((classe) => (
                                <option key={classe.id} value={classe.id}>{classe.code} - {classe.name}</option>
                            ))}
                        </select>
                    </div>

                    <h1 className="mx-auto text-lg font-bold">Frequências</h1>

                    <div className='flex justify-end'>
                        {idClasses.id && (
                            <NewListCall />
                        )
                        }
                    </div>

                </header>
                <div className='flex flex-1 justify-center'>
                    {idClasses.id === '' ? <h1>Nenhuma turma Selecionada</h1>
                        :
                        <>
                            {loadingClassesById && (
                                <Spinner />
                            )}

                            {!loadingClassesById && (
                                <>
                                    {
                                        frequencyGroup.map(({ frequencies, month }, i) => (
                                            <div key={i} className="flex flex-1 flex-col p-2 h-fit shadow-md bg-backgroundColor-50 rounded">
                                                <Collapsible.Root open={open} onOpenChange={setOpen}>
                                                    <header className='flex flex-1 justify-center'>
                                                        <h1 className='text-lg font-semibold'>{extractMonth(month, true)}</h1>
                                                    </header>
                                                    <div className="grid grid-cols-4 font-semibold text-textColor-500/60">
                                                        <div className="flex justify-center">Data</div>
                                                        <div className="flex justify-center">Presenças</div>
                                                        <div className="flex justify-center">Faltas</div>
                                                        <div className='flex justify-center'>
                                                            •••
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-1 justify-center'>
                                                        <Collapsible.Trigger asChild >
                                                            <button className="IconButton text-lg">{open ? <RxChevronUp /> : <RxChevronDown />}</button>
                                                        </Collapsible.Trigger>
                                                    </div>

                                                    <Collapsible.Content className='delay-80 duration-500'>
                                                        {frequencies.map((frequency) => {
                                                            return (
                                                                <div key={frequency.id} className="relative grid grid-cols-4 py-2 hover:bg-textColor-200/30">
                                                                    <div className="flex justify-center">{dayjs(frequency.createdAt).format('DD/MM/YYYY')}</div>
                                                                    <div className="flex justify-center">{frequency.subscribes.filter((presence) => presence.prensente === true).length}</div>
                                                                    <div className="flex justify-center">{frequency.subscribes.filter((presence) => presence.prensente === false).length}</div>
                                                                    <div className='flex justify-center gap-2'>
                                                                        <Dialog.Root modal={openModalCallList}>
                                                                            <Dialog.Trigger onClick={() => handleSelectedCallList(frequency.subscribes)} className='flex px-2 items-center justify-center gap-2 rounded font-semibold bg-textColor-300/60 text-textSecondaryColor-600 hover:bg-textColor-200'>
                                                                                <BsListCheck />
                                                                                <span>Lista</span>
                                                                            </Dialog.Trigger>
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
                                                                                            <span className="flex w-10 justify-center">#</span>
                                                                                            <span className="flex flex-1 justify-center">Nome</span>
                                                                                            <span className="flex w-28 justify-center">Status</span>
                                                                                        </div>
                                                                                        {callList.map((subscriberList, i) => (
                                                                                            <div key={subscriberList.id} className="relative flex flex-row py-2 hover:bg-backgroundColor-300/90">
                                                                                                <span className="flex w-10 justify-center">{i + 1}</span>
                                                                                                <span className="flex flex-1 pl-2">{subscriberList.subscriber?.name}</span>
                                                                                                <div className={clsx("flex w-28 justify-center items-center gap-2",
                                                                                                    {
                                                                                                        "text-textSecondaryColor-400 bg-textSecondaryColor-300/20": subscriberList.prensente === true,
                                                                                                        "text-textSecondaryColor-200 bg-textSecondaryColor-200/20": subscriberList.prensente === false,
                                                                                                    })}>{subscriberList.prensente === true ? <> <RiCheckboxFill /> <span>P</span> </> : <><RiCheckboxIndeterminateFill /> <span>F</span></>}</div>
                                                                                                <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                                                                            </div>
                                                                                        ))}

                                                                                    </Dialog.Content>
                                                                                </Dialog.Overlay>
                                                                            </Dialog.Portal>
                                                                        </Dialog.Root>

                                                                        <EditListCall callList={frequency.subscribes} idFrequency={frequency.id} />
                                                                        
                                                                        <button onClick={() => handleDeleteFrequency(frequency.id)} className='flex px-2 items-center justify-center gap-2 rounded font-semibold text-textSecondaryColor-200 bg-textSecondaryColor-200/25 hover:bg-textSecondaryColor-200/20'>
                                                                            <RiDeleteBin2Fill />
                                                                            <span>Excluir</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
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