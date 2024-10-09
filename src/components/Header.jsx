import { useLanguage } from '../contexts/LanguageContext';

function Header() {
  const { language } = useLanguage();
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-16 ml-auto">
        <button className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer">{language.skills}</button>
        <button  className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer">{language.projects}</button>
        <button className="border border-[#4338CA] text-[#4338CA] py-3 px-6 rounded-md flex items-center">{language.hireMe}</button>
      </div>
    </header>
  );
}

export default Header;
