import NavLink from './NavLink'
import { Suspense } from 'react'
import MobileNav from './MoNav'

const headerNavLinks = [
  { href: '/activity/code', title: 'ActivityCode' },
  { href: '/activity/language', title: 'Languages' },
  { href: '/activity/os', title: 'OS' },
  { href: '/activity/ce', title: 'CodeEditor' },
  { href: '/activity/category', title: 'Category' },
]

const Header = () => {
  return (
    <header className="top-0 mb-6 flex w-full items-center justify-between bg-white dark:bg-dark">
      <nav className="flex w-full items-center">
        <Suspense fallback={null}>
          {headerNavLinks.map((link) => (
            <NavLink key={link.title} href={link.href} text={link.title} className="sm:space-x-8" />
          ))}
        </Suspense>
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header
