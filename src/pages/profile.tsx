
import { BottomBar } from "../components/BottomBar";
import { Container } from "../components/Container";
import { StudentAvatar } from "../components/StudentAvatar";

export default function Profile() {
    return (
        <>
            <Container>
                <div className="flex flex-col flex-1 w-full  max-sm:justify-center max-sm:pb-14">
                    <div className="flex flex-col items-center h-80 justify-center gap-4">
                        <StudentAvatar width="100px" height="100px" />
                        <strong className="text-textSecondaryColor-600 text-2xl">Aluno Teste</strong>
                    </div>

                    <div className="flex flex-col bg-backgroundColor-100 rounded-xl p-3">
                        <h1 className="mx-auto text-lg font-semibold">Informações do perfil</h1>
                        <div className="flex flex-col p-2">
                            <span className="text-textColor-600">Nome Completo</span>
                            <span className="text-lg font-semibold">Aluno teste</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="text-textColor-600">E-mail</span>
                            <span className="text-lg font-semibold">aluno@test.com</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="text-textColor-600">Telefone</span>
                            <span className="text-lg font-semibold">(91) 999999</span>
                        </div>
                    </div>
                </div>
            </Container>
            <BottomBar />
        </>
    )
}