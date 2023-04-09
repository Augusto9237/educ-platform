import { useSession } from "next-auth/react";
import { redirect, useRouter} from 'next/navigation'
import { useEffect } from "react";

export function useRequireAuth() {
    const {data: session} = useSession();

    const router = useRouter();

    useEffect(() => {
        if(!session && typeof session != 'undefined'){
            redirect("/");
        }
    }, [session])
    
    return session;
}