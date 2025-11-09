import "./globals.scss";
import { TriangleAlert } from 'lucide-react';

export default function NotFound() {
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
        <TriangleAlert size={100}/>
        <h2>Pagina non trovata</h2>
        <p>Ci dispiace, ma la pagina che stai cercando non esiste.</p>
      </div>
    </main>
  )
}