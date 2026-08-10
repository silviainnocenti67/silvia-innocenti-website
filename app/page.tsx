'use client';

import ProjectsCarousel from "@/components/atoms/project-carousel/ProjectsCarousel";
import { motion } from "framer-motion";
import { Noto_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.scss";
import classes from "./page.module.scss";

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
    <main className="main">
      { /* Hero Section */}
      <div className={classes.heroSection}>
        <img src="/hero-photo.png" alt="Hero Image" className={classes.heroImage}/>
        <div className={classes.heroTextContainer}>
          <motion.p
            className={`${classes.heroQuote} ${noto.className}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            “L'architettura<br />
            è il gioco sapiente,<br />
            rigoroso e magnifico<br />
            dei volumi assemblati<br />
            nella luce”
          </motion.p>
          <motion.p
            className={classes.heroAuthor}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Le Corbusier
          </motion.p>
        </div>
      </div>

      { /* Profile section */}
      <div className={classes.profileSection}>
        <motion.div className={classes.profileTextContainer}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={classes.profileTitle}>Silvia Innocenti</h2>
          <p>
            Ogni volume, ogni spazio &ndash; che si tratti di una parete, un
            pavimento o un soffitto &ndash; è per me una pagina bianca, pronta
            ad accogliere storie. In quei luoghi le persone scriveranno i
            capitoli della propria vita quotidiana, ed è con questo
            pensiero che affronto ogni progetto. E&apos; una responsabilità
            che solo la passione per questo lavoro mi aiuta ad affrontare
            con serietà e, nello stesso tempo, con la gioia di dare spazi e
            ambientazioni nei quali ci si possa sentire a proprio agio e in armonia.
          </p>
          <Link href="/profilo" className={classes.profileLink}>Scopri di più</Link>
        </motion.div>
        <motion.div className={classes.photoContainer}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src="/profile.jpg" alt="Silvia Innocenti" className={classes.profileImage} />
        </motion.div>
      </div>

      { /* Projects Section */}
      <div className={classes.projectsSection}>
        <ProjectsCarousel />
      </div>
    </main>
  );
}
