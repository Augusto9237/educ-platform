import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}
export function Container({children} : ContainerProps) {
    return (
      <main className="flex w-full  max-w-[1160px] max-h-screen overflow-y-auto max-sm:p-4 text-textColor-500">{children}</main>
    )
  }