import type { Metadata } from "next";
import "./globals.css";
import { galda, urbanist } from "./fonts";

export const metadata: Metadata = {
  title: "Travel",
  description: "Make your trip unforgettable",
  applicationName: "Travel App",
  authors: [{ name: "As" }],
  keywords: ["travel", "indonesia", "destination"],
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/location.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${galda.variable} ${urbanist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
