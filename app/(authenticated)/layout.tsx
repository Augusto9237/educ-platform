"use client";
import { ApolloProvider } from '@apollo/client';
import { BottomBar } from 'app/components/BottomBar';
import { Container } from 'app/components/Container';
import { Header } from 'app/components/Header';
import { Sidebar } from 'app/components/Sidebar';
import { GlobalProvider } from 'app/context/GlobalProvider';
import { Client } from 'app/lib/apollo';
import { getClient } from 'app/lib/getClient';
import { ReactNode } from 'react';
import '../globals.css';

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