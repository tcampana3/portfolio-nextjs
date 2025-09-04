import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Anthony Campana — Portfolio",
  description: "Software Engineer | Cloud | Full-Stack",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 max-w-6xl mx-auto px-5 md:px-8 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
