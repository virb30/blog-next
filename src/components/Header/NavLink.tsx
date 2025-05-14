"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"
import { useMemo } from "react";

import styles from "./NavLink.module.css";

type NavLinkProps = {
  href: string,
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {

  const pathname = usePathname();

  const activeClass = useMemo(() => {
    return pathname === href || (pathname?.startsWith(href) && href !== "/")
      ? styles["active-link"]
      : "";
  }, [pathname, href]);

  return (
    <Link href={href} className={`hover:text-black dark:hover:text-white text-gray-700 dark:text-gray-300 inline-block relative py-0 px-3 h-20 leading-20 mx-1 ${styles["transition-color-2"]} ${activeClass}`}>
      {children}
    </Link>
  )
}