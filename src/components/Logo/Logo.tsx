"use client";

import { useTheme } from "@/providers/ThemeContext";
import React, { useMemo } from "react";

export const logoTheme = {
  dark: {
    letters: '#A5B4FC',
    slash: '#D1D5DB',
    upperBracket: "#4F46E5",
    lowerBracket: "#A5B4FC",
  },
  light: {
    letters: '#4F46E5',
    slash: '#6B7280',
    upperBracket: "#4F46E5",
    lowerBracket: "#A5B4FC",
  }
}

export default function Logo({ ...props }) {

  const { theme } = useTheme();

  const logoColors = useMemo(() => {
    return theme === "light" ? logoTheme.light : logoTheme.dark
  }, [theme]);

  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.96 26.36" {...props} role="img" aria-label="logo">
    <title>logo</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path fill={logoColors.letters}
          d="M30.73,23.54,26.34,11.61l-1.57-.24V9h7.05v2.35l-1.53.27,2.19,6.6.34,1.13h.08l.37-1.13,2.41-6.58-1.79-.29V9h7v2.37l-1.61.27-4.59,11.9Z"
          transform="translate(-0.25 -2.41)" />
        <path fill={logoColors.letters}
          d="M42,23.54V21.19l1.89-.4v-9l-2.1-.4V9h6V20.79l1.88.4v2.35ZM43.72,5.93V2.58h4.05V5.93Z"
          transform="translate(-0.25 -2.41)" />
        <path fill={logoColors.letters}
          d="M50.81,23.54V21.19l1.88-.4v-9l-2.08-.4V9h5.74l.17,2.09a5.3,5.3,0,0,1,1.79-1.74,4.84,4.84,0,0,1,2.44-.62,4.3,4.3,0,0,1,3.39,1.39,6.41,6.41,0,0,1,1.22,4.34v6.33l1.88.4v2.35H59.75V21.19l1.68-.4V14.47a3,3,0,0,0-.58-2.07,2.26,2.26,0,0,0-1.72-.62,2.86,2.86,0,0,0-1.47.36,2.9,2.9,0,0,0-1,1v7.63l1.58.4v2.35Z"
          transform="translate(-0.25 -2.41)" />
        <path fill={logoColors.letters}
          d="M68.4,23.54V21.19l1.9-.4v-9l-2.1-.4V9h6V20.79l1.88.4v2.35ZM70.16,5.93V2.58h4.06V5.93Z"
          transform="translate(-0.25 -2.41)" />
        <path fill={logoColors.letters}
          d="M85.92,23.82a4.64,4.64,0,0,1-2.31-.53A4.49,4.49,0,0,1,82,21.76l-.28,1.78H78.34V5.35l-2.08-.41V2.58h6v8A4.48,4.48,0,0,1,83.81,9.2,4.66,4.66,0,0,1,86,8.73a4.77,4.77,0,0,1,3,.95,5.84,5.84,0,0,1,1.87,2.67,11.49,11.49,0,0,1,.65,4v.29a10.08,10.08,0,0,1-.65,3.77,5.44,5.44,0,0,1-1.88,2.49A5,5,0,0,1,85.92,23.82Zm-1.19-3.05a2.34,2.34,0,0,0,2.16-1.06,5.82,5.82,0,0,0,.66-3v-.29a9.25,9.25,0,0,0-.29-2.45,3.33,3.33,0,0,0-.9-1.59,2.25,2.25,0,0,0-1.59-.57,2.68,2.68,0,0,0-1.52.42,3,3,0,0,0-1,1.13V19.4a2.79,2.79,0,0,0,1,1A2.86,2.86,0,0,0,84.73,20.77Z"
          transform="translate(-0.25 -2.41)" />
        <path fill={logoColors.letters}
          d="M100.38,23.82a6.93,6.93,0,0,1-3.69-.94,6.12,6.12,0,0,1-2.37-2.61,8.58,8.58,0,0,1-.82-3.85v-.28a8.6,8.6,0,0,1,.82-3.84,6.24,6.24,0,0,1,2.36-2.62,7.62,7.62,0,0,1,7.37,0,6.22,6.22,0,0,1,2.35,2.62,8.54,8.54,0,0,1,.82,3.84v.28a8.58,8.58,0,0,1-.82,3.85,6.14,6.14,0,0,1-2.35,2.61A6.84,6.84,0,0,1,100.38,23.82Zm0-3a2.47,2.47,0,0,0,1.67-.55,3.16,3.16,0,0,0,1-1.53,7.64,7.64,0,0,0,.31-2.31v-.28a7.53,7.53,0,0,0-.31-2.28,3.13,3.13,0,0,0-1-1.54,2.46,2.46,0,0,0-1.69-.56,2.44,2.44,0,0,0-1.66.56,3.13,3.13,0,0,0-1,1.54,7.87,7.87,0,0,0-.3,2.28v.28a8,8,0,0,0,.3,2.31,3,3,0,0,0,1,1.54A2.58,2.58,0,0,0,100.38,20.81Z"
          transform="translate(-0.25 -2.41)" />
        <path fill={logoColors.letters}
          d="M115.2,23.82a13.34,13.34,0,0,1-5.72-1.19l0-4.11h2.73l.52,2.09a4.4,4.4,0,0,0,1,.37,5.19,5.19,0,0,0,1.24.13,3,3,0,0,0,1.86-.43,1.32,1.32,0,0,0,.54-1.07,1.33,1.33,0,0,0-.58-1.07,5.85,5.85,0,0,0-2.27-.82,8,8,0,0,1-3.81-1.66,3.78,3.78,0,0,1-1.22-2.89,4.13,4.13,0,0,1,.61-2.21,4.29,4.29,0,0,1,1.87-1.59,7.34,7.34,0,0,1,3.22-.61,13.34,13.34,0,0,1,3,.32,9,9,0,0,1,2.29.82l0,4h-2.71L117.35,12a2.48,2.48,0,0,0-.85-.4,4.23,4.23,0,0,0-1.11-.13,2.54,2.54,0,0,0-1.58.41,1.3,1.3,0,0,0-.56,1.08,1.35,1.35,0,0,0,.2.7,1.87,1.87,0,0,0,.77.6,8.3,8.3,0,0,0,1.68.54,9.69,9.69,0,0,1,3.94,1.64,3.57,3.57,0,0,1,1.23,2.89,4.11,4.11,0,0,1-1.47,3.28A6.68,6.68,0,0,1,115.2,23.82Z"
          transform="translate(-0.25 -2.41)" />
        <path fill={logoColors.letters}
          d="M129.7,23.82a6.73,6.73,0,0,1-3.62-.94,6.09,6.09,0,0,1-2.34-2.6,8.38,8.38,0,0,1-.82-3.79v-.41a8.27,8.27,0,0,1,.83-3.8,6.36,6.36,0,0,1,2.35-2.6,6.61,6.61,0,0,1,3.57-.95,8.51,8.51,0,0,1,3.39.62,8.28,8.28,0,0,1,2.3,1.41l0,4.17h-3l-.53-2.59a2.42,2.42,0,0,0-.82-.53,2.75,2.75,0,0,0-1-.2,2.86,2.86,0,0,0-1.78.54,3.18,3.18,0,0,0-1.05,1.53,7.33,7.33,0,0,0-.35,2.4v.41a6.58,6.58,0,0,0,.39,2.45,3.16,3.16,0,0,0,1,1.42,2.52,2.52,0,0,0,1.46.45,2.46,2.46,0,0,0,1.66-.54,2.73,2.73,0,0,0,.85-1.54h3.36l0,.08a7.08,7.08,0,0,1-.91,2.68,4.49,4.49,0,0,1-1.9,1.73A7.13,7.13,0,0,1,129.7,23.82Z"
          transform="translate(-0.25 -2.41)" />
        <path fill={logoColors.letters}
          d="M144.33,23.82a6.93,6.93,0,0,1-3.69-.94,6.12,6.12,0,0,1-2.37-2.61,8.72,8.72,0,0,1-.81-3.85v-.28a8.74,8.74,0,0,1,.81-3.84,6.31,6.31,0,0,1,2.36-2.62,7.62,7.62,0,0,1,7.37,0,6.16,6.16,0,0,1,2.35,2.62,8.54,8.54,0,0,1,.82,3.84v.28a8.58,8.58,0,0,1-.82,3.85A6.08,6.08,0,0,1,148,22.88,6.84,6.84,0,0,1,144.33,23.82Zm0-3a2.46,2.46,0,0,0,1.67-.55,3.25,3.25,0,0,0,1-1.53,8,8,0,0,0,.3-2.31v-.28a7.87,7.87,0,0,0-.3-2.28,3.22,3.22,0,0,0-1-1.54,2.44,2.44,0,0,0-1.68-.56,2.46,2.46,0,0,0-1.67.56,3.13,3.13,0,0,0-1,1.54,7.87,7.87,0,0,0-.3,2.28v.28a8,8,0,0,0,.3,2.31,3,3,0,0,0,1,1.54A2.58,2.58,0,0,0,144.33,20.81Z"
          transform="translate(-0.25 -2.41)" />
        <path fill={logoColors.letters}
          d="M157.79,23.82a4.87,4.87,0,0,1-3.44-1.16,4,4,0,0,1-1.28-3.16,4.05,4.05,0,0,1,.74-2.41A4.9,4.9,0,0,1,156,15.47a9.47,9.47,0,0,1,3.59-.59h1.93V13.8a2.2,2.2,0,0,0-2.45-2.35,3.91,3.91,0,0,0-1.13.15,3.49,3.49,0,0,0-.91.44L156.74,14h-2.82l-.06-3.77a12.4,12.4,0,0,1,2.47-1,10.22,10.22,0,0,1,3-.41,7.05,7.05,0,0,1,4.5,1.33,4.56,4.56,0,0,1,1.65,3.78v6c0,.2,0,.4,0,.59a3.43,3.43,0,0,0,0,.56l1.52.21v2.35h-4.86c-.1-.25-.2-.52-.3-.8a4.68,4.68,0,0,1-.21-.86A5.54,5.54,0,0,1,160,23.29,4.4,4.4,0,0,1,157.79,23.82Zm1-2.9a3.38,3.38,0,0,0,1.56-.37,2.84,2.84,0,0,0,1.15-1v-2.3H159.6a2.9,2.9,0,0,0-2,.59A1.86,1.86,0,0,0,157,19.3a1.48,1.48,0,0,0,.49,1.2A2,2,0,0,0,158.83,20.92Z"
          transform="translate(-0.25 -2.41)" />
        <polygon fill={logoColors.lowerBracket} points="20 18.18 20 25.09 0 16.56 0 16.55 8.09 13.1 8.1 13.1 20 18.18" />
        <polygon fill={logoColors.upperBracket} points="20 1.09 20 8.01 8.1 13.09 8.09 13.1 0 9.64 0 9.63 20 1.09" />
        <polygon fill={logoColors.upperBracket} points="0 9.64 8.09 13.1 0 16.55 0 9.64" />
        <polygon fill={logoColors.lowerBracket}
          points="203.96 9.64 203.96 16.56 183.96 25.09 183.96 18.18 195.86 13.1 203.96 9.64" />
        <polygon fill={logoColors.upperBracket}
          points="203.96 9.63 203.96 16.55 195.86 13.09 183.96 8.01 183.96 1.09 203.96 9.63" />
        <polygon fill={logoColors.slash} points="182.52 0.2 173.68 26.32 169.58 26.36 175.92 8.64 178.94 0 182.52 0.2" />
      </g>
    </g>
  </svg>)
}