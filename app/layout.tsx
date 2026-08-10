import Footer from "@/components/molecules/footer/Footer";
import LoaderPage from "@/components/molecules/loader-page/LoaderPage";
import Navbar from "@/components/molecules/navbar/Navbar";
import { RouteLoaderProvider } from "@/components/providers/RouteLoaderProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
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
 * ID di misurazione GA4 (formato G-XXXXXXXXXX). Se la variabile non è
 * impostata lo script di Analytics non viene caricato: in locale e nelle
 * anteprime non si sporcano le statistiche.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html >
  );
}