'use client';

import { Noto_Serif } from "next/font/google";
import "./globals.scss";
import Image from "next/image";
import styles from "./page.module.scss";

const noto = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  style: ['normal', 'italic'],
});

/**
 * The home page component displaying a hero section with an image and a quote.
 */
export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${noto.className}`}>Silvia Innocenti</h1>
        <p className={styles.subtitle}>Presto online</p>
        <div className={styles.logoContainer}>
          <Image
            src="/loading.gif"
            alt="Logo"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
}
