'use client';

import { LucideX } from "lucide-react"
import "./globals.scss";

export default function Error() {
  return (
    <main>
      <div
        className='section'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '20px',
          textAlign: 'center',
        }}
      >
        <LucideX size={100}/>
        <h2>Errore</h2>
        <p>Ci dispiace, qualcosa è andato storto</p>
      </div>
    </main>
  )
}