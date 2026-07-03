import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../content/profile";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";

export function About() {
  const { locale, t } = useLanguage();

  return (
    <Section id="about">
      <div className="md:grid md:grid-cols-[minmax(0,1fr)_240px] md:gap-12">
        <Reveal>
          {profile.about[locale].map((paragraph, i) => (
            <p
              key={i}
              className="max-w-[640px] text-[1.0625rem] leading-[1.7] text-fg-muted [&:not(:first-child)]:mt-4"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={140} className="mt-10 md:mt-0">
          <div>
            <h3 className="font-mono text-[13px] text-term">
              <span aria-hidden="true">{"// "}</span>
              {t.about.education}
            </h3>
            <div className="mt-2 space-y-3">
              {profile.education.map((entry) => (
                <div key={entry.institution} className="space-y-0.5">
                  <p className="text-sm font-medium text-fg">{entry.program[locale]}</p>
                  <p className="text-sm text-fg-muted">{entry.institution}</p>
                  <p className="font-mono text-xs text-fg-subtle">{entry.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-mono text-[13px] text-term">
              <span aria-hidden="true">{"// "}</span>
              {t.about.certifications}
            </h3>
            <div className="mt-2 space-y-2">
              {profile.certifications.map((cert) => (
                <p key={cert.name} className="text-sm text-fg-muted">
                  {cert.name} <span className="font-mono text-xs text-fg-subtle">({cert.year})</span>
                </p>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-mono text-[13px] text-term">
              <span aria-hidden="true">{"// "}</span>
              {t.about.languages}
            </h3>
            <div className="mt-2 space-y-2">
              {profile.spokenLanguages.map((lang) => (
                <p key={lang.name.en} className="text-sm text-fg-muted">
                  {lang.name[locale]}<span className="text-fg-subtle">, {lang.level[locale]}</span>
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
