import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/globals.css";
import "@/styles/themes.css";
import Layout from "@/components/Layout/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahsanulhabib.vercel.app"),
  title: {
    default: "Ahsanul Habib",
    template: "Ahsanul Habib | %s",
  },
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, AI, and backend development.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
