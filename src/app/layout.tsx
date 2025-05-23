import type { Metadata } from "next";
import { aquiline, magik, bluuNext, roboto } from "./fonts";
import "./globals.css";
import { CookieConsentProvider } from "@/providers/CookieConsentContext";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/providers/ThemeContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SessionProvider } from "@/providers/SessionContext";

export const metadata: Metadata = {
  title: {
    template: "%s | viniboscoa.dev",
    default: "viniboscoa.dev",
  },
  metadataBase: new URL("https://viniboscoa.dev")
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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <body
        className={`${fontClasses} antialiased w-full`}
      >
        <SessionProvider>
          <CookieConsentProvider>
            <ThemeProvider>
              <Header />
              {children}
              <CookieConsent />
            </ThemeProvider>
          </CookieConsentProvider>
        </SessionProvider>
      </body>
    </html >
  );
}
