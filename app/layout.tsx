import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burak's Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-col align-middle justify-center flex-grow bg-gray-50">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
