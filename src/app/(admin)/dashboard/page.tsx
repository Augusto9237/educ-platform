'use client';

import { CardBody } from "@/components/components/CardBody";
import { useContext } from "react";
import { HiUsers } from "react-icons/hi";
import { AdminContext } from "../../context/AdminContext";

export default function Dashboard() {
    const { dataSubscribers, loadingUser } = useContext(AdminContext);

    return (
        <>
            <section className="w-full gap-4 max-sm:flex max-sm:flex-1 max-sm:flex-col md:grid  grid-cols-3  max-sm:justify-start  max-sm:pb-14 ">
                <CardBody>
                    <div className="flex items-center gap-2">
                        <HiUsers />
                        <span>Alunos</span>
                    </div>
                    <h1 className="text-textSecondaryColor-600 text-2xl font-bold">{dataSubscribers?.subscribers.length}</h1>
                </CardBody>
            </section>

        </>
    )
}