'use client';
import { ApolloQueryResult } from "@apollo/client";
import { Exact, GetClassesQuery, GetSubscribersDataQuery, GetTeacherQuery, InputMaybe } from "graphql/api";
import { createContext } from "react";

export interface GlobalContextProps {
    user: GetTeacherQuery | undefined;
    loadingUser: boolean;
    subscribers: GetSubscribersDataQuery | undefined;
    loadingSubscribers: boolean;
    reloadSubscribers: (variables?: Partial<Exact<{
        [key: string]: never;
    }>> | undefined) => Promise<ApolloQueryResult<GetSubscribersDataQuery>>;
    classes: GetClassesQuery | undefined;
    loadingClasses: boolean;
    reloadClasses: (variables?: Partial<Exact<{
        [key: string]: never;
    }>> | undefined) => Promise<ApolloQueryResult<GetClassesQuery>>
}

export const AdminContext = createContext<GlobalContextProps>(null!);