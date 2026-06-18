import classes from './Footer.module.scss';
import Link from 'next/link';

/**
 * Footer component.
 */
export default function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.footerContent}>
          {/* Left Section: logo */}
          <div className={classes.footerSection} id={classes.rightSection}>
            <img src="/better-logo-grey.svg" alt="Footer Logo" className={classes.footerLogo} />
          </div>

          {/* Center Section: Pagine */}
          <div className={classes.footerSection} id={classes.centerSection}>
            <h4 className={classes.footerSectionTitle}>Pagine</h4>
            <div className={`${classes.footerSectionContent} ${classes.sitemap}`}>
              <Link href="/" className={classes.sitemapLink}>Home</Link>
              <Link href="/progetti" className={classes.sitemapLink}>Progetti</Link>
              <Link href="/profilo" className={classes.sitemapLink}>Profilo</Link>
              <Link href="/contatti" className={classes.sitemapLink}>Contatti</Link>
            </div>
          </div>

          {/* Right Section: Contatti */}
          <div className={classes.footerSection}>
            <h4 className={classes.footerSectionTitle}>Contatti</h4>
            <div className={`${classes.footerSectionContent} ${classes.contactsCenter}`}>
              <p><strong>Telefono:</strong> +39 338 2137308</p>
              <p><strong>Email:</strong> silviainnocentiarch@gmail.com</p>
              <p><strong>Indirizzo:</strong> Via Fiume, 9 - 35139 Padova</p>
            </div>
          </div>
        </div>
    </footer>
  )
}
