import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "../../content/sections";
import { links } from "../../content/links";
import { useLanguage } from "../../context/LanguageContext";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { IconLink } from "../ui/IconLink";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageToggle } from "../ui/LanguageToggle";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from "../ui/Icons";

export function MobileNav() {
  const { locale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const close = () => setOpen(false);

  useFocusTrap(open, panelRef, close);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-line bg-canvas/80 px-6 backdrop-blur-md lg:hidden">
        <a
          href="#top"
          className="font-mono text-lg font-semibold text-fg transition-colors hover:text-accent"
        >
          <span className="text-term">~/</span>mdh
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-fg-muted hover:text-fg"
          >
            {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.a11y.primaryNav}
          ref={panelRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-elevated/95 backdrop-blur-lg lg:hidden"
        >
          <button
            type="button"
            onClick={close}
            aria-label={t.a11y.closeMenu}
            className="absolute right-6 top-2 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-fg-muted hover:text-fg"
          >
            <XIcon size={20} />
          </button>

          <nav aria-label={t.a11y.primaryNav}>
            <ul className="flex flex-col items-center gap-7">
              {SECTIONS.map((def) => (
                <li key={def.id}>
                  <a
                    href={"#" + def.id}
                    onClick={close}
                    className="group flex flex-col items-center"
                  >
                    <span
                      aria-hidden="true"
                      className="block font-mono text-xs text-term"
                    >
                      {def.num}
                    </span>
                    <span className="font-mono text-[15px] uppercase tracking-[0.14em] text-fg">
                      {def.label[locale]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 flex gap-6">
            <IconLink href={links.github} label={t.a11y.github}>
              <GitHubIcon size={20} />
            </IconLink>
            <IconLink href={links.linkedin} label={t.a11y.linkedin}>
              <LinkedInIcon size={20} />
            </IconLink>
            <IconLink href={"mailto:" + links.email} label={t.a11y.email}>
              <MailIcon size={20} />
            </IconLink>
          </div>
        </div>
      )}
    </>
  );
}
