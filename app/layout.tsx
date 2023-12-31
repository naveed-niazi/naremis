import ThemeButton from "@/components/ThemeChanger";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naveed Portfolio",
  description: "Portfolio of Naveed Abdullah created using next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        {children}
        <ThemeButton />
      </body>
    </html>
  );
}
