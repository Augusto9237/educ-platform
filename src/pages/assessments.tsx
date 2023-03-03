import { BottomBar } from "../components/BottomBar";
import { CardGrades } from "../components/CardGrades";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Assesments() {
    return(
        <>
        <Header titleRoutes='Avaliações' />
        <Sidebar/>
        <Container>
            <section className="flex flex-col flex-1 gap-10 justify-start max-sm:pb-14">
                <CardGrades/>
            </section>
        </Container>
        <BottomBar />
    </>
    )
}