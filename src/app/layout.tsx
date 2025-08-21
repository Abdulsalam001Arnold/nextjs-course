import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Info from "@/components/Info";
import UseClient from "@/components/UseClient";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-end items-center p-4 gap-4 h-16">
          <Info/>
          <UseClient/>
          <Link href="/user-profile" className="text-lg font-bold">
            Profile
          </Link>
          {/* <SignedOut>
            <SignInButton mode="modal"/>
            <SignUpButton>
              <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                  userButtonAvatarImage: "rounded-full",
                },
              }}
            />
          </SignedIn> */}
        </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
