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
import project5_1 from "../assets/project5_1.png";
import project5_2 from "../assets/project5_2.png";
import project5_3 from "../assets/project5_3.png";
import project5_4 from "../assets/project5_4.png";
import project5_5 from "../assets/project5_5.png";
import project5_6 from "../assets/project5_6.png";
import project5_7 from "../assets/project5_7.png";
import project5_8 from "../assets/project5_8.png";
import project5_9 from "../assets/project5_9.png";
import project6_1 from "../assets/project6_1.png";
import project6_2 from "../assets/project6_2.png";
import project6_3 from "../assets/project6_3.png";
import project6_4 from "../assets/project6_4.png";
import project6_5 from "../assets/project6_5.png";
import project6_6 from "../assets/project6_6.png";
import project6_7 from "../assets/project6_7.png";
import project6_8 from "../assets/project6_8.png";
import project6_9 from "../assets/project6_9.png";
import project6_10 from "../assets/project6_10.png";
import project7_1a from "../assets/project7_1.webp";
import project7_1 from "../assets/project7_1.png";
import project7_2 from "../assets/project7_2.png";
import project7_3 from "../assets/project7_3.png";
import project7_4 from "../assets/project7_4.png";
import project7_5 from "../assets/project7_5.png";
import project7_6 from "../assets/project7_6.png";
import project7_7 from "../assets/project7_7.png";

import ProjectTab from "./ProjectTab";
import { useState } from "react";
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
    name: "30 days with HTML CSS JS",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/642px-Amazon-S3-Logo.svg.png?20220427001138",
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
    link: "https://github.com/khangltt2003/django-react-medical-volunteer-hub",
    demo: [project4_1, project4_2, project4_3, project4_4, project4_5, project4_6, project4_7, project4_8, project4_9],
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/django-1.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",

      "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
      "https://icon.icepanel.io/AWS/svg/Database/RDS.svg",
    ],
  },
  {
    name: "DataGPT and ASCII Generator",
    description: `This project involved creating an innovative data analysis and visualization platform. The website, built using Streamlit, allowed users to upload datasets, ask questions, generate plots, and explore detailed analytics through a conversational interface. 
                OpenAI’s GPT-4o-mini model was integrated with LangChain's PandasDataFrameAgent to facilitate advanced data analysis and code generation. 
                PygWalker was utilized to provide a drag-and-drop interface, enabling users to create plots and interact with data visualizations seamlessly. 
                Additionally, the project featured an ASCII art generator built with OpenCV and Pillow, allowing users to convert images and GIFs into ASCII art with support for both black-and-white and color formats.`,
    link: "https://github.com/khangltt2003/openai-streamlit-data-analysis-gpt",
    demo: [project6_1, project6_2, project6_3, project6_4, project6_5, project6_6, project6_7, project6_8, project6_9, project6_10],

    tools: [
      "https://www.svgrepo.com/show/306500/openai.svg",
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MVJZLfszGGNiJ-UFK4U31A.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    ],
  },
  {
    name: "Amazon Review Search Engine",
    description: `I developed a search engine capable of retrieving relevant reviews from a dataset of over 200,000 Amazon product reviews based on user input. 
                I designed and evaluated the effectiveness of various NLP techniques, including Boolean Search, Topic Modeling, Word Embeddings (Word2Vec), and transformer-based models (BERT), to enhance the accuracy and relevance of extracted reviews. 
                By combining Word Embedding techniques with a Rating Filtering method, I achieved up to 80% relevance in review extraction.`,
    link: "https://github.com/khangltt2003/nlp-amazon-review-search-engine",
    demo: [project7_1a],
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png",
      "https://rare-technologies.com/wp-content/uploads/2016/02/rare_image_only.png",
    ],
  },
  {
    name: "Real-time Message Application",
    description: `I built a robust real-time messaging application inspired by Discord, leveraging Next.js, Socket.IO, and LiveKit to provide seamless messaging, voice chat, and video calling with low latency. 
                The application features role-based access control, empowering users to assign roles, configure permissions, and ensure secure communication across public channels and private one-on-one conversations. 
                This project prioritizes scalability and performance, delivering an intuitive and efficient user experience.`,
    link: "https://github.com/khangltt2003/nextjs-real-time-message-app",
    demo: [project5_1, project5_2, project5_3, project5_4, project5_5, project5_6, project5_7, project5_8, project5_9],
    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    ],
  },
  {
    name: "Hotel Booking Application",
    description: `I developed a full-stack hotel booking application, utilizing Spring Boot for the backend and React.js for the frontend. 
                The application includes robust authentication and authorization mechanisms implemented with JWT and Spring Security to ensure secure user access. 
                AWS RDS and AWS S3 were integrated for efficient database hosting and image storage, managing data for over 200 entities, including users, bookings, and rooms.`,
    link: "https://github.com/khangltt2003/spring-boot-react-booking-application",
    demo: [project7_1, project7_7, project7_5, project7_6, project7_4, project7_2, project7_3],

    tools: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/642px-Amazon-S3-Logo.svg.png?20220427001138",
      "https://icon.icepanel.io/AWS/svg/Database/RDS.svg",
    ],
  },
];

const Projects = () => {
  const [projectI, setProjectI] = useState(null);

  const handleOnClick = (i) => {
    setProjectI(i);
  };

  const handleClose = () => {
    setProjectI(null);
  };

  return (
    <div className="h-full w-full">
      {projectI !== null && <Project project={projects[projectI]} onClose={handleClose} />}
      <div className="w-full  gradient-background text-white p-8 flex flex-col items-center ">
        <h2 className="text-[32px] font-bold mb-5">My Projects</h2>
        <div className="lg:w-[1180px] grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 lg:gap-12">
          {projects.map((project, i) => {
            return <ProjectTab key={i} project={{ ...project, i }} handleOnClick={handleOnClick} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
