"use client";
import { useGetTeacherQuery, useGetSubscribersDataQuery, useGetClassesQuery, useGetFrequenciesClassQuery, useGetAssessmentsByClassQuery, useGetClassByIdQuery } from "graphql/api";
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
    const { data: subscribers, loading: loadingSubscribers, refetch: reloadSubscribers } = useGetSubscribersDataQuery();
    const { data: classes, loading: loadingClasses, refetch: reloadClasses } = useGetClassesQuery();
    const [idClasses, setIdClasses] = useState({ id: '' })
    const { data: assessmentsByClass, loading: assessmentsLodingByClass, refetch: reloadAssesments } = useGetAssessmentsByClassQuery({
        variables: {
            id: idClasses.id
        }
    });
    const { data: classById, loading: loadingClassesById, refetch: reloadClassById } = useGetClassByIdQuery({
        variables: {
            id: idClasses.id
        }
    });
    

    return (
        <AdminContext.Provider value={{
            user,
            loadingUser,
            subscribers,
            loadingSubscribers,
            reloadSubscribers,
            classes,
            loadingClasses,
            reloadClasses,
            idClasses,
            setIdClasses,
            assessmentsByClass,
            assessmentsLodingByClass,
            reloadAssesments,
            classById,
            loadingClassesById,
            reloadClassById 
        }}>
            {children}
        </AdminContext.Provider>
    )
}