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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.234!2d11.856049982534325!3d45.569753847382465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzExLjEiTiAxMcKwNTEnMjEuOCJF!5e0!3m2!1sit!2sit!4v1637000000000!5m2!1sit!2sit"
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