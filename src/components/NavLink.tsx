"use client"

import { AnchorHTMLAttributes } from "react";
import CustomLink from "./Link";
import { usePathname } from 'next/navigation'

export default function NavLink({ href, text, className }: { href: string, text: string, className?: string } ) {
    const isActive = usePathname() === href;

    return (
        <CustomLink
            key={text}
            href={href}
            className={
                isActive
                    ? "rounded-lg p-1 font-semibold text-black transition-all hover:scale-125 hover:bg-gray-200 hover:text-black dark:text-white  dark:hover:bg-gray-800 dark:hover:text-white sm:px-3 sm:py-2 md:inline-block hidden sm:block" + className
                    : "rounded-lg p-1 font-medium text-gray-500 transition-all hover:scale-125 hover:bg-gray-200 hover:text-black dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-white sm:px-3 sm:py-2 md:inline-block hidden sm:block" + className
            }
        >
            {text}
        </CustomLink>
    );
}