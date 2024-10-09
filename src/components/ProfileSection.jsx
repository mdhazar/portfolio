import { useLanguage } from '../contexts/LanguageContext';
function ProfileSection() {
  const { language } = useLanguage();
  return (
    <section className="mb-12 flex">
      
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4 text-[#4338CA] dark:text-[#B7AAFF]">{language.profile}</h3>
        <ul>
          <li className="grid grid-cols-2 "><strong>{language.birthday}</strong><span>30.07.1993</span></li>
          <li className="grid grid-cols-2 "><strong>{language.adress}</strong><span>Ankara</span></li>
          <li className="grid grid-cols-2 "><strong>{language.education}</strong><span>ODTÜ Felsefe, 2020</span></li>
          <li className="grid grid-cols-2 "><strong>{language.role}</strong><span>Frontend, UI</span></li>
        </ul>


      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4 text-[#4338CA] dark:text-[#B7AAFF]">{language.about}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
        </p>
        <p>
          Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
        </p>
      </div>
    </section>
  );
}

export default ProfileSection;
