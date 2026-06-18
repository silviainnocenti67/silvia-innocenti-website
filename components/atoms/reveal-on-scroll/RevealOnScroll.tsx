'use client';

import { ReactNode, CSSProperties, useRef } from 'react';
import { motion, useInView } from 'motion/react';

type Props = {
  /** Contenuto da animare. */
  children: ReactNode;
  /** Classe CSS applicata al contenitore animato. */
  className?: string;
  /** Stile inline aggiuntivo. */
  style?: CSSProperties;
  /** Spostamento verticale iniziale (px). */
  y?: number;
  /** Durata animazione (s). */
  duration?: number;
  /** Frazione dell'elemento visibile per considerarlo "in view". */
  amount?: number;
  /** Se true (default) l'animazione si gioca una sola volta; se false si rigioca a ogni scroll. */
  once?: boolean;
  /** Se true anima subito al montaggio (per elementi sopra la piega, es. titoli). */
  immediate?: boolean;
  /** Ritardo prima di animare (s). */
  delay?: number;
};

/**
 * Anima il contenuto facendolo comparire dal basso quando entra nel viewport.
 * Di default si gioca una sola volta (once = true).
 */
export default function RevealOnScroll({
  children,
  className,
  style,
  y = 40,
  duration = 0.6,
  amount = 0.2,
  once = true,
  immediate = false,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once });
  const show = immediate || inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
