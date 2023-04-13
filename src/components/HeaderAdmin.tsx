'use client';

import { extractMonth } from "../app/utils/getMonth";
import { ProfileAdmin } from "./ProfileAdmin";

export function HeaderAdmin() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.getMonth();
    const dateFormated = `${day} de ${extractMonth(month +1, true)}`;

    return (
        <header className="flex flex-col w-full max-h-[114px] max-md:rounded-b-2xl text-textColor-100 p-4 bg-backgroundColor-900">
            <div className="flex flex-col gap-3 w-full max-w-[1160px] mx-auto">
                <div className="flex  flex-row w-full justify-between items-center gap-4 overflow-hidden">
                    <div className="flex flex-col gap-1">
                        <span className="flex flex-1 ">Bem-vindo(a)</span>
                        <span>{dateFormated}</span>
                    </div>
                    <ProfileAdmin/>
                </div>
            </div>
        </header>
    )
}