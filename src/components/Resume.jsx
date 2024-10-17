import resume from "../assets/Thien_s_Resume_4.pdf";

const Resume = () => {
  return (
    <div className="w-full h-full gradient-background text-white p-8 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6">My Resume</h2>
      <iframe
        src={resume}
        title="Resume"
        className="w-[90%] md-[80%]  lg-[1200] h-[10000px] mb-4 border-2 border-gray-300 rounded-md shadow-lg"
      ></iframe>
    </div>
  );
};

export default Resume;
