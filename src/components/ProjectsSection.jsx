import { useLanguage } from '../contexts/LanguageContext';

function ProjectsSection() {
  const projects = ['Workintech', 'Random Jokes', 'Journey'];
  const { language } = useLanguage();
  return (
    <section className="mb-12">
      <section id="projects">
      {/* Projects content */}
      </section>
      <h3 className="text-2xl font-bold mb-8 dark:text-[#AEBCCF]">{language.projects}</h3>
     
      <div className="grid grid-cols-3 gap-10"> 
        {projects.map((project) => (
          <div key={project} className="bg-white dark:bg-[#252128] rounded-md  text-[#4338CA]  dark:text-[#CFCBFF]"> 
            <h4 className="text-xl font-semibold mb-2">{project}</h4>
            <p className="text-gray-600 dark:text-white mb-4">
              A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
            </p>
            
            
            <div className="flex flex-col ">
            <img 
                src={`https://picsum.photos/300`} className="w-[400px] h-[400px] object-cover rounded-lg"></img>
              <div className="flex gap-1">
              
                <div className="border-2 px-3 py-1 text-sm border-[#4338CA] text-[#4338CA]  rounded-md dark:bg-[#383838] dark:text-[#8F88FF]  dark:border-[#8F88FF]">
                  react 
                </div>
                <div className="border-2 px-3 py-1 text-sm border-[#4338CA] text-[#4338CA]  rounded-md dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
                  redux
                </div>
                <div className="border-2 px-3 py-1 text-sm border-[#4338CA] text-[#4338CA]  rounded-md dark:bg-[#383838] dark:text-[#8F88FF] dark:border-[#8F88FF]">
                  axios
                </div>
              </div>
              <div className="flex justify-between gap-4 mt-2">
              
                <a href="https://github.com/mdhazar" className="text-[#3730A3] underline ">Github</a>
                <a href="https://vercel.com/mehmet-s-projects-7ea2b191" className="text-[#3730A3] underline">View Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
