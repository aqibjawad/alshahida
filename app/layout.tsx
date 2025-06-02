import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/navigation";
import WhatsAppWidget from "./whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al Shahida Restaurant",
  description:
    "Founded in October 2022, Al Shahida Restaurant began as a passion project to deliver exceptional culinary experiences through cloud kitchens. With a successful expansion to a second \
    location in April 2024, we are now ready to elevate our presence by transitioning to full-scale restaurants in prime mall and ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full">
          <div className="">
            <Navigation />
          </div>
        </header>

        <main className="mx-auto min-h-screen">
          {children}
        </main>

        <footer className="border-t-50" style={{ backgroundColor: "black" }}>
          <div className="container mx-auto px-4 py-6">
            <div className="text-center text-white">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
          </div>
        </footer>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
