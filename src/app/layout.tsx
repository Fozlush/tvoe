import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import style from './layout.module.scss'
import Menu from "@/components/layoyt/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tvoe test by F",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <main className={style.main}>
          <Menu/>
          <section className={style.page}>{children}</section>
        </main>
      </body>
    </html>
  );
}
