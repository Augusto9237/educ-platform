"use client";
import { useGetSubscriberLoginQuery, GetSubscriberLoginDocument } from "graphql/api";
import { ReactNode, useEffect, useState } from "react";
import { useRequireAuth } from "../lib/useRequireAuth";
import { GlobalContext } from "./GlobalContext";

interface AuthProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: AuthProps) => {
    const session = useRequireAuth()
    const { data, loading } = useGetSubscriberLoginQuery({
        variables: {
            email: session?.user?.email
        },
    });
    return (
        <GlobalContext.Provider value={{
            user: data,
            loadingUser: loading,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}