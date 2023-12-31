'use client'
import CustomLink from '@/components/Link'
import { useState } from 'react'

const headerNavLinks = [
  { href: '/activity/code', title: 'ActivityCode' },
  { href: '/activity/language', title: 'Languages' },
  { href: '/activity/os', title: 'OS' },
  { href: '/activity/ce', title: 'CodeEditor' },
  { href: '/activity/category', title: 'Category' },
]

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      <button
        type="button"
        className=" w-full text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 md:hidden"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        Menu
      </button>
      <div
        className={`fixed left-0 top-0 z-20 h-screen w-full transform duration-500 ease-in-out md:hidden  ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className=" h-screen bg-white backdrop-blur-xl  dark:bg-black">
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-5 mt-11 h-8 w-8 rounded"
              aria-label="Toggle Menu"
              onClick={onToggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <nav className="fixed mt-8 h-full">
            {headerNavLinks.map((link) => (
              <div key={link.title} className="px-12 py-4">
                <CustomLink
                  onClick={onToggleNav}
                  href={link.href}
                  className="text-2xl font-bold text-gray-900 dark:text-gray-100 "
                >
                  {link.title}
                </CustomLink>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileNav
