import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/molecules/navbar/Navbar";
import Footer from "@/components/molecules/footer/Footer";
import { Suspense } from "react";
import LoadingCircle from "@/components/atoms/loading-circle/LoadingCircle";
import { Route } from "lucide-react";
import { RouteLoader } from "@/components/molecules/route-loader/RouteLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
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
          <RouteLoader />
          {children}
      <Footer />
    </body>
    </html >
  );
}