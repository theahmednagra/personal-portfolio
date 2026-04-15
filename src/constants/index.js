import {
  tevta_logo,
  vu_logo,
  oz_group,
  hackathon_curation_agent,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiVite,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFramer,
  SiRender,
  SiAppwrite,
  SiMongodb,
  SiVercel,
  SiMongoose,
  SiRedux,
  SiJsonwebtokens,
  SiAxios,
  SiCloudinary,
  SiZod,
} from "react-icons/si";

import { DiCss3 } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

export const resumeLink =
  "https://drive.google.com/file/d/1hm8ntQHT_r_UFcEjzaCZGche0WsWuysv/view?usp=sharing"
export const repoLink = "https://github.com/theahmednagra/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/theahmednagra";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: tevta_logo,
    title: "Government College of Technology, Bhawalpur",
    degree: "Diploma of Associate Engineering - Civil Technology",
    duration: "August 2022 - July 2025",
    content1: "Major: Civil Technology",
    content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
    icon: vu_logo,
    title: "Virtual University of Pakistan",
    degree: "Bachelor of Science in Computer Science",
    duration: "Commencing 2026",
    content1:
      "Planned to start a BS in Computer Science while actively building real-world full-stack applications and gaining practical, industry-level experience.",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-3",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-4",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiNextdotjs,
        name: "NextJS",
      },
      {
        id: "f-3",
        icon: SiRedux,
        name: "ReduxJS",
      },
      {
        id: "f-4",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        id: "f-5",
        icon: SiExpress,
        name: "ExpressJS",
      },
      {
        id: "f-6",
        icon: SiTailwindcss,
        name: "Tailwind",
      },
      {
        id: "f-7",
        icon: SiFramer,
        name: "Motion",
      },
      {
        id: "f-8",
        icon: SiJsonwebtokens,
        name: "JWT",
      },
      {
        id: "f-9",
        icon: SiAxios,
        name: "Axios",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiAppwrite,
        name: "Appwrite",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-4",
        icon: SiMongoose,
        name: "Mongoose",
      },
      {
        id: "t-5",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-6",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-7",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-8",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-9",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-10",
        icon: SiVercel,
        name: "Vercel",
      },
      {
        id: "t-11",
        icon: SiRender,
        name: "Render",
      },
      {
        id: "t-12",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
 export const experiences = [
  {
    organisation: "Self Initiated Development",
    logo: hackathon_curation_agent,
    link: "",
    positions: [
      {
        title: "Full Stack Web Developer",
        duration: "2023 - 2025",
        content: [
          {
            text: "Built and deployed full-stack applications using Next.js, Node.js, and MongoDB with real-world architecture practices.",
            link: "",
          },
          {
            text: "Integrated AI features through external APIs with custom frontend and backend logic.",
            link: "",
          },
          {
            text: "Developed responsive, reusable UI components using React, TypeScript, and Tailwind CSS.",
            link: "",
          },
          {
            text: "Implemented backend systems including authentication, REST APIs, and database design.",
            link: "",
          },
          {
            text: "Worked with Git-based workflows and handled full-stack deployments on modern platforms.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "OZ Group",
    logo: oz_group,
    link: "",
    positions: [
      {
        title: "Full Stack Developer Intern",
        duration: "December 2025 - April 2026",
        content: [
          {
            text: "Developed a full-stack e-commerce application with authentication, role-based access, and complete product, cart, and order management.",
            link: "",
          },
          {
            text: "Built scalable backend APIs using Node.js, Express, MongoDB, and TypeScript with modular architecture.",
            link: "",
          },
          {
            text: "Implemented frontend using Next.js and Tailwind CSS with responsive design and API integration.",
            link: "",
          },
          {
            text: "Designed system architecture including database schemas and core business logic.",
            link: "",
          },
          {
            text: "Deployed applications using Vercel and Render and collaborated in a team environment.",
            link: "",
          },
        ],
      },
    ],
  },
];

  // Template
  // {
  //   organisation: "Oracle, India",
  //   logo: oracle,
  //   link: "https://www.oracle.com/in/",
  //   positions: [
  //     {
  //       title: "Member of Technical Staff",
  //       duration: "Oct 2025 - Present",
  //       content: [
  //         {
  //           text: "Working in the Database as a Service Control Plane team for Oracle Cloud Infrastructure.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Member of Technical Staff - 1",
  //       duration: "Jul 2024 - Sep 2025",
  //       content: [
  //         {
  //           text: "Made several fixes to reduce the time taken for backup deletion from OCI Object Storage for large customers resulting in decreased costs.",
  //           link: "",
  //         },
  //         {
  //           text: "Worked towards building an AI On-Call Agent using an internal agentic framework.",
  //           link: "",
  //         },
  //         {
  //           text: "Developed a common integration test framework for ExaCS, ExaDB-XS and ExaCC, reducing code maintenance by ~67% and increased coverage by ~50%",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Member of Technical Staff Intern",
  //       duration: "May 2023 - Jul 2023",
  //       content: [
  //         {
  //           text: "Worked with the Exadata Cloud@Customer team in the Database Unit.",
  //           link: "",
  //         },
  //         {
  //           text: "Wrote APIs in Java to help gracefully migrate a running ExaC@C infrastructure to a new region in the case of a region failure",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Ansnips - Social Media Web App",
    github: "https://github.com/theahmednagra/ansnips",
    link: "https://ansnips.vercel.app/",
    image: hackathon_curation_agent,
    content:
      "A full-featured social media web application built with React and powered by Appwrite for backend services, authentication, and real-time data management.",
    stack: [
      {
        id: "proj1-icon-1",
        icon: SiAppwrite,
        name: "Appwrite",
      },
      {
        id: "proj1-icon-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "proj1-icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "proj1-icon-4",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "proj1-icon-5",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "proj1-icon-6",
        icon: SiVercel,
        name: "Vercel",
      },
    ],
  },
  {
    id: "project-2",
    title: "Ancart - Ecommerce Frontend",
    github: "https://github.com/theahmednagra/ancart-frontend",
    link: "https://ancart.vercel.app",
    image: hackathon_curation_agent,
    content:
      "A modern, responsive e-commerce frontend built with Next.js, featuring dynamic product listings, cart functionality, and seamless integration with backend APIs.",
    stack: [
      {
        id: "proj2-icon-1",
        icon: SiNextdotjs,
        name: "NextJS",
      },
      {
        id: "proj2-icon-2",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "proj2-icon-3",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj2-icon-4",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "proj2-icon-5",
        icon: SiZod,
        name: "Zod",
      },
      {
        id: "proj2-icon-6",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "proj2-icon-7",
        icon: SiFramer,
        name: "Framer-Motion",
      },
      {
        id: "proj2-icon-8",
        icon: SiVercel,
        name: "Vercel",
      },
    ],
  },
  {
    id: "project-3",
    title: "Ancart - Ecommerce Backend",
    github: "https://github.com/theahmednagra/ancart-backend",
    link: "https://ancart.vercel.app",
    image: hackathon_curation_agent,
    content:
      "A Node.js based backend system for an e-commerce application. It handles user authentication, product and category management, shopping cart functionality, and order processing, with separate routes for admin and public users.",
    stack: [
      {
        id: "proj3-icon-1",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        id: "proj3-icon-2",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj3-icon-3",
        icon: SiExpress,
        name: "ExpressJS",
      },
      {
        id: "proj3-icon-4",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "proj3-icon-5",
        icon: SiJsonwebtokens,
        name: "JWT",
      },
      {
        id: "proj3-icon-6",
        icon: SiCloudinary,
        name: "Cloudinary",
      },
      {
        id: "proj3-icon-7",
        icon: SiRender,
        name: "Render",
      },
    ],
  },
  {
    id: "project-4",
    title: "Ancraft - A Premium Portfolio Builder",
    github: "https://github.com/theahmednagra/ancraft",
    link: "https://ancraft.vercel.app",
    image: hackathon_curation_agent,
    content:
      "A premium portfolio builder platform built with Next.js, featuring a modern frontend and a scalable backend powered by Next.js API routes.",
    stack: [
      {
        id: "proj4icon-1",
        icon: SiNextdotjs,
        name: "NextJS",
      },
      {
        id: "proj4-icon-2",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj4-icon-3",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "proj4-icon-4",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj4-icon-5",
        icon: SiZod,
        name: "Zod",
      },
      {
        id: "proj4-icon-6",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "proj4-icon-7",
        icon: SiJsonwebtokens,
        name: "JWT",
      },
      {
        id: "proj4-icon-8",
        icon: SiVercel,
        name: "Vercel",
      },
    ],
  }
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/theahmednagra",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/theahmednagra",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:theahmednagra@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/theahmednagra",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/theahmednagra",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Muhammad Ahmed",
  githubUsername: "theahmednagra",
  tagLine:
    "Full-Stack Developer | 2+ Years Self-Taught Experience | Next.js & Node.js Enthusiast",
  intro:
    "Software Developer from Pakistan focused on continuously improving his craft and exploring new ideas to build impactful solutions.",
};
