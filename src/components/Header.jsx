import { useLanguage } from "../contexts/LanguageContext";
import { useLinks } from "../contexts/LinksContext";

function Header() {
  const { language } = useLanguage();
  const links = useLinks();

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = encodeURI(links.email);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center py-4">
      <div className="flex items-center gap-16 ml-auto">
        <button
          onClick={() => scrollToSection("skills")}
          className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer"
        >
          {language.skills}
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer"
        >
          {language.projects}
        </button>
        <button
          onClick={handleEmailClick}
          className="border border-[#4338CA] text-[#4338CA] py-3 px-6 rounded-md flex items-center"
        >
          {language.hireMe}
        </button>
      </div>
    </header>
  );
}

export default Header;
