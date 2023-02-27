import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

import { BottomBar } from "../components/BottomBar";
import { Calendar } from '../components/Calendar';
import { CardMonth } from '../components/CardMonth';
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export default function Frequency() {
    const [month, setMonth] = useState(0)
    return (
        <>
            <Header titleRoutes='Frequência' />
            <Container>
                <section className="flex flex-col flex-1 gap-6 justify-start max-sm:pb-14 ">
                    <Dialog.Root>
                        <Dialog.Trigger onClick={() => setMonth(1)}>
                            <CardMonth month="Janeiro" />
                        </Dialog.Trigger>
                        <Dialog.Trigger onClick={() => setMonth(2)}>
                            <CardMonth month="Fevereiro" />
                        </Dialog.Trigger>
                        <Dialog.Trigger onClick={() => setMonth(3)}>
                            <CardMonth month="Março" />
                        </Dialog.Trigger>
                        <Dialog.Trigger onClick={() => setMonth(4)}>
                            <CardMonth month="Abril" />
                        </Dialog.Trigger>
                        <Dialog.Trigger onClick={() => setMonth(5)}>
                            <CardMonth month="Maio" />
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className='w-screen h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                                <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                                    <Dialog.Close className='absolute right-4 top-4 text-textColor-700'>
                                        X
                                    </Dialog.Close>
                                    <Calendar month={month - 1} year={2023} />
                                </Dialog.Content>
                            </Dialog.Overlay>
                        </Dialog.Portal>
                    </Dialog.Root>
                </section>
            </Container>
            <BottomBar />
        </>
    )
}