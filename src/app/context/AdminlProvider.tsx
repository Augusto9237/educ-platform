"use client";
import { useGetSubscriberLoginQuery, GetSubscriberLoginDocument, useGetTeacherQuery } from "graphql/api";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { AdminContext } from "./AdminContext";

interface AuthProps {
    children: ReactNode;
}

export const AdminProvider = ({ children }: AuthProps) => {
    const {data: session} = useSession();
    const { data, loading } = useGetTeacherQuery({
        variables: {
            email: session?.user?.email
        },
    });

    // if(data?.teacher?.__typename !== 'Teacher'){
    //     redirect('/')
    // }
    return (
        <AdminContext.Provider value={{
            user: data,
            loadingUser: loading,
        }}>
            {children}
        </AdminContext.Provider>
    )
}