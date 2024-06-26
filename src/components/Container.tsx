import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}
export function Container({ children }: ContainerProps) {
  return (
    <div className="flex w-full max-w-[1200px] max-h-screen m-auto overflow-y-auto max-sm:p-4 text-textColor-500 max-xl:p-4 xl:py-4">{children}</div>
  )
}