import ThemeSwitch from './ThemeSwitch'
import { headerNavLinks } from '@/data/NavLinks'
import NavLink from './NavLink'
import MobileNav from './MoNav'
import { Suspense } from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between bg-[#F9F6EE] py-4 dark:bg-[#111010]">
      <nav className="flex w-full items-center justify-between">
        <Suspense fallback={null}>
          {headerNavLinks.map((link) => (
            <NavLink
              key={link.title}
              href={link.href}
              text={link.title}
              className="text-lg sm:space-x-8"
            />
          ))}
        </Suspense>
        <ThemeSwitch />
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header
