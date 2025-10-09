import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google"; 
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
        {children}
      </body>
    </html>
  );
}
