'use client'

import { AnchorHTMLAttributes } from 'react'
import CustomLink from './Link'
import { usePathname } from 'next/navigation'

export default function NavLink({
  href,
  text,
  className,
}: {
  href: string
  text: string
  className?: string
}) {
  const isActive = usePathname() === href
  const baseClassName = 'hidden rounded-lg transition-all sm:block'

  const activeStyles =
    'font-semibold text-black hover:text-black dark:text-white dark:hover:text-white'
  const inactiveStyles =
    'font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'

  const combinedClassName = `${baseClassName} ${isActive ? activeStyles : inactiveStyles} ${
    className || ''
  }`

  return (
    <CustomLink key={text} href={href} className={combinedClassName}>
      {text}
    </CustomLink>
  )
}
