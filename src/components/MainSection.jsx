import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { useLinks } from "../contexts/LinksContext";

function MainSection() {
  const { language } = useLanguage();
  const links = useLinks();

  return (
    <main className="mt-8 md:mt-12 mb-8 md:mb-12 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between min-h-[500px] gap-8 lg:gap-12">
        <div className="text-left lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-[#AEBCCF]">
              {language.welcomeMessage1}
              <br />
              {language.welcomeMessage2}
            </h2>
            <p className="mb-6 md:mb-8 text-gray-600 dark:text-gray-400 text-base md:text-lg">
              {language.introText}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a
              href={links.email}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = encodeURI(links.email);
              }}
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-[#4338CA] text-white py-2.5 md:py-3 px-4 md:px-6 rounded-md text-sm md:text-base dark:bg-[#E1E1FF] dark:text-black hover:bg-[#3730A3] dark:hover:bg-[#D1D1FF] transition-colors">
                {language.hireMe}
              </button>
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto border border-[#4338CA] text-[#4338CA] py-2.5 md:py-3 px-4 md:px-6 rounded-md flex items-center justify-center text-sm md:text-base dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] hover:bg-[#4338CA] hover:text-white dark:hover:bg-[#E1E1FF] dark:hover:text-black transition-colors">
                <FaGithub className="mr-2" /> Github
              </button>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto border border-[#4338CA] text-[#4338CA] py-2.5 md:py-3 px-4 md:px-6 rounded-md flex items-center justify-center text-sm md:text-base dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] hover:bg-[#4338CA] hover:text-white dark:hover:bg-[#E1E1FF] dark:hover:text-black transition-colors">
                <FaLinkedin className="mr-2" /> Linkedin
              </button>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="w-full max-w-[500px] aspect-square">
            <img
              src={`https://picsum.photos/500`}
              alt="Random"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
