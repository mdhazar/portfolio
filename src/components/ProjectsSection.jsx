import { useLanguage } from "../contexts/LanguageContext";

function ProjectsSection() {
  const projects = ["Workintech", "Random Jokes", "Journey"];
  const { language } = useLanguage();

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-8 dark:text-[#AEBCCF]">
        {language.projects}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project}
            className="w-full bg-white dark:bg-[#252128] rounded-md text-[#4338CA] dark:text-[#CFCBFF] "
          >
            <img
              src={`https://picsum.photos/600/400`}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
              alt={project}
            />

            <h4 className="text-xl font-semibold mb-2">{project}</h4>

            <p className="text-gray-600 dark:text-white mb-4">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline.
            </p>

            <div className="flex flex-col">
              <div className="flex gap-1 flex-wrap">
                <span className="border-2 px-3 py-1 text-sm border-[#4338CA] text-[#4338CA] rounded-md dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
                  react
                </span>
                <span className="border-2 px-3 py-1 text-sm border-[#4338CA] text-[#4338CA] rounded-md dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
                  redux
                </span>
                <span className="border-2 px-3 py-1 text-sm border-[#4338CA] text-[#4338CA] rounded-md dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
                  axios
                </span>
              </div>
              <div className="flex justify-between gap-4 mt-2">
                <a
                  href="https://github.com/mdhazar"
                  className="text-[#3730A3] underline"
                >
                  Github
                </a>
                <a
                  href="https://vercel.com/mehmet-s-projects-7ea2b191"
                  className="text-[#3730A3] underline"
                >
                  {language.view}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
