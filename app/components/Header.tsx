'use client';
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { StudentAvatar } from "./StudentAvatar"

import * as Popover from '@radix-ui/react-popover';
import { RiLogoutBoxRFill } from "react-icons/ri";
import { ProfileMenu } from "./ProfileMenu";

interface HeaderProps {
    titleRoutes?: string
}
export function Header({ titleRoutes }: HeaderProps) {
    const dataAtual = new Date();
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mesNumero = dataAtual.getMonth();
    const mesNome = meses[mesNumero];
    const dataFormatada = `${dia} de ${mesNome}`;


    return (
        <header className="flex flex-col w-full max-h-[114px] max-md:rounded-b-2xl text-textColor-100 p-4 bg-backgroundColor-900">
            <div className="flex flex-col gap-3 w-full max-w-[1160px] mx-auto">
                <div className="flex  flex-row w-full justify-between items-center gap-4 overflow-hidden">
                    <div className="flex flex-col gap-1">
                        <span className="flex flex-1 ">Bem-vindo(a)</span>
                        <span>{dataFormatada}</span>
                    </div>
                    <ProfileMenu />
                </div>
            </div>
        </header>
    )
}