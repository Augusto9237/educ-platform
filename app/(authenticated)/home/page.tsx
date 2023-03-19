'use client';
import { CardAssessment } from "../../components/CardAssessment";
import { CardFrequency } from "../../components/CardFrequency";
import { CardPayments } from "../../components/CardPayments";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Home() {
    return (
        <>

            <section className="w-full gap-4 max-sm:flex max-sm:flex-1 max-sm:flex-col md:grid  grid-cols-3  max-sm:justify-start  max-sm:pb-14 ">
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-bold">Avaliações</h1>
                    <CardAssessment />
                </div>

                <div className="flex flex-col gap-2">
                        <h1 className="text-lg font-bold">Frequência</h1>
                        <CardFrequency />
                    </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-bold">Pagamentos</h1>
                    <CardPayments />
                </div>
            </section>

        </>
    )
}