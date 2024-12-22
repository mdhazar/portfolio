/* eslint-disable react/prop-types */
import { useLanguage } from "../contexts/LanguageContext";

function ModeSwitch({ setDarkMode, darkMode }) {
  const { language, languageCode, toggleLanguage } = useLanguage();

  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-4 ml-auto">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="relative w-14 h-6 rounded-full transition-colors duration-300 ease-in-out"
          style={{
            backgroundColor: darkMode ? "#3A3A3A" : "#4338CA",
          }}
        >
          <div className="absolute inset-0 rounded-full transition-colors duration-300" />

          <div
            className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ease-in-out
              ${darkMode ? "left-1" : "left-9"}`}
            style={{
              backgroundColor: "#FFE86E",
            }}
          >
            <div
              className={`absolute top-0 w-4 h-4 rounded-full transition-all duration-300 ease-in-out
                ${darkMode ? "opacity-100" : "opacity-0"}`}
              style={{
                backgroundColor: "#3A3A3A",
                transform: "translateX(5px)",
              }}
            />
          </div>
        </button>

        <button className="bg-transparent border-none text-gray-500 no-underline cursor-pointer">
          {darkMode ? "LIGHT MODE" : "DARK MODE"}
        </button>

        <p>|</p>

        <button
          onClick={toggleLanguage}
          {...(languageCode === "en" ? "Türkçe" : "English")}
          className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer"
        >
          <span className="text-[#4338CA]">{language.switch1}</span>
          {language.switch2}
        </button>
      </div>
    </div>
  );
}

export default ModeSwitch;
