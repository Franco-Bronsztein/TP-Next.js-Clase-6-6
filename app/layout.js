import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FoodSave",
  description: "The best Food APP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/ayuda"
          >
            Ayuda
          </Link>
        </li>
      </ul>
    </nav>
    </html>
  );
}
