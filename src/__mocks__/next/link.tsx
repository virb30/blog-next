import { LinkProps } from "next/link";
import React from "react";

type MockLinkProps = Omit<LinkProps, "href"> & {
  href: string;
  children?: React.ReactNode;
}

const MockLink = ({ href, children, onClick, ...rest }: MockLinkProps) => {

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
};

export default MockLink;