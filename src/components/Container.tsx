import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <div className="mx-auto w-full max-w-2xl px-4 lg:px-0">{children}</div>
}
