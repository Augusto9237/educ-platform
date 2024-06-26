"use client";
import { BottomBar } from '@/components/components/BottomBar';
import { Container } from '@/components/components/Container';
import { HeaderAdmin } from '@/components/components/HeaderAdmin';
import { Sidebar } from '@/components/components/Sidebar';
import { ApolloProvider } from '@apollo/client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { HiUsers } from 'react-icons/hi';
import { RiHome3Fill, RiCalendarCheckFill, RiBarChartBoxFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FaUserGraduate } from "react-icons/fa";

import '../../globals.css';

import { ActiveLink } from '@/components/components/ActiveLink';
import { AdminProvider } from '../../context/AdminlProvider';
import { client } from '../../lib/apollo';
import ProvidersWrapper from '../../ProvidersWrapper';

interface RootLayoutProps {
    children: ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='pt-br'>
            <head />
            <body className='bg-backgroundColor-300'>
                <ProvidersWrapper>
                    <ApolloProvider client={client}>
                        <AdminProvider>
                            <HeaderAdmin />
                            <Sidebar>
                                <Link href='/dashboard' className="flex  text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex flex-row text-2xl items-center gap-2">
                                        <RiHome3Fill /><span className="hidden leading-none text-xl group-hover:flex delay-200 duration-600">Dashboard</span>
                                    </button>
                                </Link>

                                <Link href='/subscribers' className="flex  text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex  text-xl items-center gap-2">
                                        <FaUserGraduate className="mx-[2px]" /><span className="hidden leading-none text-xl group-hover:flex delay-150 duration-600"> Alunos</span>
                                    </button>
                                </Link>

                                <Link href='/classes' className="flex  text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex  text-2xl items-center gap-2">
                                        <HiUsers /><span className="hidden  leading-none text-xl group-hover:flex delay-150 duration-600">Turmas</span>
                                    </button>
                                </Link>


                                <Link href='/frequencies' className="flex text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex text-2xl items-center gap-2">
                                        <RiCalendarCheckFill /><span className="hidden leading-none text-xl group-hover:flex delay-150 duration-600">Frequências</span>
                                    </button>
                                </Link>

                                <Link href='/grades' className="flex text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex text-2xl items-center gap-2">
                                        <RiBarChartBoxFill /><span className="hidden  leading-none text-xl group-hover:flex delay-150 duration-600">Avaliações</span>
                                    </button>
                                </Link>

                                <Link href='/financial' className="flex  text-textSecondaryColor-600 hover:text-backgroundColor-500 group-hover:items-start pl-7">
                                    <button className="flex  text-2xl items-center gap-2">
                                        <RiMoneyDollarCircleFill /><span className="hidden  leading-none text-xl group-hover:flex delay-150 duration-600">Financeiro</span>
                                    </button>
                                </Link>
                            </Sidebar>
                            <Container>
                                {children}
                            </Container>
                            <BottomBar>
                                <ActiveLink href='/dashboard'>
                                    <button className="flex  text-2xl items-center">
                                        <RiHome3Fill />
                                    </button>
                                </ActiveLink>
                                <ActiveLink href='/subscribers'>
                                    <button className="flex text-xl items-center">
                                        <FaUserGraduate />
                                    </button>
                                </ActiveLink>
                                <ActiveLink href='/classes'>
                                    <button className="flex  text-2xl items-center">
                                        <HiUsers />
                                    </button>
                                </ActiveLink>
                                <ActiveLink href='/frequencies'>
                                    <button className="flex  text-2xl items-center">
                                        <RiCalendarCheckFill />
                                    </button>
                                </ActiveLink>
                                <ActiveLink href='/grades'>
                                    <button className="flex  text-2xl items-center">
                                        <RiBarChartBoxFill />
                                    </button>
                                </ActiveLink>
                                <ActiveLink href='/financial'>
                                    <button className="flex  text-2xl items-center">
                                        <RiMoneyDollarCircleFill />
                                    </button>
                                </ActiveLink>
                            </BottomBar>
                        </AdminProvider>
                    </ApolloProvider>
                </ProvidersWrapper>
            </body>
        </html >
    )
}