import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export function Spotlight() {
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const ref = useRef<HTMLDivElement | null>(null);
  const coords = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!fine) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (event: PointerEvent) => {
      coords.current.x = event.clientX;
      coords.current.y = event.clientY;
      frame.current ??= requestAnimationFrame(() => {
        frame.current = null;
        el.style.setProperty("--spot-x", coords.current.x + "px");
        el.style.setProperty("--spot-y", coords.current.y + "px");
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
        frame.current = null;
      }
    };
  }, [fine]);

  if (!fine) return null;

  return (
    <div
      aria-hidden="true"
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background:
          "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 30%), var(--color-glow), transparent 80%)",
      }}
    />
  );
}
