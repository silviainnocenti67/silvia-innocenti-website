'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import classes from './BeforeAfterCarousel.module.scss';
import { BeforeAfterPair } from '@/interfaces/Project.interface';

type Props = {
  /** Coppie di immagini prima/dopo. */
  pairs: BeforeAfterPair[];
};

/**
 * Carosello interattivo di comparazioni "prima / dopo".
 * Mostra una comparazione alla volta; la maniglia trascinabile rivela
 * il "prima" sopra il "dopo". Frecce e pallini per cambiare comparazione.
 */
export default function BeforeAfterCarousel({ pairs }: Props) {
  /** Indice della comparazione corrente. */
  const [idx, setIdx] = useState(0);
  /** Posizione della maniglia (0-100%). */
  const [pos, setPos] = useState(50);
  /** Trascinamento in corso. */
  const [dragging, setDragging] = useState(false);
  /** Riferimento al frame per il calcolo della posizione. */
  const frameRef = useRef<HTMLDivElement>(null);

  if (!pairs || pairs.length === 0) return null;
  const pair = pairs[idx];

  /** Aggiorna la posizione della maniglia da una coordinata X. */
  function updateFromClientX(clientX: number) {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }

  /** Cambia comparazione (con wrap-around) e ripristina la maniglia. */
  function go(delta: number) {
    setIdx((prev) => (prev + delta + pairs.length) % pairs.length);
    setPos(50);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.stage}>
        {pairs.length > 1 && (
          <button
            type="button"
            className={`${classes.nav} ${classes.navLeft}`}
            onClick={() => go(-1)}
            aria-label="Comparazione precedente"
          >
            <ChevronLeft />
          </button>
        )}

        <div
          ref={frameRef}
          className={classes.frame}
          onPointerDown={(e) => {
            setDragging(true);
            e.currentTarget.setPointerCapture(e.pointerId);
            updateFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (dragging) updateFromClientX(e.clientX);
          }}
          onPointerUp={(e) => {
            setDragging(false);
            e.currentTarget.releasePointerCapture(e.pointerId);
          }}
        >
          {/* DOPO (base) */}
          <img src={pair.after} alt="Dopo" className={classes.image} draggable={false} />
          <span className={`${classes.tag} ${classes.tagAfter}`}>DOPO</span>

          {/* PRIMA (rivelato sulla sinistra) */}
          <div className={classes.beforeLayer} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src={pair.before} alt="Prima" className={classes.image} draggable={false} />
            <span className={`${classes.tag} ${classes.tagBefore}`}>PRIMA</span>
          </div>

          {/* Maniglia */}
          <div className={classes.divider} style={{ left: `${pos}%` }}>
            <div className={classes.handle}>
              <ChevronLeft className={classes.handleIcon} />
              <ChevronRight className={classes.handleIcon} />
            </div>
          </div>
        </div>

        {pairs.length > 1 && (
          <button
            type="button"
            className={`${classes.nav} ${classes.navRight}`}
            onClick={() => go(1)}
            aria-label="Comparazione successiva"
          >
            <ChevronRight />
          </button>
        )}
      </div>

      {pairs.length > 1 && (
        <div className={classes.dots}>
          {pairs.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`${classes.dot} ${i === idx ? classes.dotActive : ''}`}
              onClick={() => {
                setIdx(i);
                setPos(50);
              }}
              aria-label={`Comparazione ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
