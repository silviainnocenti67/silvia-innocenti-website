'use client'

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./DesktopNavbar.module.scss";
import { ProjectTypes } from "@/enums/projectTypes.enum";

/**
 * The desktop version of the navigation bar.
 */
export default function DesktopNavbar() {
  /** State to manage dropdown visibility */
  const [isDroppedDown, setIsDroppedDown] = useState(false)

  /** Router instance for navigation */
  const router = useRouter();

  /**
   * Toggles the dropdown menu visibility.
   */
  function manageDropdown() {
    setIsDroppedDown(!isDroppedDown);
  }

  /**
   * Resets the dropdown menu to its initial state (closed).
   */
  function resetDropdown() {
    setIsDroppedDown(false);
  }

  /**
   * Navigates to the home page and resets the dropdown menu.
   */
  function navigateToHome() {
    resetDropdown();
    router.push("/");
  }

  return (
    <div className={classes.navbarContainer}>
      {/* Logo Section */}
      <img src="/better-logo.svg" alt="Logo" className={classes.logo} onClick={navigateToHome}/>

      {/* Main Navigation Links */}
      <div className={classes.navLinks}>
        <Link href="/" className={classes.link} onClick={resetDropdown}>Home</Link>

        {/* Dropdown Menu for Projects */}
        <div className={classes.dropdownLinks} onClick={manageDropdown}>
          <p className={classes.link}>Progetti</p>
          <motion.div className={classes.dropdownIconContainer}
            animate={{ rotate: isDroppedDown ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className={classes.dropdownIcon} />
          </motion.div>
          <AnimatePresence>
            {
              isDroppedDown && (
                <motion.div
                  className={classes.dropdownContent}
                  initial={{ top: 20, opacity: 0 }}
                  animate={{ top: 30, opacity: 1 }}
                  exit={{ top: 30, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/progetti" className={classes.link} onClick={resetDropdown}>Tutti</Link>
                  <Link href={`/progetti?type=${ProjectTypes.RISTRUTTURAZIONE}`} className={classes.link} onClick={resetDropdown}>Ristrutturazione</Link>
                  <Link href={`/progetti?type=${ProjectTypes.NUOVA_COSTRUZIONE}`} className={classes.link} onClick={resetDropdown}>Nuova costruzione</Link>
                  <Link href={`/progetti?type=${ProjectTypes.RESTAURO}`} className={classes.link} onClick={resetDropdown}>Restauro</Link>
                  <Link href={`/progetti?type=${ProjectTypes.INTERIOR_DESIGN}`} className={classes.link} onClick={resetDropdown}>Interior design</Link>
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>

        <Link href="/profilo" className={classes.link} onClick={resetDropdown}>Profilo</Link>
        <Link href="/contatti" className={classes.link} onClick={resetDropdown}>Contatti</Link>
      </div>
    </div>
  )
}

