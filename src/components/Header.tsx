import Link from "next/link";
import { StudentAvatar } from "./StudentAvatar"

interface HeaderProps {
    titleRoutes: string
}
export function Header({ titleRoutes }: HeaderProps) {
    const dataAtual = new Date();
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mesNumero = dataAtual.getMonth();
    const mesNome = meses[mesNumero];
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia} de ${mesNome} de ${ano}`;

    return (
        <header className="flex flex-col w-full max-h-[114px] rounded-b-2xl text-textColor-100 p-4 bg-backgroundColor-900">
            <div className="flex max-sm:flex-col gap-3">
                <div className="flex  flex-row w-full max-h-8 justify-between items-center gap-4 overflow-hidden">
                    <span className="flex flex-1">Bem-vindo(a)</span>
                    <Link href='/profile' className="flex flex-row flex-1 justify-end items-center overflow-hidden gap-2">
                        <strong className="text-base">Aluno Teste</strong>
                        <StudentAvatar width="30px" height="30px" />
                    </Link>
                </div>
                <div className="flex flex-row justify-between">
                    <h1>{titleRoutes}</h1>
                    <span>{dataFormatada}</span>
                </div>
            </div>
        </header>
    )
}