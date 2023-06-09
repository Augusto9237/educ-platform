"use client";
import { Spinner } from '@/components/components/Spinner';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useState } from 'react';

import { RiEditBoxFill, RiDeleteBin2Fill } from "react-icons/ri";
import { useDeleteClassesMutation } from 'graphql/api';
import { toast } from 'react-toastify';
import { FormEditClasse } from '@/components/components/FormEditClasse';
import { FaPlusCircle } from 'react-icons/fa';
import { AdminContext } from '@/components/app/context/AdminContext';

export interface ClasseProps {
    __typename?: "Class" | undefined;
    code?: string | null | undefined;
    id: string;
    name?: string | null | undefined;
    subscribers?: {
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
}

export default function Classes() {
    const { classes, reloadClasses, loadingUser, loadingClasses } = useContext(AdminContext);
    const [isOpen, setIsOpen] = useState(false);
    const [deleteClass] = useDeleteClassesMutation()
    const [isModalAddClass, setIsmodalAddClasse] = useState(false)

    async function handleDeleteSubscriber(id: string) {
        try {
            await deleteClass({
                variables: {
                    id: id
                }
            })
            toast.success('Turma excluída com sucesso!')
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
                <section className="flex flex-col gap-2 flex-1 p-4 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100 overflow-hidden">
                    <header className='grid grid-cols-3 items-center mb-2'>
                        <div />

                        <h1 className="mx-auto text-lg font-bold">Turmas</h1>

                        <div className='flex justify-end'>
                            <Dialog.Root modal={isModalAddClass}>
                                <Dialog.Trigger onClick={() => setIsmodalAddClasse(true)} className='flex flex-1 max-w-fit items-center font-semibold rounded-md p-2 gap-2 justify-center text-textColor-500 bg-buttonColor-500/80'>
                                    <FaPlusCircle />
                                    <span className='leading-none'>Adicionar Turma</span>
                                </Dialog.Trigger>
                                <Dialog.Portal>
                                    <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                        <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl  max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                            <header className='flex flex-1 relative items-center'>
                                                <h1 className="mx-auto text-lg font-semibold">Nova turma</h1>
                                                <Dialog.Close className='absolute right-0 text-textColor-700'>
                                                    <strong className='text-textColor-300'>X</strong>
                                                </Dialog.Close>
                                            </header>
                                            <FormEditClasse setIsOpen={setIsmodalAddClasse} />
                                        </Dialog.Content>

                                    </Dialog.Overlay>
                                </Dialog.Portal>
                            </Dialog.Root>
                        </div>

                    </header>
                    <div className="flex flex-col">
                        <div className="relative grid grid-cols-4 py-2 text-textColor-500/60">
                            <strong className="flex justify-center">Codigo</strong>
                            <strong className="flex justify-center">Nome</strong>
                            <strong className="flex justify-center">Quantidade de Alunos</strong>
                            <div className="absolute bottom-0 h-[2px] w-full bg-textColor-200" />
                        </div>
                        {!loadingClasses && (
                            <>
                                {classes?.classes.map((classe) => (
                                    <div key={classe.id} className="relative grid grid-cols-4 py-2 hover:bg-textColor-200/30">
                                        <span className="flex justify-center">{classe.code}</span>
                                        <span className="flex justify-center">{classe.name}</span>
                                        <span className="flex justify-center">{classe.subscribers.length}</span>
                                        <div className="flex gap-4">
                                            <Dialog.Root modal={isOpen}>
                                                <Dialog.Trigger onClick={() => setIsOpen(true)} className='flex flex-1 items-center justify-center gap-2 rounded font-semibold text-backgroundColor-500 bg-backgroundColor-400/30 hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400'>
                                                    <RiEditBoxFill />
                                                    <span className='max-md:hidden'>Editar</span>
                                                </Dialog.Trigger>

                                                <Dialog.Portal>
                                                    <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                                        <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                                            <header className='flex flex-1 relative items-center'>
                                                                <h1 className="mx-auto text-lg font-semibold">Editar turma</h1>
                                                                <Dialog.Close className='absolute right-0 text-textColor-700'>
                                                                    <strong className='text-textColor-300'>X</strong>
                                                                </Dialog.Close>
                                                            </header>
                                                            <FormEditClasse classe={classe} setIsOpen={setIsOpen} />
                                                        </Dialog.Content>
                                                    </Dialog.Overlay>
                                                </Dialog.Portal>
                                            </Dialog.Root>

                                            <button onClick={() => handleDeleteSubscriber(classe.id)} className='flex flex-1 items-center justify-center gap-2 rounded font-semibold text-textSecondaryColor-200 bg-textSecondaryColor-200/25 hover:bg-textSecondaryColor-200/20'>
                                                <RiDeleteBin2Fill />
                                                <span className='max-md:hidden'>Excluir</span>
                                            </button>
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