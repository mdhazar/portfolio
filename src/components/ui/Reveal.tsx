import type { ReactNode, Ref } from "react";
import { useReveal } from "../../hooks/useReveal";

const base =
  "transition-[opacity,transform] duration-[550ms] ease-out-expo motion-reduce:transition-none ";
const hiddenCls = "opacity-0 translate-y-4";
const shownCls = "opacity-100 translate-y-0";

export function Reveal({
  as,
  delay,
  className,
  children,
}: {
  as?: "div" | "li" | "header" | "footer";
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const { ref, shown } = useReveal();
  const Comp = as ?? "div";
  return (
    <Comp
      ref={ref as Ref<HTMLDivElement & HTMLLIElement & HTMLElement>}
      style={{ transitionDelay: delay ? delay + "ms" : undefined }}
      className={
        base + (shown ? shownCls : hiddenCls) + (className ? " " + className : "")
      }
    >
      {children}
    </Comp>
  );
}
