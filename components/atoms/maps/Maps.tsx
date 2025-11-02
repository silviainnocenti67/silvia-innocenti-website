'use client';

import { useState } from "react";
import LoadingCircle from "../loading-circle/LoadingCircle";

/**
 * Maps iframe.
 */
export default function Maps() {
  /** Loading state. */
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
          <LoadingCircle />
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.234!2d11.856049982534325!3d45.569753847382465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzExLjEiTiAxMcKwNTEnMjEuOCJF!5e0!3m2!1sit!2sit!4v1637000000000!5m2!1sit!2sit"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}