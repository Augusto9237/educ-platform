
import { BottomBar } from "../components/BottomBar";
import { CardAssessment } from "../components/CardAssessment";
import { CardFrequency } from "../components/CardFrequency";
import { CardPayments } from "../components/CardPayments";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
    return (
        <>
            <Header titleRoutes='Home' />
            <Sidebar/>
            <Container>
                <section className="w-full max-sm:flex max-sm:flex-1 max-sm:flex-col md:grid grid-cols-3 gap-6 max-sm:justify-start  max-sm:pb-14 ">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg font-bold">Avaliações</h1>
                        <CardAssessment />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg font-bold">Frequência</h1>
                        <CardFrequency />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg font-bold">Pagamentos</h1>
                        <CardPayments/>
                    </div>
                </section>
            </Container>
            <BottomBar />
        </>
    )
}