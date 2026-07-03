import type { ReactNode } from "react";

export function IconLink({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const isExternal = !href.startsWith("mailto:") && !href.startsWith("#");
  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={
        "inline-flex text-fg-muted transition duration-150 ease-out-soft hover:text-accent hover:-translate-y-0.5 focus-visible:text-accent " +
        (className ?? "")
      }
    >
      {children}
    </a>
  );
}
