import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "@/app/components/(navigation)/header/Header";
import Footer from "@/app/components/(navigation)/footer/Footer";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "The Best Movies",
  description: "Popular Movies and TV Shows online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
          <div className={styles.page}>
            <Header/>
            {children}
            <Footer/>
          </div>
      </body>
      </html>
  );
}
