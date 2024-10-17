import { useEffect, useRef, useState } from "react";

const Project = ({ project }) => {
  const [img, setImg] = useState(0);
  const intervalIdRef = useRef(null);
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
  }, [img]);

  return (
    <div className="bg-slate-100 bg-opacity-90 hover:bg-opacity-100 transition-all p-6 rounded-[20px] shadow-md text-black flex  flex-col md:flex-row gap-10">
      <div className="w-full md:w-[50%]">
        <h3 className="text-[20px] font-semibold mb-2">
          {project.i + 1}. {project.name}
        </h3>
        <p className="text-gray-600 text-[18px] font-medium mb-2">{project.description}</p>
        <p className="font-semibold mb-2">Tools used:</p>
        <div className="flex gap-5">
          {project.tools.map((tool, i) => {
            return (
              <div key={i} className="h-[45px]">
                <img className="w-full h-full" src={tool} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-[50%] ">
        <div className="border-2 border-second h-[350px] rounded-[14px] overflow-hidden mb-5">
          <img className="w-full h-full" src={project.demo[img]} alt="" />
        </div>
        <a href={project.link} className="text-second  text-[20px] flex items-center hover:text-main">
          <i className="bx bxl-github text-[30px] mr-1"></i>
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Project;
