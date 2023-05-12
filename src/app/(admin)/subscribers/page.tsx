"use client";
import { Spinner } from '@/components/components/Spinner';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { RiEditBoxFill, RiDeleteBin2Fill, RiSearchLine } from "react-icons/ri";
import { useDeleteSubscriberMutation } from 'graphql/api';
import { toast } from 'react-toastify';
import { FormEditSubscriber } from '@/components/components/FormEditSubscriber';
import { FormUser } from '@/components/components/FormUser';
import { FaPlusCircle } from 'react-icons/fa';


interface SubscriberProps {
    __typename?: 'Subscriber';
    id: string;
    name: string;
    email: string;
    pictureUrl?: string | null;
    phone?: string | null;
    address?: string | null;
}

export default function Subscribers() {
    const { subscribers, loadingUser, loadingSubscribers, reloadSubscribers } = useContext(AdminContext);
    const [selectedSubscriber, setSelectedSubscriber] = useState<SubscriberProps>(null!);
    const [deleteSubscriber] = useDeleteSubscriberMutation()
    const [isOpen, setIsOpen] = useState(false);
    const [isModalAddSubscriber, setIsmodalAddSubscriber] = useState(false);

    useEffect(() => {

        reloadSubscribers()

    }, [isModalAddSubscriber, reloadSubscribers])



    async function handleDeleteSubscriber(id: string) {
        try {
            await deleteSubscriber({
                variables: {
                    id: id
                }
            })
            toast.success('Aluno excluído com sucesso!')
            reloadSubscribers()
        } catch (error) {
            toast.error('Erro! Tente novamente')
        }
    }

    function handleSelectedSubscriber(subscriber: SubscriberProps) {
        setSelectedSubscriber(subscriber);
        setIsOpen(true);
    }

    return (
        <>
            {loadingUser && (
                <div className='w-full h-full flex flex-1 justify-center items-center'>
                    <Spinner />
                </div>
            )}

            {!loadingUser && (
                <section className="flex flex-col gap-2 flex-1 p-4 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100 overflow-hidden">
                    <header className='grid grid-cols-3 items-center mb-2'>
                        <div className='relative flex flex-1 rounded-md border-solid border border-textColor-200 overflow-hidden'>
                            <button className='px-2'><RiSearchLine /></button>
                            <input type='search' className='p-1 flex flex-1' placeholder='Pesquisar por aluno' />
                        </div>

                        <h1 className="mx-auto text-lg font-bold">Alunos</h1>

                        <div className='flex justify-end'>
                            <Dialog.Root modal={isModalAddSubscriber}>
                                <Dialog.Trigger onClick={() => setIsmodalAddSubscriber(true)} className='flex flex-1 max-w-fit items-center font-semibold rounded-md p-2 gap-2 justify-center text-textColor-500 bg-buttonColor-500/80'>
                                    <FaPlusCircle />
                                    <span className='leading-none'>Adicionar Aluno</span>
                                </Dialog.Trigger>
                                <Dialog.Portal>
                                    <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                        <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl  max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                            <header className='flex flex-1 relative items-center'>
                                                <h1 className="mx-auto text-lg font-semibold">Novo aluno</h1>
                                                <Dialog.Close className='absolute right-0 text-textColor-700'>
                                                    <strong className='text-textColor-300'>X</strong>
                                                </Dialog.Close>
                                            </header>
                                            <FormUser setIsOpenAddSubscriber={setIsmodalAddSubscriber} />
                                        </Dialog.Content>

                                    </Dialog.Overlay>
                                </Dialog.Portal>
                            </Dialog.Root>
                        </div>

                    </header>


                    <div className="flex flex-col">
                        <div className="relative grid grid-cols-5 py-2 bg-textColor-200/30">
                            <strong className="flex justify-center">Nome</strong>
                            <strong className="flex justify-center">Turma</strong>
                            <strong className="flex justify-center">E-mail</strong>
                            <strong className="flex justify-center">Telefone</strong>
                            <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                        </div>
                        {!loadingSubscribers && (
                            <>
                                {subscribers?.subscribers.map((subscriber) => (
                                    <div key={subscriber.id} className="relative grid grid-cols-5 py-2 overflow-hidden overflow-x-auto hover:bg-textColor-200/30">
                                        <span className="flex justify-center">{subscriber.name}</span>
                                        <span className="flex justify-center">{subscriber.class?.code}</span>
                                        <span className="flex justify-center">{subscriber.email}</span>
                                        <span className="flex justify-center">{`(${subscriber.phone!.slice(0, 2)}) ${subscriber.phone!.slice(2)}`}</span>
                                        <div className='flex gap-4'>
                                            <Dialog.Root modal={isOpen}>
                                                <Dialog.Trigger onClick={() => handleSelectedSubscriber(subscriber)} className='flex flex-1 items-center justify-center gap-2 rounded text-backgroundColor-500 bg-backgroundColor-400/30 hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400'>
                                                    <RiEditBoxFill />
                                                    <span>Editar</span>
                                                </Dialog.Trigger>

                                                <Dialog.Portal>
                                                    <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                                        <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                                            <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                                                <strong className='text-textColor-200'>X</strong>
                                                            </Dialog.Close>
                                                            <FormEditSubscriber subscriber={selectedSubscriber} setIsOpen={setIsOpen} />
                                                        </Dialog.Content>
                                                    </Dialog.Overlay>
                                                </Dialog.Portal>
                                            </Dialog.Root>
                                            <button onClick={() => handleDeleteSubscriber(subscriber.id)} className='flex flex-1 items-center justify-center gap-2 rounded text-textSecondaryColor-200 bg-textSecondaryColor-200/25 px-2 hover:bg-textSecondaryColor-200/20'>
                                                <RiDeleteBin2Fill />
                                                <span>Excluir</span>
                                            </button>
                                        </div>
                                        <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                    </div>
                                ))}
                            </>
                        )}
                        {loadingSubscribers && (
                            <div className='flex flex-1 py-2 justify-center'>
                                <div
                                    className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-backgroundColor-300 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                </section>
            )}
        </>
    )
}