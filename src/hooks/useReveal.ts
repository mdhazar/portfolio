import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { useMediaQuery } from "./useMediaQuery";

export function useReveal(opts?: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}): { ref: RefObject<HTMLDivElement | null>; shown: boolean } {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -10% 0px",
    once = true,
  } = opts ?? {};

  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // The observer runs even under reduced motion (the fade is suppressed by
    // `motion-reduce:transition-none`) so `revealed` latches for every element
    // the user has actually seen; that way, disabling reduced motion
    // mid-session can't hide content that was already visible.
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) {
              observer.unobserve(entry.target);
              observer.disconnect();
            }
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, shown: revealed || reducedMotion };
}
