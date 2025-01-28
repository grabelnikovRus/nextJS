import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { AppContextProveder, Header } from "@/components";

const openSans = Open_Sans({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Block about next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={openSans.className}>
        <AppContextProveder>
          <Header />
          {children}
        </AppContextProveder>
      </body>
    </html>
  );
}
