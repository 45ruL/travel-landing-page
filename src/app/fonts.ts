import { Urbanist } from "next/font/google";
import LocalFont from "next/font/local";

export const galda = LocalFont({
  src: [
    {
      path: "../fonts/gilda-display/GildaDisplay-Regular.ttf",
    },
  ],
  variable: "--font-galda",
});

export const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
