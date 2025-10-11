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
      {/* Contacts */}
      <div className={styles.contacts}>
        <p className={styles.contactsText}><strong>Email:</strong> <a href="mailto:silviainnocentiarch@gmail.com">silviainnocentiarch@gmail.com</a></p>
        <p className={styles.contactsText}><strong>Telefono:</strong> <a href="tel:+393382137308">338 213 7308</a></p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={`${styles.profession} ${noto.className}`}>Architetto</p>
          <h1 className={`${styles.title} ${noto.className}`}>Silvia Innocenti</h1>
          <p className={styles.subtitle}>Presto online</p>
        </div>
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
