import { SECTIONS } from "../../content/sections";
import { links } from "../../content/links";
import { useLanguage } from "../../context/LanguageContext";
import { useScrollspy } from "../../hooks/useScrollspy";
import { IconLink } from "../ui/IconLink";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageToggle } from "../ui/LanguageToggle";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/Icons";

export function SideNav() {
  const { locale, t } = useLanguage();
  const ids = SECTIONS.map((s) => s.id);
  const active = useScrollspy(ids);

  return (
    <header className="hidden lg:flex sticky top-0 h-screen flex-col py-16">
      <a
        href="#top"
        className="font-mono text-lg font-semibold text-fg transition-colors hover:text-accent"
      >
        <span className="text-term">~/</span>mdh
      </a>

      <nav aria-label={t.a11y.primaryNav} className="mt-16">
        <ul className="space-y-1">
          {SECTIONS.map((def) => {
            const isActive = active === def.id;
            return (
              <li key={def.id}>
                <a
                  href={"#" + def.id}
                  aria-current={isActive ? "location" : undefined}
                  className="group flex items-center gap-3 py-2.5"
                >
                  <span
                    aria-hidden="true"
                    className={
                      "font-mono text-xs " +
                      (isActive ? "text-term" : "text-term/70")
                    }
                  >
                    {def.num}
                  </span>
                  <span
                    aria-hidden="true"
                    className={
                      "h-px transition-all duration-300 ease-out-soft " +
                      (isActive
                        ? "w-12 bg-term"
                        : "w-6 bg-line-strong group-hover:w-10 group-hover:bg-fg-muted")
                    }
                  />
                  <span
                    className={
                      "font-mono text-xs uppercase tracking-[0.14em] transition-colors duration-300 " +
                      (isActive ? "text-fg" : "text-fg-subtle group-hover:text-fg")
                    }
                  >
                    {def.label[locale]}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto">
        <div className="flex gap-4">
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
        <div className="mt-5 w-max border-t border-line pt-5 flex gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
