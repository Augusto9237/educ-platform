'use client';
import { ApolloQueryResult } from "@apollo/client";
import { Exact, GetAssessmentsByClassQuery, GetClassByIdQuery, GetClassesQuery, GetFrequenciesClassByIdQuery, GetSubscribersDataQuery, GetTeacherQuery, InputMaybe } from "graphql/api";
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
    idClasses: {id: string;};
    setIdClasses: Dispatch<SetStateAction<{id: string;}>>
    frequencies: GetFrequenciesClassByIdQuery | undefined;
    loadingFequencies: boolean;
    reloadFrequencies: (variables?: Partial<Exact<{
        idClass?: InputMaybe<string> | undefined;
    }>> | undefined) => Promise<ApolloQueryResult<GetFrequenciesClassByIdQuery>>;
    assessmentsByClass: GetAssessmentsByClassQuery | undefined;
    assessmentsLodingByClass: boolean;
    reloadAssesments: (variables?: Partial<Exact<{
        id?: InputMaybe<string> | undefined;
    }>> | undefined) => Promise<ApolloQueryResult<GetAssessmentsByClassQuery>>;
    classById: GetClassByIdQuery | undefined
}

export const AdminContext = createContext<GlobalContextProps>(null!);