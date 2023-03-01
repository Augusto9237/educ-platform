
import { RiCheckboxFill, RiCheckboxIndeterminateFill } from "react-icons/ri";
import { BottomBar } from "../components/BottomBar";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export default function Frequency() {

    return (
        <>
            <Header titleRoutes='Pagamentos' />
            <Container>
                <section className="flex flex-col gap-2 flex-1 p-3 justify-start rounded-xl text-textSecondaryColor-600 bg-backgroundColor-100">
                    <h1 className="mx-auto text-lg font-semibold">Mensalidades</h1>
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-3">
                            <span className="flex justify-center">Mês</span>
                            <span className="flex justify-center">Valor</span>
                            <span className="flex justify-center">status</span>
                        </div>
                        <div className="relative grid grid-cols-3 pb-2">
                            <span className="flex justify-center">Janeiro</span>
                            <span className="flex justify-center">R$ 150,00</span>
                            <span className="flex items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-400 bg-textSecondaryColor-300/20 rounded "><RiCheckboxFill />Pago</span>
                            <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                        </div>
                        <div className="relative grid grid-cols-3 pb-2">
                            <span className="flex justify-center">Feveiro</span>
                            <span className="flex justify-center">R$ 150,00</span>
                            <span className="flex items-center justify-center max-sm:flex-1 gap-2 text-textSecondaryColor-200 bg-textSecondaryColor-200/20  rounded"><RiCheckboxIndeterminateFill />Atrasado</span>
                            <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                        </div>
                    </div>
                </section>
            </Container>
            <BottomBar />
        </>
    )
}