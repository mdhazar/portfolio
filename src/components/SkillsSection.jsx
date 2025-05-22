import { useLanguage } from "../contexts/LanguageContext";

function SkillsSection() {
  const { language } = useLanguage();

  const skills = [
    {
      name: "JavaScript/TypeScript",

      category: "Frontend",
      icon: "💻",
      description: "ES6+, DOM Manipulation, Async Programming",
    },
    {
      name: "React.js",

      category: "Frontend",
      icon: "⚛️",
      description: "Hooks, Context API, Custom Components",
    },
    {
      name: "Node.js",

      category: "Backend",
      icon: "🟢",
      description: "Express.js, REST APIs, Middleware",
    },
    {
      name: "Java",

      category: "Backend",
      icon: "☕",
      description: "OOP, Spring Boot, JUnit",
    },
    {
      name: "Python",

      category: "Backend",
      icon: "🐍",
      description: "Data Analysis, Flask, Automation",
    },
    {
      name: "SQL",

      category: "Database",
      icon: "🗄️",
      description: "MySQL, PostgreSQL, Query Optimization",
    },
  ];

  return (
    <section id="skills" className="mb-12">
      <h3 className="text-2xl font-bold mb-6 dark:text-[#AEBCCF]">
        {language.skills}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-300 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 "
          >
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">{skill.icon}</span>
              <div>
                <h4 className="text-base font-semibold text-[#4338CA] dark:text-[#B7AAFF]">
                  {skill.name}
                </h4>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.category}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
