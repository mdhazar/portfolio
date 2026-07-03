import { useLanguage } from "../../context/LanguageContext";
import { featuredProjects, archiveProjects } from "../../content/projects";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ArchiveCard } from "./ArchiveCard";

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <div className="space-y-16 md:space-y-24">
        {featuredProjects.map((p, i) => (
          <FeaturedProjectCard key={p.id} project={p} flip={i % 2 === 1} />
        ))}
      </div>
      <div className="mt-20">
        <Reveal>
          <h3 className="font-mono text-[13px] text-term">
            <span aria-hidden="true">{"// "}</span>
            {t.projects.more}
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {archiveProjects.map((p, i) => (
            <ArchiveCard key={p.id} project={p} delay={Math.min(i * 70, 350)} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
