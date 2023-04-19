'use client'
import { SessionProvider } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      {children}
      <ToastContainer />
    </SessionProvider>
  )
}