import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ExternalIcon } from "../ui/Icons";
import { useLanguage } from "../../context/LanguageContext";
import { experience } from "../../content/experience";
import { formatPeriod } from "../../lib/formatPeriod";

export function Experience() {
  const { locale, t } = useLanguage();

  return (
    <Section id="experience">
      <ol>
        {experience.map((entry, i) => {
          const isLast = i === experience.length - 1;
          return (
            <Reveal
              as="li"
              key={entry.id}
              delay={Math.min(i * 70, 350)}
              className="md:grid md:grid-cols-[150px_24px_minmax(0,1fr)] md:gap-x-4 pb-12 last:pb-0 relative"
            >
              <p className="pt-1 font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle md:text-right">
                {formatPeriod(entry.start, entry.end, locale, t.experience.present)}
              </p>

              <div aria-hidden="true" className="relative hidden md:block">
                <span
                  className={
                    "absolute left-1/2 top-2 w-px -translate-x-1/2 bg-line " +
                    (isLast ? "h-10" : "bottom-0")
                  }
                  style={
                    isLast
                      ? {
                          maskImage: "linear-gradient(black, transparent)",
                          WebkitMaskImage: "linear-gradient(black, transparent)",
                        }
                      : undefined
                  }
                />
                <span
                  className={
                    "absolute left-1/2 top-1.5 h-[11px] w-[11px] -translate-x-1/2 rounded-full border-2 border-term " +
                    (entry.end === null ? "bg-term ring-4 ring-term/15" : "bg-canvas")
                  }
                />
              </div>

              <div className="mt-2 rounded-md py-3 transition-colors duration-200 hover:bg-surface md:-mx-4 md:mt-0 md:px-4">
                <h3 className="text-lg font-semibold text-fg">
                  {entry.role[locale]}{" "}
                  <span aria-hidden="true" className="text-fg-subtle">
                    ·
                  </span>{" "}
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline group/link inline-flex items-center gap-1 text-accent"
                    >
                      {entry.company}
                      <ExternalIcon
                        size={12}
                        className="transition-transform duration-150 group-hover/link:translate-x-px"
                      />
                    </a>
                  ) : (
                    <span className="text-fg-muted">{entry.company}</span>
                  )}
                </h3>

                <ul className="mt-2 space-y-1.5">
                  {entry.highlights[locale].map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-relaxed text-fg-muted">
                      <span aria-hidden="true" className="mt-px text-term">
                        ▹
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {entry.tech.map((x) => (
                    <Tag key={x}>{x}</Tag>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
