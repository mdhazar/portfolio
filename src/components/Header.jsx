import { useLanguage } from '../contexts/LanguageContext';
import { useLinks } from '../contexts/LinksContext';
function Header() {
  const { language } = useLanguage();
  const links = useLinks();
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-16 ml-auto">
        <a href="#skills" className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer">{language.skills}</a>
        <a  href="#projects" className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer">{language.projects}</a>
        <a href={links.email} className="border border-[#4338CA] text-[#4338CA] py-3 px-6 rounded-md flex items-center">{language.hireMe}</a>
      </div>
    </header>
  );
}

export default Header;
