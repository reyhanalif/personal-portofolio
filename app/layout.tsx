import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reyhan Alif - Data Scientist | Imperial College London",
  description: "Imperial College London MSc graduate specializing in Data Science and Analytics. 2+ years experience in digital banking at Bank Jago. Expert in environmental data science, geospatial analysis, and business intelligence.",
  metadataBase: new URL('https://pradityora.vercel.app'),
  authors: [{ name: 'Reyhan Alif' }],
  keywords: [
    'Reyhan Alif',
    'Data Scientist',
    'Imperial College London',
    'Digital Banking',
    'Data Analytics',
    'Environmental Science',
    'Bank Jago',
    'Machine Learning',
    'Geospatial Analysis',
    'Python',
    'SQL',
    'Business Intelligence',
    'Google Earth Engine'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pradityora.vercel.app',
    siteName: 'Reyhan Alif Portfolio',
    title: 'Reyhan Alif - Data Scientist | Imperial College London',
    description: 'Imperial College London MSc graduate. 2+ years experience in digital banking analytics and environmental data science.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reyhan Alif - Data Scientist | Imperial College London',
    description: 'Data Scientist specializing in digital banking analytics and environmental science.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed Anime Background */}
        <div className="fixed inset-0 z-[-1] opacity-40 bg-[url('/bg-lineart.png')] bg-cover bg-center grayscale" />

        {/* Optional backdrop blur overlay for better text contrast */}
        <div className="fixed inset-0 z-[-1] bg-white/75 backdrop-blur-[2px]" />

        {children}
      </body>
    </html>
  );
}

