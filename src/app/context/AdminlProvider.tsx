"use client";
import { useGetTeacherQuery, useGetSubscribersDataQuery, useGetClassesQuery } from "graphql/api";
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
    const { data: subscribers, loading: loadingSubscribers, refetch: reloadSubscribers } = useGetSubscribersDataQuery()
    const { data: classes, loading: loadingClasses, refetch: reloadClasses } = useGetClassesQuery({
        variables: {
            id: user?.teacher?.id
        }
    })

    return (
        <AdminContext.Provider value={{
            user,
            loadingUser,
            subscribers,
            loadingSubscribers,
            reloadSubscribers,
            classes,
            loadingClasses,
            reloadClasses
        }}>
            {children}
        </AdminContext.Provider>
    )
}