import { useLanguage } from '../contexts/LanguageContext';
function SkillsSection() {
  const skills = ['JavaScript', 'React.js', 'Node.js'];
  const { language } = useLanguage();
  return (
    <section className="mb-6">
      <h3 className="text-2xl font-l mb-2 dark:text-[#AEBCCF]">{language.skills}</h3>
      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill} className="pr-8 ">
            <h4 className="text-xl font-semibold mb-2 text-[#4338CA] dark:text-[#B7AAFF]">{skill}</h4>
            <p className="text-[#6B7280] dark:text-[#FFFFFF]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;

