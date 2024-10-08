import { FaGithub, FaLinkedin } from 'react-icons/fa';

function MainSection() {
  return (
    <main className="px-8 mt-12 mb-12">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        
        <div className="text-left lg:w-1/2">
          <h2 className="text-4xl font-bold mb-2 dark:text-[#AEBCCF]">Creative thinker <br /> Minimalism lover</h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Hi, I’m Mehmet Derya Hazar. I’m a full-stack developer. If you are looking for a Developer who can craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.
          </p>
          
          <div className="flex gap-4">
            <button className="bg-[#4338CA] text-white py-3 px-6 rounded-md dark:bg-[#E1E1FF] dark:text-black">
              Hire me
            </button>
            <button className="border border-[#4338CA] text-[#4338CA] py-3 px-6 rounded-md flex items-center dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF]">
              <FaGithub className="mr-2" /> Github
            </button>
            <button className="border border-[#4338CA] text-[#4338CA] py-3 px-6 rounded-md flex items-center dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF]">
              <FaLinkedin className="mr-2" /> Linkedin
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img 
            src={`https://picsum.photos/500`}  
            alt="Random"
            className="w-[500px] h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}

export default MainSection;
