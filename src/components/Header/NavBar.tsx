"use client";

import NavLink from "./NavLink";

type Link = {
  href: string;
  label: string;
}

interface NavBarProps {
  links: Link[]
}

export default function NavBar({ links }: NavBarProps) {
  return (
    <nav className="md:ml-20 h-20">
      {links.map((link, index) => (
        <NavLink href={link.href} key={index}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}