import type { SectionDef } from "./types";

export const SECTIONS: readonly SectionDef[] = [
  { id: "about", num: "01", label: { en: "about", tr: "hakkımda" } },
  { id: "experience", num: "02", label: { en: "experience", tr: "deneyim" } },
  { id: "projects", num: "03", label: { en: "projects", tr: "projeler" } },
  { id: "skills", num: "04", label: { en: "skills", tr: "yetenekler" } },
  { id: "contact", num: "05", label: { en: "contact", tr: "iletişim" } },
];
