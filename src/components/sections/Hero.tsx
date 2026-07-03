import { useTypewriter } from "../../hooks/useTypewriter";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../content/profile";
import { links } from "../../content/links";
import { ButtonLink } from "../ui/ButtonLink";
import { DownloadIcon } from "../ui/Icons";

export function Hero() {
  const { t } = useLanguage();
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const { typed, done } = useTypewriter("whoami", { enabled: !reduced });

  const stagger = (delay: number) => ({
    className:
      "transition-[opacity,transform] duration-[550ms] ease-out-expo motion-reduce:transition-none " +
      (done ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
    style: { transitionDelay: `${delay}ms` },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center lg:min-h-svh"
    >
      <p className="font-mono text-sm">
        <span className="text-term">mdh@portfolio:~$</span>{" "}
        <span className="text-fg-muted">{typed}</span>
        <span aria-hidden="true" className="cursor-blink text-term">
          ▊
        </span>
      </p>

      <div {...stagger(0)}>
        <h1 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.02em] text-fg text-[clamp(2.5rem,1.4rem+4.8vw,4.25rem)]">
          {profile.name}
          <span className="text-term">.</span>
        </h1>
      </div>

      <div {...stagger(80)}>
        <p className="mt-3 font-display font-medium leading-[1.15] tracking-[-0.015em] text-fg-muted text-[clamp(1.5rem,1rem+2.2vw,2.375rem)]">
          {t.hero.role}
        </p>
      </div>

      <div {...stagger(160)}>
        <p className="mt-5 max-w-[560px] text-[1.0625rem] leading-[1.7] text-fg-muted">
          {t.hero.intro1}
          <a
            href={links.company}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-accent"
          >
            {t.hero.introLink}
          </a>
          {t.hero.intro2}
        </p>
      </div>

      <div {...stagger(240)}>
        <p className="mt-6 inline-flex w-max items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-[13px] text-fg-muted">
          <span
            aria-hidden="true"
            className="status-dot h-2 w-2 rounded-full bg-term"
          />
          {t.hero.status}
        </p>
      </div>

      <div {...stagger(320)}>
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href={links.resume} external download icon={<DownloadIcon size={16} />}>
            {t.hero.ctaResume}
          </ButtonLink>
          <ButtonLink href="#projects" variant="outline">
            {t.hero.ctaProjects}
          </ButtonLink>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-0 hidden font-mono text-[13px] text-fg-subtle lg:block"
      >
        <span>{"// " + t.hero.scroll}</span>
        <span className="scroll-line mt-2 ml-1 block h-8 w-px bg-fg-subtle" />
      </div>
    </section>
  );
}
