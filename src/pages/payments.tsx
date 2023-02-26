
import { BottomBar } from "../components/BottomBar";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export default function Frequency() {

    return (
        <>
            <Header titleRoutes='Pagamentos' />
            <Container>
                <section className="flex flex-col flex-1 gap-10 justify-start max-sm:pb-14">
                    <h1>Pagamentos</h1>
                </section>
            </Container>
            <BottomBar />
        </>
    )
}