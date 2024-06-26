import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="/..."></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
