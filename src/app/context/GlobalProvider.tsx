"use client";
import { useGetSubscriberLoginQuery, GetSubscriberLoginDocument } from "graphql/api";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useRequireAuth } from "../lib/useRequireAuth";
import { GlobalContext } from "./GlobalContext";

interface AuthProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: AuthProps) => {
    const {data: session} = useSession();
    
    const { data, loading } = useGetSubscriberLoginQuery({
        variables: {
            email: session?.user?.email
        },
    });

    if(data?.values?.__typename !== 'Subscriber') {
        redirect('/')
    }
    return (
        <GlobalContext.Provider value={{
            user: data,
            loadingUser: loading,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}