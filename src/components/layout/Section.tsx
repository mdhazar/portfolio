import type { ReactNode } from "react";
import type { SectionId } from "../../content/types";
import { SECTIONS } from "../../content/sections";
import { useLanguage } from "../../context/LanguageContext";
import { Reveal } from "../ui/Reveal";

export function Section({
  id,
  center,
  children,
}: {
  id: SectionId;
  center?: boolean;
  children: ReactNode;
}) {
  const { locale } = useLanguage();
  const def = SECTIONS.find((section) => section.id === id);

  if (!def) {
    return <>{children}</>;
  }

  const heading = (
    <h2
      id={id + "-title"}
      className="font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-fg"
    >
      <span aria-hidden="true" className="mr-2 font-mono text-base font-normal text-term">
        {def.num}.
      </span>
      {def.label[locale]}
    </h2>
  );

  return (
    <section
      id={id}
      aria-labelledby={id + "-title"}
      className="py-20 lg:py-28 scroll-mt-24 lg:scroll-mt-8"
    >
      <Reveal>
        {center ? (
          <div className="flex items-center justify-center gap-4 text-center">
            <span aria-hidden="true" className="h-px max-w-24 flex-1 bg-line" />
            {heading}
            <span aria-hidden="true" className="h-px max-w-24 flex-1 bg-line" />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {heading}
            <span aria-hidden="true" className="h-px max-w-60 flex-1 bg-line" />
          </div>
        )}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
