import * as React from 'react';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

/**
 * Determines if the component is mounted.
 *
 * @returns a function that returns `true` if the component is mounted.
 */
export function useIsMounted() {
  const isMountedRef = React.useRef(false);

  useIsomorphicLayoutEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return React.useCallback(() => isMountedRef.current, []);
}
