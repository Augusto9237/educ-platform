'use client';
import {  GetSubscribersDataQuery, GetTeacherQuery } from "graphql/api";
import { createContext } from "react";


export interface GlobalContextProps {
    user: GetTeacherQuery| undefined;
    loadingUser: boolean;
    dataSubscribers: GetSubscribersDataQuery | undefined
}

export const AdminContext = createContext<GlobalContextProps>(null!);