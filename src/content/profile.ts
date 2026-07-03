import type { Profile } from "./types";
import { links } from "./links";

export const profile: Profile = {
  name: "Mehmet Derya Hazar",
  email: links.email,
  about: {
    en: [
      "My path into engineering ran through language and data. After a B.A. in Philosophy from METU, I spent three years in quality control at Veeva Systems and JoVE, verifying datasets with SQL at 99% accuracy, running linguistic QC on machine-translated content, and writing automation tools that removed the repetitive parts of the job.",
      "Wanting to build those tools instead of just using them, I trained as a full-stack developer at Workintech. At Undetectable AI / TruthScan I own the Python and FastAPI services behind our AI-detection APIs, the Prisma and Supabase data model, and the HubSpot automation that feeds our sales pipeline.",
    ],
    tr: [
      "Mühendisliğe giden yolum dil ve veriden geçti. ODTÜ Felsefe lisansının ardından Veeva Systems ve JoVE'de üç yıl kalite kontrol yaptım; verileri SQL ile %99 doğrulukla doğruladım, makine çevirisi içeriğin dilbilimsel kalite kontrolünü yürüttüm ve işin tekrarlayan kısımlarını ortadan kaldıran otomasyon araçları yazdım.",
      "Bu araçları kullanmak yerine geliştirmek istediğim için Workintech'te full-stack geliştirici olarak yetiştim. Undetectable AI / TruthScan'da yapay zekâ tespit API'lerinin arkasındaki Python ve FastAPI servislerini, Prisma ile Supabase veri modelini ve satış hattımızı besleyen HubSpot otomasyonunu ben yönetiyorum.",
    ],
  },
  education: [
    {
      institution: "Workintech",
      program: { en: "Full Stack Development Program", tr: "Full Stack Geliştirme Programı" },
      period: "2024 – 2025",
    },
    {
      institution: "Middle East Technical University",
      program: { en: "B.A. Philosophy", tr: "Felsefe Lisansı" },
      period: "2016 – 2020",
    },
  ],
  certifications: [
    { name: "Insider Developer Bootcamp, Insider", year: 2025 },
    { name: "Full Stack Development, Workintech", year: 2025 },
    { name: "Frontend Development, Workintech", year: 2024 },
    { name: "CS50P: Introduction to Programming with Python, Harvard University", year: 2023 },
  ],
  spokenLanguages: [
    { name: { en: "Turkish", tr: "Türkçe" }, level: { en: "Native", tr: "Ana dil" } },
    { name: { en: "English", tr: "İngilizce" }, level: { en: "Advanced", tr: "İleri seviye" } },
    { name: { en: "German", tr: "Almanca" }, level: { en: "Beginner", tr: "Başlangıç" } },
  ],
};
