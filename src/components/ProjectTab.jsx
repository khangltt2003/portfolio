const ProjectTab = ({ project, handleOnClick }) => {
  return (
    <div
      className=" bg-slate-100 bg-opacity-90 hover:bg-opacity-100 transition-all p-5 rounded-[5px] shadow-md text-black flex  flex-col  gap-1 cursor-pointer"
      onClick={() => handleOnClick(project.i)}
    >
      <div className="w-full ">
        <h3 className="text-[20px] font-semibold mb-2">
          {project.i + 1}. {project.name}
        </h3>
      </div>

      <div className="w-full h-[150px] ">
        <div className="border-2 border-second w-full h-full rounded-[14px] overflow-hidden mb-5">
          <img className="w-full h-full" src={project.demo[0]} alt="" />
        </div>
      </div>

      <p className="font-semibold">Tools used:</p>
      <div className="flex gap-3">
        {project.tools.map((tool, i) => {
          return (
            <div key={i} className="h-[30px]">
              <img className="w-full h-full" src={tool} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTab;
