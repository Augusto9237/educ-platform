"use client";
import { StudentAvatar } from "@/components/components/StudentAvatar";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";


export default function ProfileAdmin() {
    const { user } = useContext(AdminContext)
    return (
        <>

            <div className="flex flex-col flex-1 w-full  max-sm:justify-center max-sm:pb-14">
                <div className="flex flex-col items-center h-80 justify-center">
                    <StudentAvatar width="100px" height="100px" url={user?.teacher?.avatarURL} />
                    <strong className="text-textSecondaryColor-600 text-2xl">{user?.teacher?.name}</strong>
                </div>


                <div className="flex flex-col bg-backgroundColor-100 rounded-xl p-3">
                    <h1 className="mx-auto text-lg font-semibold">Informações do perfil</h1>
                    <div className="flex flex-col p-2">
                        <span className="text-textColor-600">Nome Completo</span>
                        <span className="text-lg font-semibold">{user?.teacher?.name}</span>
                    </div>
                    <div className="flex flex-col p-2">
                        <span className="text-textColor-600">E-mail</span>
                        <span className="text-lg font-semibold">{user?.teacher?.email}</span>
                    </div>
                    <div className="flex flex-col p-2">
                        <span className="text-textColor-600">Telefone</span>
                        <span className="text-lg font-semibold">(91) 999999</span>
                    </div>
                </div>
            </div>
        </>
    )
}