import type { Metadata } from "next";
import { aquiline, magik, bluuNext, roboto } from "./fonts";
import "./globals.css";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";

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
    roboto,
    aquiline,
    magik,
    bluuNext
  ]
    .map((font) => font.variable)
    .join(" ");

  return (
    <html lang="en">
      <CookieConsentProvider>
        <body
          className={`${fontClasses} antialiased w-full`}
        >
          <ThemeProvider>
            <Header />
            {children}
            <CookieConsent />
          </ThemeProvider>
        </body>
      </CookieConsentProvider>
    </html >
  );
}
