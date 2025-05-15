"use client";

import { useTheme } from "@/providers/ThemeContext";
import { faLightbulb as farLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as fasLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";

export default function ThemeSwitcher() {

  const { theme, toggleTheme } = useTheme();

  const icon = useMemo(() => {
    return theme === "dark" ? farLightbulb : fasLightbulb;
  }, [theme])

  return (
    <button type="button" className="bg-transparent border-none text-indigo-500 dark:text-indigo-400 text-3xl"
      onClick={toggleTheme} >
      <FontAwesomeIcon icon={icon} size="2x" />
    </button >
  )
}