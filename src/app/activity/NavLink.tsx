'use client'

import { AnchorHTMLAttributes } from 'react'
import CustomLink from '@/components/Link'
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

  return (
    <CustomLink
      key={text}
      href={href}
      className={
        isActive
          ? 'hidden font-semibold text-black transition-all  hover:text-black  dark:text-white dark:hover:text-white sm:block sm:pr-3 md:inline-block ' +
            className
          : 'hidden font-medium text-gray-500 transition-all hover:text-black  dark:text-gray-400 dark:hover:text-white sm:block sm:pr-3 md:inline-block ' +
            className
      }
    >
      {text}
    </CustomLink>
  )
}
