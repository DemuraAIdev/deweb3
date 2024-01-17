import ThemeSwitch from './ThemeSwitch'
import { headerNavLinks } from '@/data/NavLinks'
import NavLink from './NavLink'
import MobileNav from './MoNav'
import { Suspense } from 'react'

const Header = () => {
  return (
    <header className="top-0 z-10 bg-white py-5 dark:bg-dark">
      <nav className="flex w-full items-center justify-between">
        <Suspense fallback={null}>
          {headerNavLinks.map((link) => (
            <NavLink key={link.title} href={link.href} text={link.title} className="sm:space-x-8" />
          ))}
        </Suspense>
        <ThemeSwitch />
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header
