import { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import Resume from "./components/Resume";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isHovered, setIsHovered] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar/Nav */}
      <div
        className={`gradient-background text-white flex flex-row md:flex-col md:items-center md:justify-center w-full md:w-[60px] shadow-3xl z-10 md:hover:w-1/6 transition-all duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="flex flex-row w-full md:flex-col md:h-[50%] md:w-full md:justify-center gap-10 p-4  md:pl-4">
          <button
            className={`${activeTab === "about" ? "text-yellow-400" : "text-white"} text-[20px] flex items-center gap-2`}
            onClick={() => setActiveTab("about")}
          >
            <FaUser />
            <span className={`block ${isHovered ? "md:block" : "md:hidden"} transition-all duration-200`}>About</span>
          </button>

          <button
            className={`${activeTab === "projects" ? "text-yellow-400" : "text-white"} text-[20px] flex items-center gap-2`}
            onClick={() => setActiveTab("projects")}
          >
            <FaProjectDiagram />
            <span className={`block ${isHovered ? "md:block" : "md:hidden"} transition-all duration-200`}>Projects</span>
          </button>

          <button
            className={`${activeTab === "resume" ? "text-yellow-400" : "text-white"} text-[20px] flex items-center gap-2`}
            onClick={() => setActiveTab("resume")}
          >
            <GrDocumentText />
            <span className={`block ${isHovered ? "md:block" : "md:hidden"} transition-all duration-200`}>Resume</span>
          </button>

          <button
            className={`${activeTab === "contact" ? "text-yellow-400" : "text-white"} text-[20px] flex items-center gap-2`}
            onClick={() => setActiveTab("contact")}
          >
            <FaEnvelope />
            <span className={`block ${isHovered ? "md:block" : "md:hidden"} transition-all duration-200`}>Contact</span>
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="bg-gray-100 w-full h-screen overflow-y-scroll">{renderContent()}</div>
    </div>
  );
};

export default App;
