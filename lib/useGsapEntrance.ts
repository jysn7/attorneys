import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Hook to animate an element in on mount (fade+up) using GSAP.
 * No styling or layout is changed, only opacity/transform for entrance.
 * @param delay Optional delay in seconds
 */
export function useGsapEntrance(delay = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay, ease: "power2.out" }
      );
    }
  }, [delay]);
  return ref;
}
