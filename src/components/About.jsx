import img from "../assets/avatar.png";
import TypeAnimation from "./TypeAnimation";
const About = () => (
  <div className="w-full h-full gradient-background text-white p-8 relative min-w-[450px]">
    <div className="hidden md:block md:absolute bottom-0 right-20 opacity-70 hover:opacity-90 z-10 transition-all ease-in-out duration-500">
      <img src={img} alt="" />
    </div>
    <div className="w-full h-full relative">
      {/* <div className="w-full md:w-[55%]">
        <h3 className="text-[48px] font-bold">
          Hi, I&apos;m <span className="text-[#0b94cf]">Dylan Le</span>,
        </h3>
        <h2 className="text-[32px] font-bold mb-4">a Computer Science enthusiast .</h2>

        <TypeAnimation
          text="I'm a dedicated software developer with an unwavering passion for technology."
          delay={0} // Starts immediately
          speed={20} // Typing speed (optional)
        />
        <TypeAnimation
          text="This drive fuels my constant learning, growth, and creativity."
          delay={4000} // Starts after the first line finishes
          speed={20}
        />
        <TypeAnimation
          text="Throughout my journey, I've built scalable applications, taught hundreds of students the data structures, algorithms design and analysis, led agile teams in developing production-ready software, and delivered user-centric solutions for seamless experiences."
          delay={8000} // Starts after the second line finishes
          speed={20}
        />
      </div> */}
      <div className="w-full md:w-[55%] ">
        <h3 className="text-[48px] font-bold ">
          Hi, I&apos;m <span className="text-[#0b94cf]">Dylan Le</span>,
        </h3>
        <h2 className="text-[32px] font-bold mb-4">a Computer Science enthusiast .</h2>
        <p className="text-normal">I&apos;m a dedicated software developer with an unwavering passion for technology.</p>
        <p className="text-normal">This drive fuels my constant learning, growth, and creativity.</p>
        <p className="text-normal">
          Throughout my journey, I&apos;ve built scalable applications, taught hundreds of students the data structures, algorithms design and
          analysis, led agile teams in developing production-ready software, and delivered user-centric solutions for seamless experiences.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 ">
        <ul className=" flex flex-row gap-7 text-[32px]">
          <li className="hover:text-[#0b94cf] transition-all duration-100">
            <a href="https://www.facebook.com/profile.php?id=100057535205411" target="_blank">
              <i className="bx bxl-facebook-circle"></i>
            </a>
          </li>
          <li className="hover:text-[#0b94cf] transition-all duration-100">
            <a href="https://github.com/khangltt2003" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="hover:text-[#0b94cf] transition-all duration-100">
            <a href="https://www.linkedin.com/in/dylan-le-a2a31126a/" target="_blank">
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
