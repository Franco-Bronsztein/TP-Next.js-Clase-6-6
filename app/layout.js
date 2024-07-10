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
      <body className={inter.className}>
      <nav>
            <ul className="NAVBAR">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/quienes-somos">Quienes Somos</Link>
                </li>
                <li>
                    <Link href="/reservas">Reservas</Link>
                </li>
                <li>
                    <Link href="/ayuda">Contacto</Link>
                </li>
            </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
