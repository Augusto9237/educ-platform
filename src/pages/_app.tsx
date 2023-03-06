import '@/components/styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app'
import { GlobalProvider } from '../context/GlobalProvider';
import { Client } from '../lib/apollo';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={Client}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ApolloProvider>
  )
}
