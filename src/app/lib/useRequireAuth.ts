import { useSession } from "next-auth/react";
import { redirect} from 'next/navigation'


export function useRequireAuth() {
    const {data: session} = useSession();

        if(!session && typeof session != 'undefined'){
            redirect("/");
        }
    
    
    return session;
}