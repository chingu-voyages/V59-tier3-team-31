import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
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
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "blockButton",
        },
        variables: {
          colorPrimary: "#16DB65",
        },
        elements: {
          headerTitle: { color: "#16DB65" },
          formFieldLabel: { color: "#16DB65" },
        },
      }}
    >
      <html lang="en">
        <body
          className={`${inter.variable} ${calistoga.variable} ${caladea.variable} antialiased`}
        >
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
