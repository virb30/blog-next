import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const aquiline = localFont({
  src: '../fonts/Aquiline/Aquiline.ttf.woff',
  variable: '--font-aquiline',
  display: 'swap'
});

export const bluuNext = localFont({
  src: [
    {
      path: '../fonts/BluuNext/BluuNextBold.woff',
      style: 'normal',
      weight: '500'
    },
    {
      path: '../fonts/BluuNext/BluuNextBolditalic.woff',
      style: 'italic',
      weight: '500'
    }
  ],
  variable: '--font-bluu-next',
  display: 'swap'
});

export const magik = localFont({
  src: '../fonts/Magik/Magik.woff',
  variable: '--font-magik',
  display: 'swap'
});

export const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
