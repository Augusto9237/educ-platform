import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}
export function Button({children} : ContainerProps) {
    return (
      <button className="flex w-full justify-center items-center rounded-2xl py-5 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">{children}</button>
    )
  }