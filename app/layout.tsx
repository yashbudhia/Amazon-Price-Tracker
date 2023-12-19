import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/Navbar";
import { Metadata } from "next";
import { NextAuthProvider } from "./providers";

// Import other necessary dependencies

// Define font styles
const inter = Inter({ subsets: ["latin"] });
const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Define metadata
export const metadata: Metadata = {
  title: "StealTheDeal",
  description: "Get the best deals through advanced web scraping",
};

// Define RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10x1 mx-auto">
        <NextAuthProvider>
          <Navbar />
          
            <div>{children}</div>
          </NextAuthProvider>
        </main>
      </body>
    </html>
  );
}
