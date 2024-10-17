import { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For mobile dropdown

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
      {/* Sidebar/Nav for larger screens */}
      <div
        className={`gradient-background text-white flex flex-row justify-end sm:flex-row md:flex-col md:items-center md:justify-center w-full md:w-[60px] shadow-3xl z-10 md:hover:w-1/6 transition-all duration-300 relative`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="hidden sm:flex flex-row w-full md:flex-col md:h-[50%] md:w-full md:justify-center gap-10 p-4  md:pl-4">
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

        {isDropdownOpen ? (
          <button className="  text-[30px]  p-2 flex justify-center items-center sm:hidden" onClick={() => setIsDropdownOpen(false)}>
            <FaTimes />
          </button>
        ) : (
          <button className="  text-[30px]  p-2 flex justify-center items-center sm:hidden" onClick={() => setIsDropdownOpen(true)}>
            <FaBars />
          </button>
        )}
        {isDropdownOpen && (
          <div className="flex flex-col items-center gap-4 mt-4 text-white bg-main rounded-md p-4 absolute top-[25px] w-full sm:hidden ">
            <button
              className={`${activeTab === "about" ? "text-yellow-400" : "text-white"} text-[18px] flex items-center gap-2`}
              onClick={() => {
                setActiveTab("about");
                setIsDropdownOpen(false);
              }}
            >
              <FaUser />
              <span>About</span>
            </button>

            <button
              className={`${activeTab === "projects" ? "text-yellow-400" : "text-white"} text-[18px] flex items-center gap-2`}
              onClick={() => {
                setActiveTab("projects");
                setIsDropdownOpen(false);
                setIsHovered(false);
              }}
            >
              <FaProjectDiagram />
              <span>Projects</span>
            </button>

            <button
              className={`${activeTab === "resume" ? "text-yellow-400" : "text-white"} text-[18px] flex items-center gap-2`}
              onClick={() => {
                setActiveTab("resume");
                setIsDropdownOpen(false);
                setIsHovered(false);
              }}
            >
              <GrDocumentText />
              <span>Resume</span>
            </button>

            <button
              className={`${activeTab === "contact" ? "text-yellow-400" : "text-white"} text-[18px] flex items-center gap-2`}
              onClick={() => {
                setActiveTab("contact");
                setIsDropdownOpen(false);
                setIsHovered(false);
              }}
            >
              <FaEnvelope />
              <span>Contact</span>
            </button>
          </div>
        )}
      </div>

      <div className="bg-gray-100 w-full h-screen overflow-y-scroll">{renderContent()}</div>
    </div>
  );
};

export default App;
