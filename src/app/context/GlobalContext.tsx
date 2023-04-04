'use client';
import { GetSubscriberLoginQuery, GetSubscriberLoginQueryVariables } from "graphql/api";
import { createContext } from "react";


export interface GlobalContextProps {
    user: GetSubscriberLoginQuery| undefined;
    loadingUser: boolean;
}

export const GlobalContext = createContext<GlobalContextProps>(null!);