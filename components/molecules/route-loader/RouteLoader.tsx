'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import LoaderPage from '../loader-page/LoaderPage';

export const RouteLoader = forwardRef<{ start: () => void; stop: () => void }>(
  function RouteLoader(props, ref) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const lastPathnameRef = useRef(pathname);

    // Esponi metodi per controllo manuale
    useImperativeHandle(ref, () => ({
      start: () => {
        setIsLoading(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          console.warn('⚠️ Loading timeout - forcing close');
          setIsLoading(false);
        }, 5000);
      },
      stop: () => {
        setIsLoading(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    }));

    useEffect(() => {
      if (lastPathnameRef.current !== pathname) {
        setIsLoading(false);
        lastPathnameRef.current = pathname;
        
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    }, [pathname, searchParams]);

    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        
        if (!link || !link.href) return;
        
        if (!link.href.startsWith(window.location.origin)) return;
        
        if (link.getAttribute('target') === '_blank') return;
        if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) return;
        
        const linkUrl = new URL(link.href);
        const currentUrl = new URL(window.location.href);
        
        if (linkUrl.pathname === currentUrl.pathname && 
            linkUrl.search === currentUrl.search &&
            linkUrl.hash === currentUrl.hash) {
          return;
        }
        
        setIsLoading(true);
        
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          console.warn('⚠️ Loading timeout - forcing close');
          setIsLoading(false);
        }, 5000);
      };

      document.addEventListener('click', handleClick);
      
      return () => {
        document.removeEventListener('click', handleClick);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [pathname]);

    if (!isLoading) return null;

    return (
      <LoaderPage />
    );
  }
);