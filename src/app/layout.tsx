import type { Metadata } from "next";
import { aquiline, magik, bluuNext, geistSans, geistMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | viniboscoa.dev",
    default: "viniboscoa.dev",
  },
  metadataBase: new URL("https://viniboscoa.dev"),
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const fontClasses = [
    geistMono,
    geistSans,
    aquiline,
    magik,
    bluuNext
  ]
    .map((font) => font.variable)
    .join(" ");
  
  return (
    <html lang="en">
      <body
        className={`${fontClasses} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
