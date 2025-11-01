import classes from './Footer.module.scss';

/**
 * Footer component.
 */
export default function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.footerContent}>
          {/* Left Section */}
          <div className={classes.footerSection}>
            <h4 className={classes.footerSectionTitle}>Contatti</h4>
            <div className={classes.footerSectionContent}>
              <p><strong>Telefono:</strong> +39 123 1234 1234</p>
              <p><strong>Email:</strong> silviaInnocenti@mail.com</p>
            </div>
          </div>

          {/* Center Section */}
          <div className={classes.footerSection} id={classes.centerSection}>
            <h4 className={classes.footerSectionTitle}>Indirizzo</h4>
            <div className={classes.footerSectionContent}>
              <p><strong>Indirizzo:</strong> Via Roma 1, 00100 Roma RM, Italia</p>
            </div>
          </div>

          {/* Right Section */}
          <div className={classes.footerSection} id={classes.rightSection}>
            <img src="/better-logo-grey.svg" alt="Footer Logo" className={classes.footerLogo} />
          </div>
        </div>
    </footer>
  )
}
