import type { Metadata } from "next";

import "./globals.css";
import PrimaryHeader from "@/components/header/PrimaryHeader/index";
import { inter, caladea, calistoga } from "./fonts";

export const metadata: Metadata = {
  title: "NexLink",
  description: "A job finding site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable} ${caladea.variable} antialiased`}
      >
        <PrimaryHeader />
        {children}
      </body>
    </html>
  );
}
