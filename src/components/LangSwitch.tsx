'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from 'i18n-config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="mb-9 flex items-center justify-center space-x-2 text-sm text-black dark:text-gray-400">
      {i18n.locales.map((locale, i) => {
        return (
          <span key={locale}>
            <Link href={redirectedPathName(locale)}>{locale}</Link>{' '}
            {i < locale.length - 1 ? '•' : null}
          </span>
        )
      })}
    </div>
  )
}
