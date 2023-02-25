
import { BottomBar } from "../components/BottomBar";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export default function Profile() {
    return (
        <>
            <Container>
                <div className="flex max-sm:flex-col w-full max-sm:">
                    <div className="flex flex-1 flex-col items-center">
                        <div className="w-[80px] h-[80px] rounded-full object-cover overflow-hidden mb-2">
                            <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/5620880-livro-de-design-moderno-de-aluno-icone-avatar-segurando-vetor.jpg" alt="" />
                        </div>
                        <strong className="text-textColor-500 text-2xl">Benjamin Tayson</strong>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>Aluno há 6 meses</span>
                    </div>
                    <section className="flex flex-1 bg-backgroundColor-300 rounded-t-3xl">

                    </section>
                </div>
            </Container>
            <BottomBar/>
        </>
    )
}