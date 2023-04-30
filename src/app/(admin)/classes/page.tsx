"use client";
import { Spinner } from '@/components/components/Spinner';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { RiEditBoxFill, RiDeleteBin2Fill } from "react-icons/ri";
import { GetSubscribersDataQuery, useDeleteSubscriberMutation, useEditSubscriberMutation } from 'graphql/api';
import { toast } from 'react-toastify';
import { FormEditSubscriber } from '@/components/components/FormEditSubscriber';

interface SubscriberProps {
    __typename?: 'Subscriber';
    id: string;
    name: string;
    email: string;
    pictureUrl?: string | null;
    phone?: string | null;
    address?: string | null;
}

export default function Classes() {
    const { classes, reloadClasses, loadingUser, loadingClasses } = useContext(AdminContext);
    const [selectedSubscriber, setSelectedSubscriber] = useState<SubscriberProps>(null!);
    const [deleteSubscriber] = useDeleteSubscriberMutation()

    async function handleDeleteSubscriber(id: string) {
        try {
            await deleteSubscriber({
                variables: {
                    id: id
                }
            })
            toast.success('Aluno excluído com sucesso!')
            reloadClasses()
        } catch (error) {
            toast.error('Erro! Tente novamente')
        }
    }

    return (
        <>
            {loadingUser && (
                <div className='w-full h-full flex flex-1 justify-center items-center'>
                    <Spinner />
                </div>
            )}

            {!loadingUser && (
                <section className="flex flex-col gap-2 flex-1 p-3 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100 overflow-hidden">
                    <h1 className="mx-auto text-lg font-bold">Alunos</h1>
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-5">
                            <strong className="flex justify-center">Codigo</strong>
                            <strong className="flex justify-center">Nome</strong>
                            <strong className="flex justify-center">Quant. Alunos</strong>
                        </div>
                        {!loadingClasses && (
                            <>
                                {classes?.classes.map((classe) => (
                                    <div key={classe.id} className='relative'>
                                        <div className="grid grid-cols-5 overflow-hidden overflow-x-auto hover:bg-backgroundColor-300/60 mb-2">
                                            <span className="flex justify-center">{classe.code}</span>
                                            <span className="flex justify-center">{classe.name}</span>
                                            <span className="flex justify-center">{classe.subscribers.length}</span>
                                            <span className="flex justify-center">adicionar aluno</span>
                                            <div className='flex justify-evenly'>

                                                {/* <Dialog.Root>
                                                    <Dialog.Trigger onClick={() => setSelectedSubscriber(subscriber)} className='flex items-center gap-2 text-backgroundColor-500 bg-backgroundColor-400/30 px-2 rounded hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400'>
                                                        <RiEditBoxFill />
                                                        <span>Editar</span>
                                                    </Dialog.Trigger>

                                                    <Dialog.Portal>
                                                        <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                                            <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                                                <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                                                    <strong className='text-textColor-200'>X</strong>
                                                                </Dialog.Close>
                                                                <FormEditSubscriber subscriber={selectedSubscriber} />
                                                            </Dialog.Content>
                                                        </Dialog.Overlay>
                                                    </Dialog.Portal>
                                                </Dialog.Root>
                                                <button onClick={() => handleDeleteSubscriber(subscriber.id)} className='flex items-center gap-2 text-textSecondaryColor-200 bg-textSecondaryColor-200/25 px-2  rounded hover:bg-textSecondaryColor-200/20'>
                                                    <RiDeleteBin2Fill />
                                                    <span>Excluir</span>
                                                </button> */}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                    </div>
                                ))}
                            </>
                        )}
                        {loadingClasses && (
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