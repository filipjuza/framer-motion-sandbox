import { useEffect, useRef } from "react";

export function useAnimationLoop(callback: (progress: number) => void) {
  const ref = useRef<number>(0);

  ref.current = 1;

  useEffect(() => {
    let start: number | null = null;
    let previousTimestamp: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const delta = timestamp - start;

      if ((previousTimestamp !== timestamp)) {
        callback(Math.floor(delta));
      }

      previousTimestamp = timestamp;
      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }, [callback]);
}