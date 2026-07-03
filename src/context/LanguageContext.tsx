import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import type { Locale, UIStrings } from "../content/types";
import { LOCALES } from "../content/types";
import { ui } from "../content/ui";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface LanguageContextValue {
  locale: Locale;
  t: UIStrings;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  if (
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().startsWith("tr")
  ) {
    return "tr";
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useLocalStorage<Locale>("locale", getInitialLocale);
  const safeLocale: Locale = LOCALES.includes(locale) ? locale : "en";

  useEffect(() => {
    document.documentElement.lang = safeLocale;
  }, [safeLocale]);

  const toggleLocale = () =>
    setLocale((prev) => (prev === "en" ? "tr" : "en"));

  return (
    <LanguageContext.Provider
      value={{ locale: safeLocale, t: ui[safeLocale], toggleLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook co-located with provider per module contract
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (ctx === null) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
