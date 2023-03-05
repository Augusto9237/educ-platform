import '@/components/styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app'
import { Client } from '../lib/apollo';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={Client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
