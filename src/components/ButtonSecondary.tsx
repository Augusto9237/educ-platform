import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}
export function ButtonSecondary({children} : ContainerProps) {
    return (
      <button className="flex w-full justify-center items-center rounded-2xl py-5 bg-buttonSecondaryColor-500 text-backgroundColor-900 hover:bg-buttonSecondaryColor-600">{children}</button>
    )
  }