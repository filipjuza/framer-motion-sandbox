import { useEffect, useRef } from "react";

export function useAnimationFrame(callback: (deltaTime: number) => void) {
  const animationFrameRef = useRef<number | null>(null);
  const previousTimestampRef = useRef<DOMHighResTimeStamp | null>(null);
  const startRef = useRef(performance.now());

  const animate = (timestamp: DOMHighResTimeStamp) => {
    if (previousTimestampRef.current) {
      const deltaTime = timestamp - startRef.current;
      callback(deltaTime);
    }

    previousTimestampRef.current = timestamp;
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, []);
}