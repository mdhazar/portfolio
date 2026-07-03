import type { ArchiveProject } from "../../content/types";
import { useLanguage } from "../../context/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { IconLink } from "../ui/IconLink";
import { FolderIcon, GitHubIcon, ExternalIcon } from "../ui/Icons";

export function ArchiveCard({
  project,
  delay,
}: {
  project: ArchiveProject;
  delay?: number;
}) {
  const { locale, t } = useLanguage();

  return (
    <Reveal as="li" delay={delay} className="group relative">
      <div className="flex min-h-[168px] flex-col rounded-md border border-line bg-surface p-5 transition duration-200 ease-out-soft hover:-translate-y-1 hover:border-line-strong hover:shadow-card-hover">
      <div className="flex items-center justify-between">
        <FolderIcon size={20} className="text-term" />
        <span className="relative z-10 flex gap-3">
          <IconLink
            href={project.repoUrl}
            label={t.projects.codeLabel + " " + project.title}
          >
            <GitHubIcon size={18} />
          </IconLink>
          {project.liveUrl && (
            <IconLink
              href={project.liveUrl}
              label={t.projects.liveLabel + " " + project.title}
            >
              <ExternalIcon size={18} />
            </IconLink>
          )}
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-fg transition-colors group-hover:text-accent">
        <a
          href={project.liveUrl ?? project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="before:absolute before:inset-0"
        >
          {project.title}
        </a>
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-fg-muted">
        {project.description[locale]}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-fg-subtle">
        {project.tech.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      </div>
    </Reveal>
  );
}
