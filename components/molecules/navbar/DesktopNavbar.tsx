'use client'

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./DesktopNavbar.module.scss";
import { PROJECT_TYPE_LABELS } from "@/enums/projectTypes.enum";
import { availableProjectTypes } from "@/data/projects";

/**
 * The desktop version of the navigation bar.
 */
export default function DesktopNavbar() {
  /** State to manage dropdown visibility */
  const [isDroppedDown, setIsDroppedDown] = useState(false)

  /** Router instance for navigation */
  const router = useRouter();

  /** Current pathname, used to highlight the active nav link. */
  const pathname = usePathname();

  /**
   * Whether the given route is the one currently active.
   * For non-home routes also matches nested paths (es. /progetti/1).
   * @param href route to check
   */
  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

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
      <img src="/logo-cad.svg" alt="Logo" className={classes.logo} onClick={navigateToHome}/>

      {/* Main Navigation Links */}
      <div className={classes.navLinks}>
        <Link href="/" className={`${classes.link} ${isActive("/") ? classes.active : ""}`} onClick={resetDropdown}>Home</Link>

        {/* Dropdown Menu for Projects */}
        <div className={classes.dropdownLinks} onClick={manageDropdown}>
          <p className={`${classes.link} ${isActive("/progetti") ? classes.active : ""}`}>Progetti</p>
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
                  {availableProjectTypes.map((type) => (
                    <Link key={type} href={`/progetti?type=${type}`} className={classes.link} onClick={resetDropdown}>{PROJECT_TYPE_LABELS[type]}</Link>
                  ))}
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>

        <Link href="/profilo" className={`${classes.link} ${isActive("/profilo") ? classes.active : ""}`} onClick={resetDropdown}>Profilo</Link>
        <Link href="/contatti" className={`${classes.link} ${isActive("/contatti") ? classes.active : ""}`} onClick={resetDropdown}>Contatti</Link>
      </div>
    </div>
  )
}

