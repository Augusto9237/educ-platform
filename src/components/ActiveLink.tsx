'use client';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface ActiveLinkProps {
    children: ReactNode;
    href: string
}


export function ActiveLink({ children, href }: ActiveLinkProps) {
    const router = useRouter()
    const path = usePathname()
    const style = clsx('flex flex-col items-center justify-center', path === href ? 'text-buttonColor-500' : ' text-textColor-100')

    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} className={style}>
            {children}
        </a>
    )
}
