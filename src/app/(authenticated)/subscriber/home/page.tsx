'use client';

import { GlobalContext } from "@/components/app/context/GlobalContext";
import { CardAssessment } from "@/components/components/CardAssessment";
import { CardFrequency } from "@/components/components/CardFrequency";
import { CardPayments } from "@/components/components/CardPayments";
import { Spinner } from "@/components/components/Spinner";
import { useContext } from "react";



export default function Home() {
    const { loadingUser } = useContext(GlobalContext)
    return (
        <>
            {loadingUser && (
                <Spinner />
            )}
            
            {!loadingUser && (
                <section className="w-full gap-4 max-sm:flex max-sm:flex-1 max-sm:flex-col md:grid  grid-cols-3  max-sm:justify-start  max-sm:pb-14 ">
                    <div className="flex flex-col gap-2 md:mb-4">
                        <h1 className="text-lg font-bold">Avaliações</h1>
                        <CardAssessment />
                    </div>

                    <div className="flex flex-col gap-2 md:mb-4">
                        <h1 className="text-lg font-bold">Frequência</h1>
                        <CardFrequency />
                    </div>

                    <div className="flex flex-col gap-2 md:mb-4">
                        <h1 className="text-lg font-bold">Pagamentos</h1>
                        <CardPayments />
                    </div>
                </section>
            )}
        </>
    )
}