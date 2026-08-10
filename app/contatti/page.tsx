'use client';

import "@/app/globals.scss";
import classes from "./page.module.scss";
import SIButton from "@/components/atoms/button/SIButton";
import Maps from "@/components/atoms/maps/Maps";
import { useEffect, useRef, useState } from "react";
import LoadingCircle from "@/components/atoms/loading-circle/LoadingCircle";
import { Inter } from "next/font/google";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Immagini della sede/studio, mostrate in galleria e nel lightbox. */
const studioImages = [
  { src: "/studio/1.jpg", alt: "Interno dello studio di architettura" },
  { src: "/studio/2.jpg", alt: "Torre dell'Orologio, Padova" },
  { src: "/studio/3.jpg", alt: "Palazzo della Ragione, Padova" },
];

/**
 * Type for form submission data.
 * @property name - The name of the user.
 * @property email - The email of the user.
 * @property message - The message from the user.
 */
type SubmissionData = {
  name: string;
  email: string;
  message: string;
}

/**
 * Formato email accettato. Più severo del type="email" del browser, che
 * considera valido anche "nome@dominio" senza estensione.
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/;

/**
 * Valida l'indirizzo email inserito.
 * @param value valore grezzo del campo email
 * @returns il messaggio di errore da mostrare, oppure null se l'email è valida
 */
function validateEmail(value: string): string | null {
  const email = value.trim();
  if (!email) return "Inserisci la tua email.";
  if (!EMAIL_REGEX.test(email)) return "Formato email non valido (es. nome@dominio.it).";
  return null;
}

/**
 * Contacts page.
 * @returns Contacts page.
 */
