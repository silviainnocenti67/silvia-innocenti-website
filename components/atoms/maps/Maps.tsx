'use client';

import { useState, useRef, useEffect } from "react";
import classes from "./Maps.module.scss";

/**
 * Maps iframe component with loading state.
 */
export default function Maps() {
  /** Loading state. */
  const [isLoading, setIsLoading] = useState(true);
  /** Reference to the iframe element. */
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Check if iframe is already loaded.
    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument?.readyState === 'complete') {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div className={classes.skeleton} />
      )}
      <iframe
        ref={iframeRef}
        src="https://www.google.com/maps?q=Via%20Fiume%209%2C%2035139%20Padova&hl=it&z=16&output=embed"
        width="100%"
        height="400"
        style={{ 
          border: 0,
          display: isLoading ? 'none' : 'block'
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}