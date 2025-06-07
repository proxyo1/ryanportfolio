import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Lim",
  description: "Hi! I'm Ryan, a Information Technology Graduate from Temasek Polytechnic, aspiring to be a software engineer. I love to code, design and learn new technologies!",
  keywords: "ryanlimxy, lim xing yu ryan, ryanlimxyz, ryanlim, ryan lim portfolio, web development, frontend, backend, full-stack",
  authors: [{ name: "Ryan Lim" }],
  openGraph: {
    title: "Ryan Lim",
    description: "Hi! I'm Ryan, a Information Technology Graduate from Temasek Polytechnic, aspiring to be a software engineer. I love to code, design and learn new technologies!",  
    url: "https://ryanlim.xyz",
    siteName: "Ryan Lim | Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Lim's Portfolio",
    description: "Hi! I'm Ryan, a Information Technology Graduate from Temasek Polytechnic, aspiring to be a software engineer. I love to code, design and learn new technologies!",  

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