export default function Contatti() {
  // Loading state for form submission.
  const [loading, setLoading] = useState(false);
  // Message state for success/error feedback.
  const [message, setMessage] = useState<string | null>(null);
  // Form data state.
  const [formData, setFormData] = useState<SubmissionData>({ name: '', email: '', message: '' });
  // Reference to the form element.
  const formRef = useRef<HTMLFormElement>(null);
  // Form validity state.
  const [isValid, setIsValid] = useState(false);
  // Errore di validazione dell'email, mostrato sotto al campo.
  const [emailError, setEmailError] = useState<string | null>(null);
  // L'utente ha già lasciato il campo email almeno una volta: solo da quel
  // momento mostriamo l'errore, per non segnalarlo mentre sta ancora digitando.
  const [emailTouched, setEmailTouched] = useState(false);
  // Honeypot anti-spam field (invisibile agli utenti, compilato solo dai bot).
  const honeypotRef = useRef<HTMLInputElement>(null);
  // Timestamp di caricamento del form (time-trap anti-spam).
  const formLoadedAt = useRef(0);
  // Stato del lightbox per le immagini della sede.
  const [isStudioBoxOpen, setIsStudioBoxOpen] = useState(false);
  // Indice dell'immagine sede attualmente aperta nel lightbox.
  const [studioIndex, setStudioIndex] = useState(0);

  useEffect(() => {
    formLoadedAt.current = Date.now();
  }, []);

  /**
   * Apre il lightbox sull'immagine della sede selezionata.
   * @param i indice dell'immagine da aprire
   */
  function openStudioLightbox(i: number) {
    setStudioIndex(i);
    setIsStudioBoxOpen(true);
  }

  /**
   * Check form validity and update state.
   */
  function checkValidity() {
    if (formRef.current) {
      setIsValid(formRef.current.checkValidity());
    }
  };

  /**
   * Handle form submission.
   * @param event form submission event.
   */
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Anti-spam honeypot: se il campo nascosto è compilato, è un bot → ignora.
    if (honeypotRef.current?.value) return;
    // Anti-spam time-trap: invio sospettosamente rapido (< 3s) → probabile bot.
    if (formLoadedAt.current && Date.now() - formLoadedAt.current < 3000) return;

    // Ricontrolla l'email anche in fase di invio: il bottone è già disabilitato
    // se non è valida, ma il submit può arrivare comunque (es. tasto Invio).
    const emailProblem = validateEmail(formData.email);
    if (emailProblem) {
      setEmailTouched(true);
      setEmailError(emailProblem);
      return;
    }

    setLoading(true);
    setMessage(null);
    try {
      // Obtain reCAPTCHA token
      // const token = await window.grecaptcha.execute(SITE_KEY, {
      //   action: 'contact_form'
      // });

      // Send data to the script.
      // NB: niente header 'Content-Type: application/json', altrimenti il
      // browser fa scattare un preflight CORS (OPTIONS) che Google Apps Script
      // non sa gestire. Senza header la richiesta è "semplice" e passa; lo
      // script fa comunque JSON.parse(e.postData.contents).
      const response = await fetch(process.env.NEXT_PUBLIC_SCRIPT_URL ?? "", {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          email: formData.email.trim(),
          // recaptcha_token: token
        })
      });

      if (response.ok) {
        setMessage('Messaggio inviato con successo!');
        setFormData({ name: '', email: '', message: '' });
        setEmailError(null);
        setEmailTouched(false);
        setIsValid(false);
        formRef.current?.reset();
      } else {
        setMessage('Errore di invio. Riprova.');
      }

    } catch (error) {
      console.error('Errore:', error);
      setMessage('Errore di invio. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Contatti</h1>

      {/* Contacts section */}
      <div className="section">
        <div className={classes.contactsContainer}>
          {/* Contact form */}
          <div className={classes.contactsSection}>
            <h2 style={{ width: '100%', textAlign: 'left' }}>Invia una richiesta</h2>
            <form className={classes.form} onSubmit={handleSubmit} ref={formRef}>
              {/* Honeypot anti-spam: invisibile agli utenti, compilato solo dai bot */}
              <div className={classes.honeypot} aria-hidden="true">
                <label htmlFor="website">Non compilare questo campo</label>
                <input type="text" id="website" name="website" ref={honeypotRef} tabIndex={-1} autoComplete="off" />
              </div>
              <div className={classes.formInput}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={classes.input}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    checkValidity();
                  }}
                  required />
              </div>

              <div className={classes.formInput}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`${classes.input} ${emailError ? classes.inputError : ''}`}
                  aria-invalid={emailError ? true : undefined}
                  aria-describedby={emailError ? 'email-error' : undefined}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    // Finché l'utente non ha lasciato il campo non lo correggiamo
                    // mentre digita; dopo il primo blur l'errore si aggiorna dal vivo.
                    if (emailTouched) setEmailError(validateEmail(e.target.value));
                    checkValidity();
                  }}
                  onBlur={(e) => {
                    setEmailTouched(true);
                    setEmailError(validateEmail(e.target.value));
                  }}
                  required />
                {emailError && <p id="email-error" className={classes.fieldError}>{emailError}</p>}
              </div>

              <div className={classes.formInput}>
                <label htmlFor="message">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${classes.textarea} ${inter.className}`}
                  rows={5}
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    checkValidity();
                  }} 
                  />
              </div>

              <div className={classes.buttonSection}>
                {message && <p className={classes.message}>{message}</p>}
                {loading && <LoadingCircle />}
                {!loading && <SIButton text="Invia" type="submit" disabled={loading || !isValid || validateEmail(formData.email) !== null} />}
              </div>
            </form>
          </div>

          <div className={classes.contactsList}>
            <h2 style={{ width: '100%', textAlign: 'right' }}>Recapiti</h2>
            <p>Puoi contattarmi tramite i seguenti canali:</p>
            <div className={classes.contactsItems}>
              <p><strong>Telefono:</strong> +39 338 2137308</p>
              <p><strong>Email:</strong> silviainnocentiarch@gmail.com</p>
              <p><strong>Indirizzo:</strong> Via Fiume, 9 - 35139 Padova</p>
            </div>
          </div>
        </div>
      </div>

      {/* Office section */}
      <div className="section">
        <h2>Sede</h2>
        <p className={classes.studioIntro}>
          Il mio studio si trova nel cuore del centro storico di Padova.
        </p>
        <div className={classes.studioGallery}>
          {studioImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className={classes.studioImage}
              onClick={() => openStudioLightbox(i)}
            />
          ))}
        </div>
        <Maps />
      </div>

      <Lightbox
        noScroll={{ disabled: true }}
        open={isStudioBoxOpen}
        index={studioIndex}
        close={() => setIsStudioBoxOpen(false)}
        slides={studioImages.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </main>
  );
}
