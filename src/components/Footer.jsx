import parmak from '../assets/parmak.png'; 

function Footer() {
  return (
    <footer className="bg-[#F9F9F9] dark:bg-black p-8 text-left mt-12  px-16 lg:px-16 xl:px 24 2xl:px-32">
      <p className="text-lg font-semibold mb-4">Let&#39;s work together on<br/> your next product.</p>
      
      <div className="flex justify-between items-center gap-4 mt-4">
    
      <a href="mailto:m.derya.hazar@gmail.com" className="text-purple-400 underline flex items-center gap-2">
        <img src={parmak} alt="Pointing out" className="w-[24px] h-[24px]" />
        m.derya.hazar@gmail.com
      </a>

    
    
    <div className="flex gap-4">
      <p>Personal Blog</p>
      <p className="text-[#00AB6B]">Github</p>
      <p className="text-[#0077B5]">Linkedin</p>
    </div>
</div>

    </footer>
  );
}

export default Footer;
