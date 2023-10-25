import ThemeSwitch from "./ThemeSwitch"
import { headerNavLinks } from "@/data/NavLinks"
import NavLink from "./NavLink";
import MobileNav from "./MoNav"
import { Suspense } from "react";

const Header = () => {
    return (
        <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-white bg-opacity-30 py-4 backdrop-blur-lg backdrop-saturate-150 backdrop-filter dark:bg-[#111010] dark:bg-opacity-30">
            <nav className="mx-auto flex w-full max-w-md items-center justify-between px-4 sm:px-4 sm:py-2 md:max-w-2xl md:px-0 xl:max-w-2xl xl:px-0">
                <div className="hidden text-lg sm:block sm:space-x-8">
                    <Suspense fallback={null}>
                        {headerNavLinks.map((link) => (
                            <NavLink key={link.title} href={link.href} text={link.title} />
                        ))}
                    </Suspense>
                </div>
                <ThemeSwitch />
                <MobileNav />
            </nav>
        </header>

    )
}

export default Header