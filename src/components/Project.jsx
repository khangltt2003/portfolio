import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const Project = ({ project, onClose }) => {
  const [img, setImg] = useState(0);
  const intervalIdRef = useRef(null);
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      if (img === project.demo.length - 1) {
        setImg(0);
      } else {
        setImg(img + 1);
      }
    }, 3000);
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [project.demo.length, img]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setClosed(true);
        setTimeout(() => {
          onClose();
        }, 200);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleOnclose = () => {
    setClosed(true);
    setTimeout(() => {
      onClose();
    }, 150);
  };

  const handlePrev = () => {
    setImg((prev) => {
      if (prev === 0) {
        return project.demo.length - 1;
      } else {
        return prev - 1;
      }
    });
  };
  const handleNext = () => {
    setImg((prev) => {
      if (prev === project.demo.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div className="fixed h-full flex items-center justify-center bg-[#0000007e] " onClick={handleOnclose}>
      <div
        className={`relative bg-slate-100 transition-all p-6  shadow-md text-black  w-[85%] h-[90%] rounded-[2px]  flex flex-col  gap-5 overflow-auto 
       ${!closed ? "zoom-in" : "zoom-out"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <FaTimes className="absolute top-5 right-5 text-black z-10 cursor-pointer " onClick={handleOnclose} />
        <div className="w-full ">
          <h3 className="text-[20px] font-semibold mb-2">{project.name}</h3>
          <p className="text-gray-600 text-[18px] font-medium mb-2">{project.description}</p>
          <p className="font-semibold mb-2">Tools used:</p>
          <div className="flex gap-5">
            {project.tools.map((tool, i) => {
              return (
                <div key={i} className="h-[35px] w-[35px]">
                  <img className="w-full h-full" src={tool} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <a href={project.link} className="text-second  text-[20px] flex items-center hover:text-main" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github text-[30px] mr-1"></i>
          Source Code
        </a>

        <div className="w-full flex  flex-col justify-center items-center">
          <div className="border-2 border-second h-[250px] sm:h-[350px] md:h-[450px] rounded-[5px] overflow-hidden mb-5">
            <img className="w-full h-full" src={project.demo[img]} alt="" />
          </div>
          <div className="flex items-center gap-1 ">
            <BiChevronLeft className="w-6 h-6 cursor-pointer text-main " onClick={handlePrev} />
            {project.demo.map((e, i) => {
              return (
                <div key={i} onClick={() => setImg(i)} className={`h-2 w-2 cursor-pointer rounded-full ${i === img ? "bg-main" : "bg-second"}`}></div>
              );
            })}
            <BiChevronRight className="w-6 h-6 cursor-pointer text-main" onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
