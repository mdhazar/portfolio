// eslint-disable-next-line react/prop-types
import { createContext, useContext, useState } from 'react';
import { languageData } from '../languageData';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);


// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [languageCode, setLanguageCode] = useState('en');

  const toggleLanguage = () => {
    setLanguageCode((prevLanguage) => (prevLanguage === 'en' ? 'tr' : 'en'));
  };

  const value = {
    language: languageData[languageCode],
    languageCode,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
