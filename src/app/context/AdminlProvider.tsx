"use client";
import { useGetTeacherQuery, useGetSubscribersDataQuery } from "graphql/api";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { AdminContext } from "./AdminContext";

interface AuthProps {
    children: ReactNode;
}

export const AdminProvider = ({ children }: AuthProps) => {
    const { data: session } = useSession();
    const { data: user, loading: loadingUser } = useGetTeacherQuery({
            variables: {
                email: session?.user?.email
            },
        });
    const { data, loading } = useGetSubscribersDataQuery()

    return (
        <AdminContext.Provider value={{
            user: user,
            loadingUser: loadingUser,
            dataSubscribers: data,
        }}>
            {children}
        </AdminContext.Provider>
    )
}