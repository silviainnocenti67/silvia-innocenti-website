import Footer from "@/components/molecules/footer/Footer";
import LoaderPage from "@/components/molecules/loader-page/LoaderPage";
import Navbar from "@/components/molecules/navbar/Navbar";
import { RouteLoaderProvider } from "@/components/providers/RouteLoaderProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silvia Innocenti",
  description: "Architetto Silvia Innocenti",
};

/**
 * Root layout component that wraps the entire application.
 * Renders the Navbar at the top, the Footer at the bottom,
 * @param children - The child components to be rendered within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <RouteLoaderProvider>
          <Suspense fallback={<LoaderPage />}>
            {children}
          </Suspense>
        </RouteLoaderProvider>
        <Footer />
      </body>
    </html >
  );
}