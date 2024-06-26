"use client";
import { GlobalContext } from "@/components/app/context/GlobalContext";
import { Spinner } from "@/components/components/Spinner";
import { StudentAvatar } from "@/components/components/StudentAvatar";
import { useContext } from "react";


export default function Profile() {
    const { user, loadingUser } = useContext(GlobalContext);
    return (
        <>
            {!loadingUser && (
                <div className="flex flex-col flex-1 w-full  max-sm:justify-center max-sm:pb-14">
                    <div className="flex flex-col items-center h-80 justify-center">
                        <StudentAvatar width="100px" height="100px" url={user?.values?.pictureUrl} />
                        <strong className="text-textSecondaryColor-600 text-2xl">{user?.values?.name}</strong>
                        <span>{`Turma: ${user?.values?.class?.code}`}</span>
                    </div>


                    <div className="flex flex-col bg-backgroundColor-100 rounded-xl p-3">
                        <h1 className="mx-auto text-lg font-semibold">Informações do perfil</h1>
                        <div className="flex flex-col p-2">
                            <span className="text-textColor-600">Nome Completo</span>
                            <span className="text-lg font-semibold">{user?.values?.name}</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="text-textColor-600">E-mail</span>
                            <span className="text-lg font-semibold">{user?.values?.email}</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="text-textColor-600">Telefone</span>
                            <span className="text-lg font-semibold">{`(${user?.values?.phone?.slice(0, 2)}) ${user?.values?.phone?.slice(2)}`}</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="text-textColor-600">Endereço</span>
                            <span className="text-lg font-semibold">{user?.values?.address}</span>
                        </div>
                    </div>
                </div>
            )}
            {loadingUser && (
                <div className="flex flex-1 h-full justify-center items-center">
                    <Spinner />
                </div>
            )}
        </>
    )
}