'use client'

import { createContext, useContext, ReactNode, useRef, Suspense } from 'react';
import { RouteLoader } from '@/components/molecules/route-loader/RouteLoader';

type RouteLoaderContextType = {
  startLoading: () => void;
  stopLoading: () => void;
};

const RouteLoaderContext = createContext<RouteLoaderContextType>({
  startLoading: () => {},
  stopLoading: () => {}
});

export function RouteLoaderProvider({ children }: { children: ReactNode }) {
  const loaderRef = useRef<{ start: () => void; stop: () => void } | null>(null);

  return (
    <RouteLoaderContext.Provider 
      value={{
        startLoading: () => loaderRef.current?.start(),
        stopLoading: () => loaderRef.current?.stop()
      }}
    >
      <Suspense fallback={null}>
        <RouteLoader ref={loaderRef} />
      </Suspense>
      {children}
    </RouteLoaderContext.Provider>
  );
}

export const useRouteLoader = () => useContext(RouteLoaderContext);