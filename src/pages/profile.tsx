
import { BottomBar } from "../components/BottomBar";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export default function Profile() {
    return (
        <>
            <Container>
                <div className="flex max-sm:flex-col w-full max-sm:">
                    <div className="flex flex-1 flex-col items-center">
                        <strong className="text-textColor-500 text-2xl">Benjamin Tayson</strong>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>Aluno há 6 meses</span>
                    </div>
                    <section className="flex flex-1 bg-backgroundColor-300 rounded-t-3xl">

                    </section>
                </div>
            </Container>
            <BottomBar />
        </>
    )
}