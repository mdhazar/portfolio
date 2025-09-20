import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "@fontsource/inter";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname !== "/") {
    navigate("/");
  }

  return (
    <div className={darkMode ? "dark" : null}>
      <div className="bg-gray-200 dark:bg-[#252128] font-sans min-h-screen text-gray-900 dark:text-gray-100">
        <div className="px-8 lg:px-16 xl:px 24 2xl:px-32">
          <ModeSwitch setDarkMode={setDarkMode} darkMode={darkMode} />
          <Header />
          <Outlet />
          <MainSection />
          <SkillsSection />
          <Divider />
          <ProjectsSection />
          <Divider />
          <ProfileSection />
        </div>
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
