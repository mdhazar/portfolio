import type { FeaturedProject } from "../../content/types";
import { useLanguage } from "../../context/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { IconLink } from "../ui/IconLink";
import { GitHubIcon, ExternalIcon } from "../ui/Icons";

export function FeaturedProjectCard({
  project,
  flip,
}: {
  project: FeaturedProject;
  flip: boolean;
}) {
  const { locale, t } = useLanguage();
  const primaryUrl = project.liveUrl ?? project.repoUrl;
  const primaryLabel =
    (project.liveUrl ? t.projects.liveLabel : t.projects.codeLabel) +
    " " +
    project.title;

  return (
    <Reveal as="div" className="group">
      <div className="hidden grid-cols-12 items-center md:grid">
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={primaryLabel}
          className={
            "col-span-7 row-start-1 " + (flip ? "col-start-6" : "col-start-1")
          }
        >
          <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-shadow duration-200 group-hover:shadow-card-hover">
            <Frame project={project} />
          </div>
        </a>
        <div
          className={
            "relative z-10 col-span-6 row-start-1 " +
            (flip ? "col-start-1 text-left" : "col-start-7 text-right")
          }
        >
          <p className="font-mono text-[13px] text-term">
            <span aria-hidden="true">{"// "}</span>
            {t.projects.featured}
          </p>
          <h3 className="mt-2 font-display text-[1.375rem] font-semibold">
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg transition-colors hover:text-accent"
            >
              {project.title}
            </a>
          </h3>
          <div className="mt-3 rounded-md border border-line bg-surface p-6 text-[15px] leading-relaxed text-fg-muted shadow-card">
            {project.description[locale]}
          </div>
          <TechList
            tech={project.tech}
            className={
              "mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-fg-subtle " +
              (flip ? "justify-start" : "justify-end")
            }
          />
          <Links
            project={project}
            className={"mt-3 flex gap-4 " + (flip ? "justify-start" : "justify-end")}
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-card md:hidden">
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={primaryLabel}
          className="block"
        >
          <Frame project={project} />
        </a>
        <div className="p-5">
          <p className="font-mono text-[13px] text-term">
            <span aria-hidden="true">{"// "}</span>
            {t.projects.featured}
          </p>
          <h3 className="mt-2 font-display text-[1.375rem] font-semibold">
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg transition-colors hover:text-accent"
            >
              {project.title}
            </a>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">
            {project.description[locale]}
          </p>
          <TechList
            tech={project.tech}
            className="mt-3 flex flex-wrap justify-start gap-x-4 gap-y-1 font-mono text-xs text-fg-subtle"
          />
          <Links project={project} className="mt-4 flex justify-start gap-4" />
        </div>
      </div>
    </Reveal>
  );
}

function Frame({ project }: { project: FeaturedProject }) {
  const { locale } = useLanguage();
  return (
    <>
      <div
        className="flex h-8 items-center gap-1.5 border-b border-line px-3"
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="mx-auto font-mono text-xs text-fg-subtle">
          {project.fakePath}
        </span>
      </div>
      <img
        src={project.image.src}
        alt={project.image.alt[locale]}
        width={project.image.width}
        height={project.image.height}
        loading="lazy"
        decoding="async"
        className="featured-shot aspect-[16/10] w-full object-cover object-top"
      />
    </>
  );
}

function TechList({ tech, className }: { tech: string[]; className: string }) {
  return (
    <ul className={className}>
      {tech.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function Links({
  project,
  className,
}: {
  project: FeaturedProject;
  className: string;
}) {
  const { t } = useLanguage();
  return (
    <div className={className}>
      <IconLink
        href={project.repoUrl}
        label={t.projects.codeLabel + " " + project.title}
      >
        <GitHubIcon size={20} />
      </IconLink>
      {project.liveUrl && (
        <IconLink
          href={project.liveUrl}
          label={t.projects.liveLabel + " " + project.title}
        >
          <ExternalIcon size={20} />
        </IconLink>
      )}
    </div>
  );
}
