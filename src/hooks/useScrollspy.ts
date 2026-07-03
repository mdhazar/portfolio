import { useEffect, useRef, useState } from "react";

export function useScrollspy(
  ids: readonly string[],
  rootMargin = "-24% 0px -64% 0px",
): string | null {
  const [active, setActive] = useState<string | null>(null);
  const visible = useRef<Set<string>>(new Set());
  const atBottom = useRef(false);
  const key = ids.join(",");

  useEffect(() => {
    visible.current = new Set();

    const pickActive = () => {
      // Bottom-of-page always wins: the last section is active even if it
      // never reaches the observer band, and this survives async IO callbacks.
      const last = ids.length > 0 ? ids[ids.length - 1] : undefined;
      if (atBottom.current && last) {
        setActive(last);
        return;
      }
      let next: string | null = null;
      for (const id of ids) {
        if (visible.current.has(id)) {
          next = id;
        }
      }
      setActive(next);
    };

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const id = entry.target.id;
            if (entry.isIntersecting) {
              visible.current.add(id);
            } else {
              visible.current.delete(id);
            }
          }
          pickActive();
        },
        { rootMargin, threshold: 0 },
      );

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    }

    const onScroll = () => {
      atBottom.current =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2;
      pickActive();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `key` is the stable string proxy for `ids`
  }, [key, rootMargin]);

  return active;
}
