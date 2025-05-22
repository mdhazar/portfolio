import parmak from "../assets/parmak.png";
import { useLanguage } from "../contexts/LanguageContext";
import { useLinks } from "../contexts/LinksContext";
function Footer() {
  const { language } = useLanguage();
  const links = useLinks();
  return (
    <footer className="bg-gray-300 dark:bg-black p-8 text-left mt-12  px-16 lg:px-16 xl:px 24 2xl:px-32">
      <p className="text-lg font-semibold mb-4">
        {language.footer1}
        <br /> {language.footer2}
      </p>

      <div className="flex justify-between items-center gap-4 mt-4">
        <a
          href={links.email}
          className="text-purple-400 underline flex items-center gap-2"
        >
          <img src={parmak} alt="Pointing out" className="w-[24px] h-[24px]" />
          m.derya.hazar@gmail.com
        </a>

        <div className="flex gap-4">
          <p>Personal Blog</p>
          <a href={links.github} className="text-[#00AB6B]">
            Github
          </a>
          <a href={links.linkedin} className="text-[#0077B5]">
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
