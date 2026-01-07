import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Data Scientist",
  description: "A modern portfolio showcasing data science projects and insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed Anime Background */}
        <div className="fixed inset-0 z-[-1] opacity-40 bg-[url('/bg-lineart.png')] bg-cover bg-center grayscale" />
        
        {/* Optional backdrop blur overlay for better text contrast */}
        <div className="fixed inset-0 z-[-1] bg-white/60 backdrop-blur-[2px]" />
        
        {children}
      </body>
    </html>
  );
}

