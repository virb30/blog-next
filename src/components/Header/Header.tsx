"use client";

import Link from "next/link";
import "./Header.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Logo from "../Logo/Logo";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export default function Header() {

  const pathname = usePathname();

  const activeClass = useCallback((path: string) => {
    return pathname === path ? "active" : "";
  }, [pathname]);

  return (
    <header className="h-20 border-0 border-b border-solid border-gray-400 dark:border-gray-100">
      <div className="max-w-7xl h-20 my-0 mx-auto p-4 flex items-center justify-between">
        <Logo className="max-w-xs hidden md:block lg:block xl:block" />
        <nav className="md:ml-20 h-20">
          <Link href="/"
            className={`hover:text-black dark:hover:text-white inline-block relative py-0 px-3 h-20 leading-20 transition-color-2 mx-1 ${activeClass("/")}`}>
            Home
          </Link>
          <Link href="/about"
            className={`hover:text-black dark:hover:text-white inline-block relative py-0 px-3 h-20 leading-20 transition-color-2 mx-1 ${activeClass("/about")}`}>
            Sobre
          </Link>
          <Link href="/blog"
            className={`hover:text-black dark:hover:text-white inline-block relative py-0 px-3 h-20 leading-20 transition-color-2 mx-1 ${activeClass("/blog")}`}>
            Blog
          </Link>
        </nav>
        <div className="ml-auto p-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}


