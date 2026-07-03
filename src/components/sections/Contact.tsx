import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../content/profile";
import { links } from "../../content/links";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/ButtonLink";
import { IconLink } from "../ui/IconLink";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/Icons";

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" center>
      <div className="mx-auto max-w-[560px] text-center">
        <Reveal>
          <p className="font-display font-semibold text-fg text-[clamp(1.75rem,1.2rem+2.4vw,2.5rem)]">
            {t.contact.statement}
          </p>
        </Reveal>

        <Reveal delay={70}>
          <p className="mt-4 text-fg-muted">{t.contact.blurb}</p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8">
            <ButtonLink href={"mailto:" + profile.email} icon={<MailIcon size={16} />}>
              {t.contact.cta}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-8 flex justify-center gap-5">
            <IconLink href={links.github} label={t.a11y.github}>
              <GitHubIcon size={22} />
            </IconLink>
            <IconLink href={links.linkedin} label={t.a11y.linkedin}>
              <LinkedInIcon size={22} />
            </IconLink>
            <IconLink href={"mailto:" + profile.email} label={t.a11y.email}>
              <MailIcon size={22} />
            </IconLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
