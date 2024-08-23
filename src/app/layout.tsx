import "~/styles/globals.css";

import { type Metadata } from "next";
import { Rubik } from "next/font/google";

import { Header, Footer } from "~/components";

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const rubik = Rubik({
  weight: "variable",
  subsets: ["latin"],
  style: ["normal"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${rubik.className}`}>
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
