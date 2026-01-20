import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Abdullah - Full Stack Developer | MERN Stack Expert",
  description: "Experienced Full Stack Developer with 5+ years in React.js, Next.js, React Native, Node.js, and Nest.js. Specializing in modern web applications and mobile solutions.",
  keywords: "Full Stack Developer, React.js, Next.js, Node.js, Nest.js, React Native, MongoDB, TypeScript, JavaScript, Web Development, Mobile Development",
  authors: [{ name: "Muhammad Abdullah" }],
  openGraph: {
    title: "Muhammad Abdullah - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in MERN Stack with 5+ years of professional experience",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abdullah - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in MERN Stack with 5+ years of professional experience",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
