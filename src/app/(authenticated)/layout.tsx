"use client";
import { BottomBar } from '@/components/components/BottomBar';
import { Container } from '@/components/components/Container';
import { Header } from '@/components/components/Header';
import { Sidebar } from '@/components/components/Sidebar';
import { ApolloProvider } from '@apollo/client';

import { ReactNode } from 'react';
import { GlobalProvider } from '../context/GlobalProvider';
import '../globals.css';
import { Client } from '../lib/apollo';

interface RootLayoutProps {
    children: ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='pt-br'>
            <head />
            <body className='bg-backgroundColor-300'>
                <ApolloProvider client={Client}>
                    <GlobalProvider>
                        <Header />
                        <Sidebar />
                        <Container>
                            {children}
                        </Container>
                        <BottomBar />
                    </GlobalProvider>
                </ApolloProvider>
            </body>
        </html>
    )
}