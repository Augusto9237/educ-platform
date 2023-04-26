"use client";
import { Spinner } from '@/components/components/Spinner';
import { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { RiEditBoxFill, RiDeleteBin2Fill } from "react-icons/ri";
import { GetSubscribersDataQuery, useDeleteSubscriberMutation } from 'graphql/api';
import { toast } from 'react-toastify';

export default function Subscribers() {
    const { dataSubscribers, loadingUser } = useContext(AdminContext);
    const [selectedSubscriber, setSelectedSubscriber] = useState<GetSubscribersDataQuery[]>([]);
    const [deleteSubscriber, unpublishSubscriber] = useDeleteSubscriberMutation()

    async function handleDeleteSubscriber(id: string) {
        try {
            await deleteSubscriber({
                variables: {
                    id: id
                }
            })
            toast.success('Aluno excluído com sucesso!')
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
                            <strong className="flex justify-center">Nome</strong>
                            <strong className="flex justify-center">Turma</strong>
                            <strong className="flex justify-center">E-mail</strong>
                            <strong className="flex justify-center">Telefone</strong>
                        </div>

                        {dataSubscribers?.subscribers.map((subscriber) => (
                            <div key={subscriber.id} className='relative'>
                                <div className="grid grid-cols-5 overflow-hidden overflow-x-auto hover:bg-backgroundColor-300/60 mb-2">
                                    <span className="flex justify-center">{subscriber.name}</span>
                                    <span className="flex justify-center">{subscriber.class?.code}</span>
                                    <span className="flex justify-center">{subscriber.email}</span>
                                    <span className="flex justify-center">{`(${subscriber.phone!.slice(0, 2)}) ${subscriber.phone!.slice(2)}`}</span>
                                    <div className='flex justify-evenly'>
                                        <button className='flex items-center gap-2 text-backgroundColor-500 bg-backgroundColor-400/30 px-2 rounded hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400'>
                                            <RiEditBoxFill />
                                            <span>Editar</span>
                                        </button>
                                        <button onClick={() => handleDeleteSubscriber(subscriber.id)} className='flex items-center gap-2 text-textSecondaryColor-200 bg-textSecondaryColor-200/25 px-2  rounded hover:bg-textSecondaryColor-200/20'>
                                            <RiDeleteBin2Fill />
                                            <span>Excluir</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}