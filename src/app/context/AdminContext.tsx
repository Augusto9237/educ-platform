'use client';
import {  GetTeacherQuery } from "graphql/api";
import { createContext } from "react";


export interface GlobalContextProps {
    user: GetTeacherQuery| undefined;
    loadingUser: boolean;
}

export const AdminContext = createContext<GlobalContextProps>(null!);