
import { BottomBar } from "../components/BottomBar";
import { Button } from "../components/Button";
import { CardAssessment } from "../components/CardAssessment";
import { CardFrequency } from "../components/CardFrequency";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export default function Home() {
    return (
        <>
            <Header titleRoutes='Home' />
            <Container>
                <section className="flex flex-col flex-1 gap-10 justify-start max-sm:pb-14">
                    <div className="flex flex-col gap-4">
                        <span className="text-base font-bold">Avaliações</span>
                        <CardAssessment />
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-base font-bold">Frequência</span>
                        <CardFrequency />
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-base font-bold">Frequência</span>
                        <CardFrequency />
                    </div>
                </section>
            </Container>
            <BottomBar />
        </>
    )
}