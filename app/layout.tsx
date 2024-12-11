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
  title: "Edufeedback",
  description: "La mejor app de retroalimentación educativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black/90`}
      >
        <main className="antialiased w-[414px] h-[95dvh] bg-circular-gradient text-white rounded-lg shadow-xl overflow-hidden mx-auto px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
