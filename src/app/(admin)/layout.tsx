"use client";
import { BottomBar } from '@/components/components/BottomBar';
import { Container } from '@/components/components/Container';
import { Header } from '@/components/components/Header';
import { Sidebar } from '@/components/components/Sidebar';
import { ApolloProvider } from '@apollo/client';
import Link from 'next/link';

import { ReactNode } from 'react';
import { RiHome3Fill, RiCalendarCheckFill, RiBarChartBoxFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GlobalProvider } from '../context/GlobalProvider';
import '../globals.css';
import { Client } from '../lib/apollo';
import ProvidersWrapper from '../ProvidersWrapper';

interface RootLayoutProps {
    children: ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='pt-br'>
            <head />
            <body className='bg-backgroundColor-300'>
                <ProvidersWrapper>
                    <ApolloProvider client={Client}>
                        {/* <GlobalProvider> */}
                            {/* <Header /> */}
                            <Sidebar>
                                <Link href='/dashboard' className="flex  text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex flex-row text-2xl items-center gap-2">
                                        <RiHome3Fill /><span className="hidden leading-none text-xl group-hover:flex delay-200 duration-600">Dashboard</span>
                                    </button>
                                </Link>


                                <Link href='/frequency' className="flex text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex text-2xl items-center gap-2">
                                        <RiCalendarCheckFill /><span className="hidden leading-none text-xl group-hover:flex delay-150 duration-600">Frequências</span>
                                    </button>
                                </Link>

                                <Link href='/assessments' className="flex text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex text-2xl items-center gap-2">
                                        <RiBarChartBoxFill /><span className="hidden  leading-none text-xl group-hover:flex delay-150 duration-600">Avaliações</span>
                                    </button>
                                </Link>

                                <Link href='/payments' className="flex  text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex  text-2xl items-center gap-2">
                                        <RiMoneyDollarCircleFill /><span className="hidden  leading-none text-xl group-hover:flex delay-150 duration-600">Financeiro</span>
                                    </button>
                                </Link>
                            </Sidebar>
                            <Container>
                                {children}
                            </Container>
                            <BottomBar />
                        {/* </GlobalProvider> */}
                    </ApolloProvider>
                </ProvidersWrapper>
            </body>
        </html>
    )
}