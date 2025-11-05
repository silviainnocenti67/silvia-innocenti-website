'use client';

import { motion } from "motion/react";
import "../globals.scss";
import classes from "./page.module.scss";

export default function ProfilePage() {
  return (
    <main className="main">
      <h1>Profilo</h1>

      {/* Chi è Silvia Innocenti Section */}
      <div className='section'>
        <div className={classes.profileSection}>
          <motion.div className={classes.profileTextContainer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Chi è Silvia Innocenti</h2>
            <p>
              Silvia Innocenti (Padova 1967) si laurea in Architettura
              all’Istituto Universitario Architettura di Venezia nel 1994 con
              una tesi di Riqualificazione dell’area della Fiera di Padova:
              Progetto di Riconversione Multifunzionale dell’area destinato a
              residenza, commercio, attività direzionali e ricettivo-congressuali.
              <br /><br />
              Dopo alcune esperienze presso studi di architettura di Padova —
              con i quali ha mantenuto nel tempo rapporti di collaborazione —
              intraprende l’attività di libera professione nel 1995/1996.
              Nei primi anni partecipa a Concorsi di Progettazione insieme a
              colleghi e frequenta Corsi di Specializzazione, con particolare
              attenzione alla disciplina del Restauro Architettonico, ambito
              che svilupperà ampiamente nel corso della sua carriera.
            </p>
          </motion.div>
          <motion.div className={classes.photoContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src="/profile-photo.png" alt="Profile Image" className={classes.profileImage} />
          </motion.div>
        </div>
        <div className={classes.profileSection}>
          <motion.div className={classes.profileTextContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Numerosi sono i progetti e gli interventi di Restauro, Ristrutturazione
              ed ex novo realizzati nell’ambito residenziale, commerciale, direzionale,
              artigianale, industriale, turistico- alberghiero, ecclesiastico, sportivo,
              oltre a Piani di Recupero, progetti per incubatori d’impresa, perizie estimative
              ed altri incarichi professionali.
            </p>
          </motion.div>
        </div>
        <div className={classes.profileSection}>
          <motion.div className={classes.profileTextContainer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              E’ molto attiva anche nel campo dell’Architettura d’interni e dell’Arredamento,
              un settore quasi naturale nella sua formazione personale, avendo vissuto da
              vicino l’esperienza della madre, titolare per oltre quarant’anni di un
              rinomato negozio di arredamento nel centro storico di Padova. Si cimenta
              anche nella realizzazione di allestimenti scenografici per il teatro, e
              sviluppa nel tempo progetti di nuova edificazione, in particolare residenziale,
              sia in ambito nazionale che europeo.
            </p>
          </motion.div>
        </div>
        <div className={classes.profileSection}>
          <motion.div className={classes.profileTextContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Dal 2000 al 2016 ha fatto parte di un team di architetti con cui ha realizzato
              numerosi progetti e con cui ha vinto il Primo Premio Concorso d’idee “Trachite:
              un’idea in Fiera” per la realizzazione di un Totem Pubblicitario da esterno per
              Padova Fiere Spa. <br />
              Nel 2018 ha svolto attività di Docenza nell’ambito del “Corso di Specializzazione 
              in Interior Designer” promosso dalla Regione Veneto Garanzia Giovani.
              <br /><br />
              Attualmente svolge la sua attività professionale in forma individuale, con la stessa 
              passione, cura e dedizione che da sempre contraddistinguono il suo percorso.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Collaborazioni */}
      <div className="section">
         <div className={classes.profileSection}>
          <motion.div className={classes.profileTextContainer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Collaborazioni</h2>
            <p>
              Nel tempo ha instaurato e continua a coltivare collaborazioni con Professionisti 
              di diverse discipline legate al mondo dell’Architettura e del Design, nella 
              convinzione che alcuni progetti nascano proprio dal dialogo e dal confronto 
              delle idee condivise e dall'integrazione sinergica di competenze specialistiche.
            </p>
          </motion.div>
        </div>
      </div>

      {/* MISSION */}
      <div className='section'>
        <div className={classes.profileSection}>
          <motion.div className={classes.profileTextContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Mission</h2>
            <p>
              Ogni volume, ogni spazio – che si tratti di una parete, un pavimento o un 
              soffitto – è per me una pagina bianca, pronta ad accogliere storie. In quei 
              luoghi le persone scriveranno i capitoli della propria vita quotidiana, ed è 
              con questo pensiero che affronto ogni progetto. E’ una responsabilità che solo 
              la passione per questo lavoro mi aiuta ad affrontare con serietà e, nello stesso 
              tempo, con la gioia di dare spazi e ambientazioni nei quali ci si possa sentire 
              a proprio agio e in armonia.
            </p>
          </motion.div>
        </div>
        <div className={classes.profileSection}>
          <motion.div className={classes.profileTextContainer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Progettare significa ascoltare, osservare, interpretare. Per questo, in ogni 
              mio lavoro, dedico particolare attenzione sia alle caratteristiche fisiche del 
              luogo – il paesaggio, la luce, i materiali, l’atmosfera – sia alle esigenze, 
              ai desideri e alla sensibilità del committente. È in questo equilibrio tra 
              contesto e persona che nasce un progetto autentico, capace di unire concretezza 
              e funzionalità con creatività, emozione e armonia.
            </p>
          </motion.div>
        </div>
        <div className={classes.profileSection}>
          <motion.div className={classes.profileTextContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              La cura del dettaglio è fondamentale e fa sempre la differenza. La cura meticolosa 
              dei materiali, delle finiture, delle superfici – tangibili o impalpabili – e la 
              scelta cromatica integrata con lo spazio architettonico e l’arredo, contribuiscono 
              a dare carattere e identità agli ambienti. Un "tocco di colore", calibrato e 
              personale, diventa spesso la firma distintiva del progetto.<br /><br />
              Per questo sento di poter definire il mio approccio come un vero e proprio lavoro 
              artigianale: fatto su misura, costruito con attenzione, sensibilità e passione.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}