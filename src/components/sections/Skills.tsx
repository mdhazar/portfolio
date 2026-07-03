import { useLanguage } from "../../context/LanguageContext";
import { skillGroups } from "../../content/skills";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";

export function Skills() {
  const { locale } = useLanguage();

  return (
    <Section id="skills">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} as="div" delay={i * 70}>
            <h3 className="mb-3 font-mono text-[13px] text-term">
              <span aria-hidden="true">{"// "}</span>
              {group.label[locale]}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
