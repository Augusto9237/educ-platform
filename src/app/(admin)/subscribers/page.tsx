"use client";
import { Spinner } from '@/components/components/Spinner';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { RiEditBoxFill, RiDeleteBin2Fill, RiSearchLine } from "react-icons/ri";
import { useDeleteSubscriberMutation } from 'graphql/api';
import { toast } from 'react-toastify';
import { FormEditSubscriber } from '@/components/components/FormEditSubscriber';
import { FaUserGraduate } from 'react-icons/fa';

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
    const [isModalAddSubscriber, setIsmodalAddSubscriber] = useState(false)

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
                    <header className='flex flex-1 justify-between items-center'>
                        <div className='relative flex flex-1 max-w-[300px] rounded-md border-solid border border-textColor-200 overflow-hidden'>
                            <button className='px-2'><RiSearchLine /></button>
                            <input type='search' className='p-1 flex flex-1' placeholder='Pesquisar por aluno' />
                        </div>
                        <h1 className="mx-auto text-lg font-bold">Alunos</h1>
                        <Dialog.Root modal={isModalAddSubscriber}>
                            <Dialog.Trigger onClick={() => setIsmodalAddSubscriber(true)} className='flex flex-1 max-w-[300px] items-center font-semibold rounded-md p-2 gap-2 justify-center text-backgroundColor-500 bg-backgroundColor-400/25'>
                                <FaUserGraduate />
                                <span className='leading-none'>Adicionar Aluno</span>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                    <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl  max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>

                                        <div className='flex flex-1 flex-col w-full text-textColor-600 gap-2'>
                                            <header className='flex flex-1 relative items-center'>
                                                <h1 className="mx-auto text-lg font-semibold">Adicionar mensalidade</h1>
                                                <Dialog.Close className='absolute right-0 text-textColor-700'>
                                                    <strong className='text-textColor-300'>X</strong>
                                                </Dialog.Close>
                                            </header>
                                            <form className='flex flex-col gap-2'>
                                                <div className='flex flex-col'>
                                                    <label className="font-semibold">Data de Vencimento</label>
                                                    <input className="text-lg p-1 rounded" required type='date' name='month' />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <label className="font-semibold">Valor</label>
                                                    <input className="text-lg p-1 rounded" required type='number' name='value' />
                                                </div>

                                                <div className="flex flex-1 gap-4 mt-4">
                                                    <button type="submit" className="flex w-full justify-center items-center rounded-lg py-2 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
                                                        <strong>Salvar</strong>
                                                    </button>

                                                    <button type="reset" onClick={() => setIsmodalAddSubscriber(false)} className="flex w-full justify-center items-center rounded-lg py-2 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
                                                        <strong>Cancelar</strong>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </Dialog.Content>

                                </Dialog.Overlay>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </header>


                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-5">
                            <strong className="flex justify-center">Nome</strong>
                            <strong className="flex justify-center">Turma</strong>
                            <strong className="flex justify-center">E-mail</strong>
                            <strong className="flex justify-center">Telefone</strong>
                        </div>
                        {!loadingSubscribers && (
                            <>
                                {subscribers?.subscribers.map((subscriber) => (
                                    <div key={subscriber.id} className='relative'>
                                        <div className="grid grid-cols-5 overflow-hidden overflow-x-auto hover:bg-backgroundColor-300/60 mb-2">
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