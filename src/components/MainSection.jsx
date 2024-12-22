import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { useLinks } from "../contexts/LinksContext";

function MainSection() {
  const { language } = useLanguage();
  const links = useLinks();

  return (
    <main className=" mt-12 mb-12">
      <div className="flex flex-col lg:flex-row justify-between h-[500px]">
        <div className="text-left lg:w-1/2 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2 dark:text-[#AEBCCF]">
              {language.welcomeMessage1}
              <br />
              {language.welcomeMessage2}
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              {language.introText}
            </p>
          </div>

          <div className="flex gap-4">
            <a href={links.email}>
              <button className="bg-[#4338CA] text-white py-3 px-6 rounded-md dark:bg-[#E1E1FF] dark:text-black">
                {language.hireMe}
              </button>
            </a>
            <a href={links.github}>
              <button className="border border-[#4338CA] text-[#4338CA] py-3 px-6 rounded-md flex items-center dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF]">
                <FaGithub className="mr-2" /> Github
              </button>
            </a>
            <a href={links.linkedin}>
              <button className="border border-[#4338CA] text-[#4338CA] py-3 px-6 rounded-md flex items-center dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF]">
                <FaLinkedin className="mr-2" /> Linkedin
              </button>
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0 h-full">
          <img
            src={`https://picsum.photos/500`}
            alt="Random"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}

export default MainSection;
