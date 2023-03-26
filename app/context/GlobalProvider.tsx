"use client";
import { useGetSubscriberLoginQuery, GetSubscriberLoginDocument } from "graphql/api";
import { ReactNode, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

interface AuthProps {
    children: ReactNode;
}


export const GlobalProvider = ({ children }: AuthProps) => {
   
    const { data, loading } = useGetSubscriberLoginQuery({
        variables: {
            email: 'augusto.souza8330@gmail.com'
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