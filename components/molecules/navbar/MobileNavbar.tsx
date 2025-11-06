'use client';

import { useState } from 'react';
import Link from 'next/link';
import classes from './MobileNavbar.module.scss'
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion, useAnimate } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ProjectTypes } from '@/enums/projectTypes.enum';
import BlackOpaqueBg from '@/components/atoms/black-opaque-bg/BlackOpaqueBg';

/**
 * Mobile navbar component
 */
export default function MobileNavbar() {
  /** Toggle menu state. */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /** Dropdown state for project section. */
  const [isProjectSectionOpen, setIsProjectSectionOpen] = useState(false);
  /** Router instance. */
  const router = useRouter();
  /** Animation scope and controller. */
  const [scope, animate] = useAnimate();

  /**
   * Handles menu dropdown toggle.
   */
  function handleMenuDropdown() {
    if (isMenuOpen) {
      animate(`.${classes.link}, .${classes.projectsDropdownLinks}`, { opacity: 0 }, { duration: 0.3 });
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsProjectSectionOpen(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  }

  function handleProjectSectionDropdown() {
    setIsProjectSectionOpen(!isProjectSectionOpen);
  }

  /**
   * Animates the presence of navigation links.
   */
  function animateLinksPresence() {
    animate(`.${classes.link}, .${classes.projectsDropdownLinks}`, { opacity: 1 }, { duration: 0.3 });
  }

  /**
   * Navigates to the home page.
   */
  function goToHome() {
    router.push("/");
  }

  /** Render */
  return (
    <>
      <motion.div className={classes.mobileNavbarContainer}>
        {/* Header section */}
        <div className={classes.headerContainer}>
          <img src="/better-logo.svg" alt="Logo" className={classes.logo} onClick={goToHome} />

          <div className={classes.hamburgerMenu} onClick={handleMenuDropdown}>
            <span className={`${classes.line1} ${isMenuOpen && classes.toggleLine1}`} />
            <span className={`${isMenuOpen && classes.toggleLine2}`} />
            <span className={`${classes.line3} ${isMenuOpen && classes.toggleLine3}`} />
          </div>
        </div>

        {/* Navigation links */}
        <AnimatePresence>
          {
            isMenuOpen && (
              <motion.div
                className={classes.navLinksContainer}
                layout
                initial={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  height: 0,
                  opacity: 1
                }}
                animate={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  height: "auto",
                  opacity: 1
                }}
                exit={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  height: 0,
                  opacity: 1
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                onAnimationComplete={animateLinksPresence}
                ref={scope}
              >
                <Link href="/" className={classes.link} onClick={handleMenuDropdown} style={{ opacity: 0 }}>Home</Link>
                <div className={classes.projectsDropdownLinks} onClick={handleProjectSectionDropdown} style={{ opacity: 0 }}>
                  <p className={classes.link}>Progetti</p>
                  <motion.div className={classes.dropdownIconContainer}
                    animate={{ rotate: isProjectSectionOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={classes.dropdownIcon} />
                  </motion.div>
                  <AnimatePresence>
                    {
                      isProjectSectionOpen && (
                        <motion.div
                          className={classes.dropdownContent}
                          initial={{ top: 20, opacity: 0 }}
                          animate={{ top: 30, opacity: 1 }}
                          exit={{ top: 30, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link href="/progetti" className={classes.link} onClick={handleMenuDropdown}>Tutti</Link>
                          <Link href={`/progetti?type=${ProjectTypes.RISTRUTTURAZIONE}`} className={classes.link} onClick={handleMenuDropdown}>Ristrutturazione</Link>
                          <Link href={`/progetti?type=${ProjectTypes.NUOVA_COSTRUZIONE}`} className={classes.link} onClick={handleMenuDropdown}>Nuova costruzione</Link>
                          <Link href={`/progetti?type=${ProjectTypes.RESTAURO}`} className={classes.link} onClick={handleMenuDropdown}>Restauro</Link>
                          <Link href={`/progetti?type=${ProjectTypes.INTERIOR_DESIGN}`} className={classes.link} onClick={handleMenuDropdown}>Interior design</Link>
                        </motion.div>
                      )
                    }
                  </AnimatePresence>
                </div>
                <Link href="/profilo" className={classes.link} onClick={handleMenuDropdown} style={{ opacity: 0 }}>Profilo</Link>
                <Link href="/contatti" className={classes.link} onClick={handleMenuDropdown} style={{ opacity: 0 }}>Contatti</Link>
              </motion.div>
            )
          }
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {
          isMenuOpen &&
          <BlackOpaqueBg funct={handleMenuDropdown} />
        }
      </AnimatePresence>
    </>
  )
}