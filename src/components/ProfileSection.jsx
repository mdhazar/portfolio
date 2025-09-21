import { useLanguage } from "../contexts/LanguageContext";
function ProfileSection() {
  const { language } = useLanguage();
  return (
    <section className="mb-12 flex">
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4 text-[#4338CA] dark:text-[#B7AAFF]">
          {language.profile}
        </h3>
        <ul>
          <li className="grid grid-cols-2 ">
            <strong>{language.birthday}</strong>
            <span>30.07.1993</span>
          </li>
          <li className="grid grid-cols-2 ">
            <strong>{language.adress}</strong>
            <span>Ankara</span>
          </li>
          <li className="grid grid-cols-2 ">
            <strong>{language.education}</strong>
            <span>{language.educationText}</span>
          </li>
          <li className="grid grid-cols-2 ">
            <strong>{language.role}</strong>
            <span>Full Stack, Frontend, Backend, Mobile</span>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4 text-[#4338CA] dark:text-[#B7AAFF]">
          {language.about}
        </h3>
        <p>{language.aboutText}</p>
        <p>{language.aboutText2}</p>
      </div>
    </section>
  );
}

export default ProfileSection;
