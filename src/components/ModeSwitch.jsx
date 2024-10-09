import moon from '../assets/Ellipse 1.png';
import { useLanguage } from '../contexts/LanguageContext';
// eslint-disable-next-line react/prop-types
function ModeSwitch({ setDarkMode, darkMode }) {
  const { language, languageCode, toggleLanguage } = useLanguage();
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-4 ml-auto">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-[55px] h-[24px] ${
            darkMode ? 'bg-[#3A3A3A]' : 'bg-[#4338CA]'
          } rounded-full transform -scale-x-100 flex items-center justify-${
            darkMode ? 'end' : 'start'
          }  transition-all duration-300 ease-in-out`}
        >
          <img src={moon} alt="Moon" className="w-[20px] h-[20px]" />

         
          {darkMode && (
            <div className="absolute right-1 w-[20px] h-[20px] bg-[#3A3A3A] rounded-full"></div>
          )}
        </button>

        
        <button className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer">
          {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </button>

        <p>|</p>

        <button onClick={toggleLanguage} {...languageCode === 'en' ? 'Türkçe' : 'English'} className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer">
          <span className="text-[#4338CA]">{language.switch1}</span>{language.switch2}
        </button>
      </div>
    </div>
  );
}

export default ModeSwitch;