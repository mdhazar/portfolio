function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-16 ml-auto">
        <button className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer">Skills</button>
        <button  className="bg-transparent border-none text-[#6B7280] no-underline cursor-pointer">Projects</button>
        <button className="border border-[#4338CA] text-[#4338CA] py-3 px-6 rounded-md flex items-center">Hire me</button>
      </div>
    </header>
  );
}

export default Header;
