import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}
export function Container({children} : ContainerProps) {
    return (
      <main className="flex w-full  max-w-[1160px] h-screen text-textColor-500">{children}</main>
    )
  }