import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: { en: "languages", tr: "diller" },
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    id: "frontend",
    label: { en: "frontend", tr: "frontend" },
    items: ["React", "Next.js (App Router)", "TanStack Start", "React Native", "Redux", "Zustand", "Axios", "Zod", "Tailwind CSS", "Vue.js", "jQuery"],
  },
  {
    id: "backend-data",
    label: { en: "backend & data", tr: "backend & veri" },
    items: ["Node.js", "FastAPI", "REST API design", "Spring Boot", "PostgreSQL", "Supabase", "Prisma", "MySQL", "JWT"],
  },
  {
    id: "integrations-devops",
    label: { en: "integrations & devops", tr: "entegrasyonlar & devops" },
    items: ["HubSpot CRM", "AWeber", "n8n", "Docker", "Git", "CI/CD", "AWS", "Azure", "Firebase", "Postman", "Swagger"],
  },
];
