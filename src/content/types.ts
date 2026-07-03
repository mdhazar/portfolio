export const LOCALES = ["en", "tr"] as const;
export type Locale = (typeof LOCALES)[number];
export type Localized<T = string> = Record<Locale, T>;
export type SectionId = "about" | "experience" | "projects" | "skills" | "contact";
export interface SectionDef { id: SectionId; num: string; label: Localized; }
export interface UIStrings {
  hero: { role: string; intro1: string; introLink: string; intro2: string; status: string; ctaResume: string; ctaProjects: string; scroll: string; };
  about: { education: string; certifications: string; languages: string; };
  experience: { present: string; };
  projects: { featured: string; more: string; codeLabel: string; liveLabel: string; };
  contact: { statement: string; blurb: string; cta: string; };
  footer: { echo: string; meta: string; source: string; };
  a11y: { skipToContent: string; primaryNav: string; openMenu: string; closeMenu: string; switchToLight: string; switchToDark: string; switchLanguage: string; github: string; linkedin: string; email: string; };
}
export interface EducationEntry { institution: string; program: Localized; period: string; }
export interface Certification { name: string; year: number; }
export interface SpokenLanguage { name: Localized; level: Localized; }
export interface Profile { name: string; email: string; about: Localized<string[]>; education: EducationEntry[]; certifications: Certification[]; spokenLanguages: SpokenLanguage[]; }
export interface ExperienceEntry { id: string; company: string; url?: string; role: Localized; start: string; end: string | null; highlights: Localized<string[]>; tech: string[]; }
export interface ProjectBase { id: string; title: string; description: Localized; tech: string[]; repoUrl: string; liveUrl?: string; }
export interface ProjectImage { src: string; width: number; height: number; alt: Localized; }
export interface FeaturedProject extends ProjectBase { image: ProjectImage; fakePath: string; }
export type ArchiveProject = ProjectBase;
export interface SkillGroup { id: string; label: Localized; items: string[]; }
