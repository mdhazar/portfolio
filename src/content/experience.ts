import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "undetectable",
    company: "Undetectable AI / TruthScan",
    url: "https://undetectable.ai",
    role: { en: "Full-Stack Developer", tr: "Full-Stack Geliştirici" },
    start: "2025-12",
    end: null,
    highlights: {
      en: [
        "Build and maintain Python + FastAPI backend services that wrap AI-detection models and expose REST endpoints consumed by a Next.js front end.",
        "Develop dashboard features with Next.js, React, and TypeScript.",
        "Design and manage PostgreSQL data with Supabase and Prisma, including schema design and migrations.",
        "Build integrations with HubSpot CRM, AWeber, and n8n plus AI-powered automation workflows, partnering with the sales team on lead and customer-data flow.",
      ],
      tr: [
        "Yapay zekâ tespit modellerini saran ve Next.js ön yüzü tarafından tüketilen REST uç noktaları sunan Python + FastAPI backend servisleri geliştiriyor ve sürdürüyorum.",
        "Next.js, React ve TypeScript ile panel özellikleri geliştiriyorum.",
        "Supabase ve Prisma ile PostgreSQL verisini tasarlıyor ve yönetiyorum; şema tasarımı ve migration'lar dâhil.",
        "HubSpot CRM, AWeber ve n8n entegrasyonlarının yanı sıra yapay zekâ destekli otomasyon akışları kuruyor, satış ekibiyle birlikte müşteri adayı ve müşteri verisi akışını yürütüyorum.",
      ],
    },
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "HubSpot", "n8n"],
  },
  {
    id: "violida",
    company: "Violida Tech Solutions",
    role: { en: "Full-Stack Developer", tr: "Full-Stack Geliştirici" },
    start: "2025-01",
    end: "2025-11",
    highlights: {
      en: [
        "Built a beauty-artist mobile app for iOS and Android with React Native, focusing on responsive UI and front-end performance.",
        "Designed relational PostgreSQL schemas and containerized services with Docker.",
      ],
      tr: [
        "React Native ile iOS ve Android için bir güzellik uzmanı mobil uygulaması geliştirdim; duyarlı arayüz ve ön yüz performansına odaklandım.",
        "İlişkisel PostgreSQL şemaları tasarladım ve servisleri Docker ile konteynerleştirdim.",
      ],
    },
    tech: ["React Native", "PostgreSQL", "Docker"],
  },
  {
    id: "jove",
    company: "JoVE",
    role: { en: "Quality Controller", tr: "Kalite Kontrol Uzmanı" },
    start: "2024-02",
    end: "2024-12",
    highlights: {
      en: [
        "Performed linguistic QC on machine-translated content at 98% accuracy.",
        "Built two automation tools that improved subtitle-processing efficiency by 40%.",
      ],
      tr: [
        "Makine çevirisi içerik üzerinde %98 doğrulukla dilbilimsel kalite kontrol yaptım.",
        "Altyazı işleme verimliliğini %40 artıran iki otomasyon aracı geliştirdim.",
      ],
    },
    tech: ["Python", "Automation"],
  },
  {
    id: "veeva",
    company: "Veeva Systems",
    role: { en: "Quality Controller", tr: "Kalite Kontrol Uzmanı" },
    start: "2021",
    end: "2024",
    highlights: {
      en: [
        "Organized and verified data with SQL at a 99% accuracy rate.",
        "Improved query and retrieval performance through structured tagging.",
      ],
      tr: [
        "Verileri SQL ile düzenledim ve %99 doğruluk oranıyla doğruladım.",
        "Yapılandırılmış etiketleme ile sorgu ve erişim performansını iyileştirdim.",
      ],
    },
    tech: ["SQL"],
  },
];
