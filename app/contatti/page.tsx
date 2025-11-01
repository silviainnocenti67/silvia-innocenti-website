'use client';

import "@/app/globals.scss";
import classes from "./page.module.scss";
import SIButton from "@/components/atoms/button/SIButton";
import Maps from "@/components/atoms/maps/Maps";
import { useRef, useState } from "react";
import LoadingCircle from "@/components/atoms/loading-circle/LoadingCircle";

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

  /**
   * Handle form submission.
   * @param event form submission event.
   */
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Obtain reCAPTCHA token
      // const token = await window.grecaptcha.execute(SITE_KEY, {
      //   action: 'contact_form'
      // });

      // Send data to the script
      const response = await fetch(process.env.NEXT_PUBLIC_SCRIPT_URL ?? "", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // recaptcha_token: token
        })
      });

      if (response.ok) {
        setMessage('Messaggio inviato con successo!');
        setFormData({ name: '', email: '', message: '' });
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
  }

  return (
    <main>
      <h1>Contatti</h1>

      <div className="section">
        <h2>Invia una richiesta</h2>
        <div className={classes.contactsSection}>
          <form className={classes.form} onSubmit={handleSubmit} ref={formRef}>
            <div className={classes.formInput}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                className={classes.input}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required />
            </div>

            <div className={classes.formInput}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={classes.input}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required />
            </div>

            <div className={classes.formInput}>
              <label htmlFor="message">Messaggio</label>
              <textarea
                id="message"
                name="message"
                className={classes.textarea}
                rows={5}
                required
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            </div>

            <div className={classes.buttonSection}>
              {message && <p className={classes.message}>{message}</p>}
              {loading && <LoadingCircle />}
              {!loading && <SIButton text="Invia" type="submit" disabled={loading} />}
            </div>
          </form>
        </div>
      </div>

      {/* Office section */}
      <div className="section">
        <h2>La sede</h2>
        <Maps />
      </div>
    </main>
  );
}   
