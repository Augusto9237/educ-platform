import clsx from 'clsx';
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface ActiveLinkProps {
    children: ReactNode;
    href: string
}

export function ActiveLink({ children, href }: ActiveLinkProps) {
    const router = useRouter()
    const style = clsx('flex flex-col items-center ', router.asPath === href ? 'text-buttonColor-500' : ' text-textColor-100')

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
