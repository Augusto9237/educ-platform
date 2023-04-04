'use client';
import { Spinner } from "app/components/Spinner";
import { GlobalContext } from "app/context/GlobalContext";
import { useContext } from "react";
import { CardAssessment } from "../../../components/CardAssessment";
import { CardFrequency } from "../../../components/CardFrequency";
import { CardPayments } from "../../../components/CardPayments";

export default function Dashboard() {
    const { loadingUser } = useContext(GlobalContext)
    return (
        <>
            {loadingUser && (
                <Spinner />
            )}
            {!loadingUser && (
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
            )}
        </>
    )
}