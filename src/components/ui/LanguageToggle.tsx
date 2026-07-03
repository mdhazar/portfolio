import { useLanguage } from "../../context/LanguageContext";

export function LanguageToggle() {
  const { locale, t, toggleLocale } = useLanguage();
  const target = locale === "en" ? "tr" : "en";
  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.a11y.switchLanguage}
      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-fg-muted transition-colors duration-150 hover:border-line-strong hover:bg-surface hover:text-fg"
    >
      <span
        lang={target}
        className="font-mono text-xs font-medium uppercase tracking-[0.14em]"
      >
        {target}
      </span>
    </button>
  );
}
