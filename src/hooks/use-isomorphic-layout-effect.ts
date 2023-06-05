import * as React from 'react';

/**
 * Polymorphic hook for `useEffect` that works in both the browser and SSR.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
