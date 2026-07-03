import type { ReactNode } from "react";

const base =
  "inline-flex items-center gap-2 rounded-sm px-6 py-3 text-[15px] font-medium transition duration-150 ease-out-soft";

const variants = {
  solid:
    "bg-accent text-canvas hover:bg-accent-hover hover:-translate-y-px active:translate-y-0 active:bg-accent-active",
  outline:
    "border border-line-strong text-fg hover:border-accent hover:text-accent",
} as const;

export function ButtonLink({
  href,
  variant = "solid",
  external,
  download,
  icon,
  className,
  children,
}: {
  href: string;
  variant?: "solid" | "outline";
  external?: boolean;
  download?: boolean;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={base + " " + variants[variant] + (className ? " " + className : "")}
    >
      {icon}
      {children}
    </a>
  );
}
