import { useLanguage } from "../contexts/LanguageContext";
import Slider from "react-slick";
import ecommerce from "../assets/ecommerce.png";
import pizzaOrder from "../assets/pizzaOrder.png";
import andor from "../assets/andor.png";
import todo from "../assets/todo.png";
import form from "../assets/form.png";
import subtitle_splitter from "../assets/subtitle_splitter.gif";
import turkish_ipa_converter from "../assets/ipa.png";
import ecommerce_jquery from "../assets/ecomjquery.png";
import CVapplication from "../assets/CVapplication.png";
import api from "../assets/api.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextjs_ecommerce from "../assets/nextjsEcommerce.png";

function ProjectsSection() {
  const { language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Nextjs Ecommerce",
      description:
        "A beautiful ecommerce website built with Nextjs and Auth.js",
      image: nextjs_ecommerce,
      githubLink: "https://github.com/mdhazar/nextjs-ecommerce",
      liveLink: "nextjs-ecommerce-green.vercel.app",
      technologies: ["Nextjs", "TypeScript", "Auth.js"],
    },
    {
      id: 2,
      title: "Ecommerce Website",
      description: "A beautiful ecommerce website built with React",
      image: ecommerce,
      githubLink: "https://github.com/mdhazar/ecommerce",
      liveLink: "https://ecommerce-eta-one-57.vercel.app",
      technologies: ["React", "TypeScript"],
    },
    {
      id: 3,
      title: "Subtitle Splitter",
      description: "Segment subtitles based on pre-defined timecodes",
      image: subtitle_splitter,
      githubLink: "https://github.com/mdhazar/subtitle-splitter/tree/main",
      liveLink: "https://github.com/mdhazar/subtitle-splitter/tree/main",
      technologies: ["Python"],
    },
    {
      id: 4,
      title: "Ecommerce with Jquery",
      description: "A beautiful ecommerce website built with Jquery",
      image: ecommerce_jquery,
      githubLink:
        "https://github.com/mdhazar/Insider-Bootcamp/tree/main/3.%20Hafta%20Projesi",
      liveLink:
        "https://mdhazar.github.io/Insider-Bootcamp/3.%20Hafta%20Projesi/",
      technologies: ["Javascript", "Jquery"],
    },
    {
      id: 5,
      title: "Api Project",
      description: "A simple fecthapi project",
      image: api,
      githubLink:
        "https://github.com/mdhazar/Insider-Bootcamp/tree/main/4.%20Hafta/2.Gün",
      liveLink: "https://mdhazar.github.io/Insider-Bootcamp/4.%20Hafta/2.Gün/",
      technologies: ["Javascript", "Api"],
    },
    {
      id: 6,
      title: "Turkish IPA Converter",
      description:
        "Developed a tool to convert Turkish words to IPA for murfai",
      image: turkish_ipa_converter,
      githubLink: "https://github.com/mdhazar/Turkish-Ipa-Converter",
      liveLink: "https://mdhazar.github.io/Turkish-Ipa-Converter/",
      technologies: ["Javascript"],
    },
    {
      id: 7,
      title: "Andor",
      description: "A website for my favorite tv show",
      image: andor,
      githubLink:
        "https://github.com/mdhazar/Insider-Bootcamp/tree/main/1.%20Hafta%20Projesi",
      liveLink:
        "https://mdhazar.github.io/Insider-Bootcamp/1.%20Hafta%20Projesi/",
      technologies: ["Html", "CSS"],
    },

    {
      id: 8,
      title: "ToDo List",
      description: "A simple Todo list with starwars theme and filter",
      image: todo,
      githubLink:
        "https://github.com/mdhazar/Insider-Bootcamp/tree/main/2.%20Hafta%20Projesi",
      liveLink:
        "https://mdhazar.github.io/Insider-Bootcamp/2.%20Hafta%20Projesi/",
      technologies: ["Javascript"],
    },
    {
      id: 9,
      title: "Form",
      description: "A simple form with Jquery and darkmode toggle",
      image: form,
      githubLink:
        "https://github.com/mdhazar/Insider-Bootcamp/tree/main/3.%20Hafta/1.Gün",
      liveLink: "https://mdhazar.github.io/Insider-Bootcamp/3.%20Hafta/1.Gün/",
      technologies: ["Javascript", "Jquery"],
    },

    {
      id: 10,
      title: "Pizza Order",
      description: "An e-commerce platform with modern features",
      image: pizzaOrder,
      githubLink: "https://github.com/mdhazar/pizza-order",
      liveLink: "https://pizza-order-orpin.vercel.app",
      technologies: ["React Router", "Axios"],
    },
    {
      id: 11,
      title: "Cv Application",
      description: "A CV builder that lets you download your CV as PDF",
      image: CVapplication,
      githubLink: "https://github.com/mdhazar/CV-Application",
      liveLink: "https://cv-application-one-mu.vercel.app",
      technologies: ["React"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="mb-12 font-sans">
      <h3 className="text-2xl font-bold mb-8 dark:text-[#AEBCCF]">
        {language.projects}
      </h3>
      <div className="mx-auto min-h-[600px] ">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2 h-[500px] gap-2   ">
              <div className="bg-slate-100 dark:bg-slate-700 rounded-xl   h-full flex flex-col hover:shadow-xl transition-shadow duration-200 ">
                <div className="h-[300px] relative ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-fit object-center rounded-t-xl "
                  />
                </div>
                <div className="p-2 flex-1 flex flex-col ">
                  <h4 className="text-base font-bold mb-2 dark:text-white ">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1 text-[13px] ">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2 ">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0 bg-gray-200 dark:bg-gray-600 rounded-full text-[12px] dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-auto px-2 ">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-[14px]"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-[14px]"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ProjectsSection;
