import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { MoonIcon, SunIcon } from "./Icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.a11y.switchToLight : t.a11y.switchToDark}
      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-fg-muted transition-colors duration-150 hover:border-line-strong hover:bg-surface hover:text-fg"
    >
      {theme === "dark" ? <MoonIcon size={18} /> : <SunIcon size={18} />}
    </button>
  );
}
