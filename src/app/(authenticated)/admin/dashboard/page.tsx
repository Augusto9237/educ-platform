'use client';
import { AdminContext } from "@/components/app/context/AdminContext";
import { CardBody } from "@/components/components/CardBody";
import { TopListSubscriber } from "@/components/components/TopListSubsciber";
import { useContext } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

export default function Dashboard() {
    const { subscribers, classes } = useContext(AdminContext);
    
    return (
        <>
            <main className="flex flex-col w-full gap-4 min-h-[87vh]  max-md:pb-10">
                <section className="w-full gap-4 max-sm:flex max-sm:flex-1 max-sm:flex-col sm:grid  grid-cols-3  max-sm:justify-start">
                    <CardBody>
                        <div className="flex items-center gap-2">
                            <FaUserGraduate />
                            <span>Alunos</span>
                        </div>
                        <h1 className="text-textSecondaryColor-600 text-2xl font-bold">{subscribers?.subscribers.length}</h1>
                    </CardBody>
                    <CardBody>
                        <div className="flex items-center gap-2">
                            <HiUsers />
                            <span>Turmas</span>
                        </div>
                        <h1 className="text-textSecondaryColor-600 text-2xl font-bold">{classes?.classes.length}</h1>
                    </CardBody>
                    <CardBody>
                        <div className="flex items-center gap-2">
                            <HiUsers />
                            <span>Pagamentos</span>
                        </div>
                        <h1 className="text-textSecondaryColor-600 text-2xl font-bold"></h1>
                    </CardBody>
                </section>
                <TopListSubscriber />
            </main>


        </>
    )
}