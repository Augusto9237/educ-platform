import * as Dialog from '@radix-ui/react-dialog';

import { BottomBar } from "../components/BottomBar";
import { Calendar } from '../components/Calendar';
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { SummaryTable } from "../components/SumaryTable";

export default function Frequency() {

    return (
        <>
            <Header titleRoutes='Frequência' />
            <Container>
                <Dialog.Root>
                    <Dialog.Trigger>Modal</Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className='w-screen h-sreen bg-textColor-900/80 fixed inset-0'>
                            <Dialog.Content className='absolute p-4 bg-backgroundColor-300 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                <Dialog.Close className='absolute right-4 top-2 text-textColor-700'>
                                    X
                                </Dialog.Close>
                                <Calendar month={(6)-1} year={2023}/>
                            </Dialog.Content>
                        </Dialog.Overlay>
                    </Dialog.Portal>
                </Dialog.Root>
                <section className="flex flex-col flex-1 gap-10 justify-start max-sm:pb-14 ">

                </section>
            </Container>
            <BottomBar />
        </>
    )
}