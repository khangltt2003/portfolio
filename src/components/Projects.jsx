import Project from "./Project";
import project0 from "../assets/project0.png";
import project0_1 from "../assets/project0_1.jpg";
import project1_1 from "../assets/project1_1.png";
import project1_2 from "../assets/project1_2.png";
import project1_3 from "../assets/project1_3.png";
import project1_4 from "../assets/project1_4.png";
import project1_5 from "../assets/project1_5.png";
import project1_6 from "../assets/project1_6.png";
import project2 from "../assets/project2.png";
import project3_1 from "../assets/project3_1.png";
import project3_2 from "../assets/project3_2.png";
import project3_3 from "../assets/project3_3.png";
import project4_1 from "../assets/project4_1.png";
import project4_2 from "../assets/project4_2.png";
import project4_3 from "../assets/project4_3.png";
import project4_4 from "../assets/project4_4.png";
import project4_5 from "../assets/project4_5.png";
import project4_6 from "../assets/project4_6.png";
import project4_7 from "../assets/project4_7.png";
import project4_8 from "../assets/project4_8.png";
import project4_9 from "../assets/project4_9.png";
const projects = [
  {
    name: "Library Management",
    description: `For this C++ project, I created a library management system that’s include all 4 characteristics of OOP - polymorphism, 
                  inheritance, encapsulation, and abstraction! This system manages everything from librarians to users, books, 
                  borrowing days, deadlines, and even fines (because someone always returns books late, right?). With over 50 students using it, 
                  the system tracks who has what book and if they're running late, they get a little nudge in the form of a fine. 
                  I also made sure users have to log in before doing anything—security first! This project gave me a way to dive deep into OOP concepts.`,
    link: "https://github.com/khangltt2003/Library-Management",
    demo: [project0, project0_1],
    tools: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"],
  },
  {
    name: "30 days with HTML CSS JavaScript",
    description: `This is my 30-day coding challenge where I build a variety of web designs and interactive components using just 
                  plain HTML, CSS, and JavaScript! Throughout this journey, I'll be creating everything from basic layouts to complex UI elements,
                  without relying on frameworks or libraries, to showcase the power of vanilla web development.`,
    link: "https://github.com/khangltt2003/30-html-css-js-challeges",
    demo: [project1_1, project1_2, project1_3, project1_4, project1_5, project1_6],
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    ],
  },

  {
    name: "Daily Journal",
    description: `This is my first full-stack web application, where I used MongoDB for database management and Mongoose for schema modeling. 
                I built the backend with Node.js and Express.js, creating a REST API to handle data and server-side logic. 
                On the frontend, I used EJS to render dynamic content. 
                Additionally, I implemented OAuth and session management using Passport.js for secure user authentication. 
                This project helped me understand how to integrate databases, server logic, authentication,
                and dynamic UI into a cohesive application.`,
    link: "https://github.com/khangltt2003/blog",
    demo: [project2],
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://img.icons8.com/?size=512&id=puL87ypQPxxr&format=png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      "https://images.ctfassets.net/vwq10xzbe6iz/tnwT7PN9aBmT7vgkTtGhV/940f001eb249a42904cd40e64d13c7e9/passportJS-300x300.png",
    ],
  },
  {
    name: "Hitek",
    description: `I built this full-stack e-commerce web application using MongoDB for database management and Mongoose for schema modeling. 
                On the backend, I used Express.js to create a RESTful API that handles everything from user authentication and product management to 
                order processing, with JWT securing sessions for a smooth and safe user experience. I utilized AWS S3 to efficiently store and manage 
                product images. For the frontend, I chose ReactJS integrated with TailwindCSS to build a dynamic, interactive interface, with Redux Toolkit simplifying state management 
                and Axios handling all API requests. This project was a great learning experience and helped me tie together key technologies to 
                build a fully functional, user-friendly e-commerce platform.`,
    link: "https://github.com/khangltt2003/e-commerce",
    demo: [project3_1, project3_2, project3_3],
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    ],
  },
  {
    name: "TALKConnect",
    description: `In this project, I led a team of four to develop a software application to manage and allocate  over 200 volunteers 
                to volunteer activities based on their location, preferences, skills, and 
                availability.  For the backend, we utilized Django to build a robust API, handling volunteer data, event requirements, and 
                assignment logic. PostgreSQL was employed to manage relational data, allowing us to create complex queries that matched volunteers 
                to activities based on multi-dimensional criteria such as availability, skills, and preferences. The frontend, built with React and 
                styled with TailwindCSS, provided a smooth user 
                experience for both administrators and volunteers. We followed Agile methodology, ensuring continuous collaboration and 
                iterative development to meet the project’s goals efficiently.`,
    link: "https://github.com/khangltt2003/COSC4353-volunteer",
    demo: [project4_1, project4_2, project4_3, project4_4, project4_5, project4_6, project4_7, project4_8, project4_9],
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/django-1.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",

      "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
      "https://pbs.twimg.com/profile_images/1683811046580953089/a8HfGsr5_400x400.png",
    ],
  },
];

const Projects = () => (
  <div className="w-full gradient-background text-white p-8 ">
    <h2 className="text-[32px] font-bold mb-5">My Projects</h2>
    <div className="grid grid-cols-1 gap-6">
      {projects.map((project, i) => {
        return <Project key={i} project={{ ...project, i }} />;
      })}
    </div>
  </div>
);

export default Projects;
