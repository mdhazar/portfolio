import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useLanguage } from "./context/LanguageContext";
import { links } from "./content/links";
import { SkipLink } from "./components/layout/SkipLink";
import { Spotlight } from "./components/layout/Spotlight";
import { MobileNav } from "./components/layout/MobileNav";
import { SideNav } from "./components/layout/SideNav";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";

export function App() {
  const { t } = useLanguage();

  return (
    <>
      <SkipLink />
      <Spotlight />
      <MobileNav />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:px-10">
        <SideNav />
        <main
          id="content"
          tabIndex={-1}
          className="max-w-[860px] pt-14 outline-none lg:pt-0"
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
      <footer className="relative z-10 border-t border-line py-8 text-center font-mono text-[13px] text-fg-subtle">
        <p>
          <span className="text-term">$</span> echo{" "}
          <span className="text-term">"</span>
          {t.footer.echo}
          <span className="text-term">"</span>
        </p>
        <p className="mt-2 text-xs">
          {t.footer.meta} ·{" "}
          <a
            href={links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-fg-muted transition-colors hover:text-accent"
          >
            {t.footer.source}
          </a>
        </p>
      </footer>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
