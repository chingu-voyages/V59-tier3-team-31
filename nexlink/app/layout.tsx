import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { inter, caladea, calistoga } from "./fonts";
import PrimaryHeader from "@/components/header/PrimaryHeader";

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
          <PrimaryHeader />

          <header className="fixed top-4 right-4 z-50 flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-medium hover:text-[#16DB65] transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-[#16DB65] text-white rounded-full text-sm font-medium h-10 px-5 hover:bg-[#04471C] transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
