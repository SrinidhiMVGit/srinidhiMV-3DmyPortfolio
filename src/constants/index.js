import {
  mobile,
  backend,
  creator,
  web,
  java,
  kotlin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  infosys,
  vw_technologies,
  gehealthcare,
  fractal,
  globallogic,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Design & Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Devops Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Consultant",
    company_name: "GlobalLogic",
    icon: globallogic,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Compiled research data and gave professional presentations highlighting finds and recommended optimizations.",
      "Evaluated diverse organizational systems to identify workflow, communication, and resource utilization issues.",
      "Conducted thorough reviews of operations to devise and deploy improvement strategies.",
      "Leveraged on-site observation and personal interviews to identify team and individual strengths.",
      "Learnt new technologies in short time and adopted to new work environment",
      "Mentored, trained juniors and was involved in team building activities",
    ],
  },
  {
    title: "Senior Engineer",
    company_name: "Fractal Analytics",
    icon: fractal,
    iconBg: "#383E56",
    date: "Dec 2021 - August 2022",
    points: [
      "Developed efficient and maintainable software according to business objectives and needs of clients.",
      "Maintained complex technology infrastructure and collaborated with product team to implement new features and strategically plan for future products.",
      "Reviewed code, debugged problems and corrected issues.",
      "Coordinated with other engineers to evaluate and improve software interfaces.",
      "Worked with back-end developers to design APIs.",
      "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.",
    ],
  },
  {
    title: "Software Engineering Specialist",
    company_name: "GE Healthcare",
    icon: gehealthcare,
    iconBg: "#383E56",
    date: "May 2019 - March 2021",
    points: [
      "Developed Restful web-services and implemented Microservices architecture using Java/NodeJS.",
      "Collaborated with Tech Lead to integrate UI features capable of complying with prescribed code standards and technical design guidelines.",
      "UI Developer involved in building Application as required.",
      "Tested websites and performed troubleshooting prior to deployment.",
      "Worked with new on new concept called Micro-Apps for UI and got recognition for that.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "VW Technologies",
    icon: vw_technologies,
    iconBg: "#383E56",
    date: "August 2018 - May 2019",
    points: [
      "Designed UIs within frontend web frameworks such as ReactJS , exploiting associated templates and tools to shorten development times.",
      "Improved and expanded project platforms using JavaScript to develop rich User Interfaces.",
      "Developed interfaces using ReactJS that simplified overall management and offered ease-of-use.",
      "Involved in training/helping fresher/Juniors",
    ],
  },
  {
    title: "Senior Systems Engineer",
    company_name: "Infosys Ltd",
    icon: infosys,
    iconBg: "#383E56",
    date: "Dec 2014 - Mar 2018",
    points: [
      "Collaborated with Tech Leads and other senior Developers to integrate UI features capable of complying with prescribed code standards and technical design guidelines.",
      "Improved and expanded project platforms using JavaScript to develop rich User Interfaces.",
      "Developed interfaces using ReactJS that simplified overall management and offered ease-of-use.",
      "Designed UI using ReactJS , exporing associated templates and tools to shorten development times and involved in developing microservices using Java.",
    ],
  },
];

export { services, technologies, experiences };