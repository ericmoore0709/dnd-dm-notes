import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DM Notes",
  description: "Emergency Tools for the Fraughtful Dungeon Master",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="pt-2 pb-1 bg-red-900 border-b">
          <nav className="flex items-baseline">
            <div className="text-xl mx-2 hover:text-black"><Link href={"/"}>DM Notes</Link></div>
            <ul className="mx-2 my-0 text-sm">
              <li className="mr-5 hover:underline inline"><Link href={"/stat-blocks/characters"}>Characters</Link></li>
              <li className="mr-5 hover:underline inline"><Link href={"/stat-blocks/monsters"}>Monsters</Link></li>
              <li className="mr-5 hover:underline inline"><Link href={"/weapons"}>Weapons</Link></li>
            </ul>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
