'use client';
import { ApolloQueryResult } from "@apollo/client";
import { Exact, GetClassByIdQuery, GetClassesQuery, GetSubscribersDataQuery, GetTeacherQuery, InputMaybe } from "graphql/api";
import { createContext, Dispatch, SetStateAction } from "react";

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
    }>> | undefined) => Promise<ApolloQueryResult<GetClassesQuery>>;
    idClasses: { id: string; };
    setIdClasses: Dispatch<SetStateAction<{ id: string; }>>;
    classById: GetClassByIdQuery | undefined;
    loadingClassesById: boolean;
    reloadClassById: (variables?: Partial<Exact<{
        id?: InputMaybe<string> | undefined;
    }>> | undefined) => Promise<ApolloQueryResult<GetClassByIdQuery>>
     
}

export const AdminContext = createContext<GlobalContextProps>(null!);