import ModeSwitch from './components/ModeSwitch';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SkillsSection from './components/SkillsSection';
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import Divider from './components/Divider';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  return (
    <div className={darkMode ? 'dark' : null}>
      <div className="bg-white dark:bg-[#252128] font-sans min-h-screen text-gray-900 dark:text-gray-100">
        <div className="px-8 lg:px-16 xl:px 24 2xl:px-32"> 
          <ModeSwitch setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Header />
          <MainSection />
          <SkillsSection />
          <Divider />
          <ProfileSection />
          <Divider />
          <ProjectsSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
