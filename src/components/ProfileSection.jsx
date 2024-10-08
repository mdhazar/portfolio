function ProfileSection() {
  return (
    <section className="mb-12 flex">
      
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4 text-[#4338CA] dark:text-[#B7AAFF]">Profile</h3>
        <ul>
          <li className="grid grid-cols-2 "><strong>Doğum tarihi:</strong><span>30.07.1993</span></li>
          <li className="grid grid-cols-2 "><strong>İkamet Şehri:</strong><span>Ankara</span></li>
          <li className="grid grid-cols-2 "><strong>Eğitim Durumu:</strong><span>ODTÜ Felsefe, 2020</span></li>
          <li className="grid grid-cols-2 "><strong>Tercih Ettiği Rol:</strong><span>Frontend, UI</span></li>
        </ul>


      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4 text-[#4338CA] dark:text-[#B7AAFF]">About Me</h3>
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
