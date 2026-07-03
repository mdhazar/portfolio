import type { FeaturedProject, ArchiveProject } from "./types";
import jqueryEcommerceImg from "../assets/projects/jquery-ecommerce.webp";
import reactEcommerceImg from "../assets/projects/react-ecommerce.webp";
import subtitleSplitterImg from "../assets/projects/subtitle-splitter.webp";
import andorImg from "../assets/projects/andor.webp";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "jquery-ecommerce",
    title: "jQuery Ecommerce",
    description: {
      en: "An ecommerce storefront in vanilla jQuery: searchable, filterable product listings with pagination, product modals, and a cart and favorites persisted in localStorage.",
      tr: "Yalın jQuery ile geliştirilmiş bir mağaza: sayfalama, arama ve filtreleme özellikli ürün listeleri, ürün modalları ve localStorage'da saklanan sepet ve favoriler.",
    },
    tech: ["JavaScript", "jQuery", "AJAX"],
    repoUrl: "https://github.com/mdhazar/Insider-Bootcamp/tree/main/3.%20Hafta%20Projesi",
    liveUrl: "https://mdhazar.github.io/Insider-Bootcamp/3.%20Hafta%20Projesi/",
    image: {
      src: jqueryEcommerceImg,
      width: 692,
      height: 630,
      alt: {
        en: "jQuery Ecommerce storefront screenshot",
        tr: "jQuery Ecommerce mağaza ekran görüntüsü",
      },
    },
    fakePath: "~/projects/jquery-ecommerce",
  },
  {
    id: "react-ecommerce",
    title: "React Ecommerce",
    description: {
      en: "A single-page storefront with product listings, filtering, and a cart, built with React and Tailwind CSS.",
      tr: "React ve Tailwind CSS ile geliştirilmiş; ürün listeleri, filtreleme ve sepet içeren tek sayfalık bir mağaza.",
    },
    tech: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/mdhazar/ecommerce",
    liveUrl: "https://ecommerce-eta-one-57.vercel.app",
    image: {
      src: reactEcommerceImg,
      width: 880,
      height: 552,
      alt: {
        en: "React Ecommerce storefront screenshot",
        tr: "React Ecommerce mağaza ekran görüntüsü",
      },
    },
    fakePath: "~/projects/react-ecommerce",
  },
  {
    id: "subtitle-splitter",
    title: "Subtitle Splitter",
    description: {
      en: "A Python tool that segments subtitle files on predefined timecodes, automating a slow manual step in the subtitle-processing pipeline.",
      tr: "Altyazı dosyalarını önceden tanımlı zaman kodlarına göre bölen; altyazı işleme akışındaki yavaş bir manuel adımı otomatikleştiren bir Python aracı.",
    },
    tech: ["Python"],
    repoUrl: "https://github.com/mdhazar/subtitle-splitter",
    image: {
      src: subtitleSplitterImg,
      width: 480,
      height: 270,
      alt: {
        en: "Subtitle Splitter command-line tool screenshot",
        tr: "Subtitle Splitter komut satırı aracı ekran görüntüsü",
      },
    },
    fakePath: "~/projects/subtitle-splitter",
  },
  {
    id: "andor",
    title: "Andor",
    description: {
      en: "A static fan site for the TV series, hand-built with semantic HTML and CSS as a first-principles layout and responsive-design exercise.",
      tr: "TV dizisi için elle geliştirilmiş statik bir hayran sitesi; anlamsal HTML ve CSS ile temel ilkelere dayalı bir yerleşim ve duyarlı tasarım çalışması.",
    },
    tech: ["HTML", "CSS"],
    repoUrl: "https://github.com/mdhazar/Insider-Bootcamp/tree/main/1.%20Hafta%20Projesi",
    liveUrl: "https://mdhazar.github.io/Insider-Bootcamp/1.%20Hafta%20Projesi/",
    image: {
      src: andorImg,
      width: 1200,
      height: 835,
      alt: {
        en: "Andor fan site screenshot",
        tr: "Andor hayran sitesi ekran görüntüsü",
      },
    },
    fakePath: "~/projects/andor",
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    id: "nextjs-ecommerce",
    title: "Next.js Ecommerce",
    description: {
      en: "A full-stack storefront on the Next.js App Router with Auth.js authentication, a product catalog, and cart flows.",
      tr: "Next.js App Router üzerinde kurulu; Auth.js kimlik doğrulaması, ürün kataloğu ve sepet akışları içeren full-stack bir mağaza.",
    },
    tech: ["Next.js", "TypeScript", "Auth.js"],
    repoUrl: "https://github.com/mdhazar/nextjs-ecommerce",
    liveUrl: "https://nextjs-ecommerce-green.vercel.app/login",
  },
  {
    id: "turkish-ipa-converter",
    title: "Turkish IPA Converter",
    description: {
      en: "A web tool that transcribes Turkish text into IPA notation, built to sharpen pronunciation accuracy for murf.ai text-to-speech voices.",
      tr: "Türkçe metni IPA gösterimine çeviren; murf.ai metin okuma seslerinin telaffuz doğruluğunu artırmak için geliştirilmiş bir web aracı.",
    },
    tech: ["JavaScript"],
    repoUrl: "https://github.com/mdhazar/Turkish-Ipa-Converter",
    liveUrl: "https://mdhazar.github.io/Turkish-Ipa-Converter/",
  },
  {
    id: "pizza-order",
    title: "Pizza Order",
    description: {
      en: "A multi-step ordering flow with form validation and order tracking.",
      tr: "Form doğrulaması ve sipariş takibi içeren çok adımlı bir sipariş akışı.",
    },
    tech: ["React", "React Router", "Axios"],
    repoUrl: "https://github.com/mdhazar/pizza-order",
    liveUrl: "https://pizza-order-orpin.vercel.app",
  },
  {
    id: "cv-application",
    title: "CV Application",
    description: {
      en: "A CV builder with live preview and PDF export.",
      tr: "Canlı önizleme ve PDF dışa aktarma özellikli bir CV oluşturucu.",
    },
    tech: ["React"],
    repoUrl: "https://github.com/mdhazar/CV-Application",
    liveUrl: "https://cv-application-one-mu.vercel.app",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: {
      en: "This site: a typed bilingual content model, hand-built interactions, and zero UI libraries.",
      tr: "Bu site: türlenmiş iki dilli içerik modeli, elle geliştirilmiş etkileşimler ve sıfır UI kütüphanesi.",
    },
    tech: ["React 19", "TypeScript", "Tailwind CSS v4"],
    repoUrl: "https://github.com/mdhazar/portfolio",
  },
];
