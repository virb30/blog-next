"use client";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Logo from "../Logo/Logo";
import NavBar from "./NavBar";

export default function Header() {

  const navigationLinks = [
    {
      href: "/",
      label: "Home"
    },
    {
      href: "/about",
      label: "Sobre",
    },
    {
      href: "/blog",
      label: "Blog"
    }
  ];


  return (
    <header className="h-20 border-0 border-b border-solid border-gray-400 dark:border-gray-100">
      <div className="max-w-7xl h-20 my-0 mx-auto p-4 flex items-center justify-between">
        <Logo className="max-w-xs hidden md:block lg:block xl:block" />
        <NavBar links={navigationLinks} />
        <div className="ml-auto p-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}


