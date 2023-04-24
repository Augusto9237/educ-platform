"use client";
import { Spinner } from '@/components/components/Spinner';
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
import {RiEditBoxFill, RiDeleteBin2Fill} from "react-icons/ri";

export default function Subscribers() {
    const { dataSubscribers, loadingUser } = useContext(AdminContext);
    return (
        <>
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
                        <>
                            <div className="grid grid-cols-5 overflow-hidden overflow-x-auto hover:bg-backgroundColor-300/70" key={subscriber.id}>
                                <span className="flex justify-center">{subscriber.name}</span>
                                <span className="flex justify-center">{subscriber.class?.code}</span>
                                <span className="flex justify-center">{subscriber.email}</span>
                                <span className="flex justify-center">{`(${subscriber.phone!.slice(0, 2)}) ${subscriber.phone!.slice(2)}`}</span>
                                <div className='flex justify-evenly'>
                                    <button className='flex items-center gap-2 text-backgroundColor-400'>
                                        <RiEditBoxFill />
                                        <span>Editar</span>
                                    </button>
                                    <button className='flex items-center gap-2 text-textSecondaryColor-200'>
                                        <RiDeleteBin2Fill/>
                                        <span>Excluir</span>
                                    </button>
                                </div>
                            </div>
                            <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}