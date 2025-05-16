"use client";

import clsx from "clsx";
import { useMemo } from "react";

interface PageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function PageButton({ active, disabled, children, ...props }: PageButtonProps) {

  const buttonClasses = useMemo(() => {
    return clsx({
      'opacity-40 cursor-not-allowed ': disabled,
      'bg-indigo-500 dark:bg-indigo-500 cursor-default text-gray-50': active,
      'hover:opacity-80 cursor-pointer': !disabled && !active,
    })
  }, [active, disabled]);


  return (
    <button {...props}
      disabled={!!disabled || !!active}
      aria-current={active}
      className={`h-8 w-8 flex justify-center items-center border border-gray-400 bg-gray-300 dark:bg-gray-600 ${buttonClasses}`}
    >
      {children}
    </button>
  );
}