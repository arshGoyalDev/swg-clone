import "~/styles/globals.css";

import {Rubik} from 'next/font/google';
import { type Metadata } from "next";

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const rubik = Rubik({ weight: 'variable',
  subsets: ["latin"],
  style: ["normal"],
 })


const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${rubik.className}`}>
      <body>{children}</body>
    </html>
  );
}


export default RootLayout