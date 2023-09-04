import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  jQuery,
  MySQL,
  php,
  reactjs,
  git,
  mp1,
  mp2,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Vanilla javascript and JQuery",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "Codego BootCamp MP1",
    company_name: "Online Catering Booking UI",
    icon: "",
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Developing web applications using HTML and CSS from scratch.",
      "designing, researching, and making documentations.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Presents my projects to the panels for reviews.",
    ],
  },
  {
    title: "Codego BootCamp MP2",
    company_name: "blogging Platform w/ crud functionality",
    icon: "",
    iconBg: "#E6DEDD",
    date: "July 2023 - July 2023",
    points: [
      "Developing web applications using HTML, CSS, Vanilla Javascript, JQuery, PHP, MySQL and other related technologies from front-end to back-end",
      "designing, researching, and making documentations.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Presents my projects to the panels for reviews.",
    ],
  },
  {
    title: "Codego BootCamp capstone",
    company_name: "EJ Online Bicycle Inventory",
    icon: "",
    iconBg: "#383E56",
    date: "August 2023 - August 2023",
    points: [
      "Developing web applications using HTML, CSS, Vanilla Javascript, JQuery, PHP, MySQL and other related technologies from front-end to back-end",
      "Colaborate with my partner for designing, researching, and making documentations.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Presents our projects to the panels for reviews.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Catering booking UI",
    description:
      "Web-based platform showing the UI of online catering service",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: mp1,
    live_server_link: "https://mp1-edmond-serato.vercel.app/",
    source_code_link: "https://github.com/nomnom0418/mp1_edmond_serato.git",
  },
  {
    name: "blogging Platform",
    description:
      "Web application that have a CRUD funtionality enables users to create account, login, post blogs and see other users profile. The platform also has delete and edit feature",
    tags: [
      {
        name: "Vanilla JavaScript, JQuery, PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS",
        color: "pink-text-gradient",
      },
    ],
    image: mp2,
    live_server_link: "http://weblog.000.pe",
    source_code_link: "https://github.com/nomnom0418/group9MP2.git",
  },
  {
    name: "Online Bicycle Inventory System",
    description:
      "A Inventory system that enable the users, to see all the products and easily find the products with low stocks and out of stocks, it has a friendly user interface that can easily add products, edit and delete.",
    tags: [
      {
        name: "Vanilla JavaScript, JQuery, PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    live_server_link: "https://mp1-edmond-serato.vercel.app/",
    source_code_link: "https://github.com/eddjohn/mp2_wd66p/tree/main/MP2",
  },
];

export { services, technologies, experiences, testimonials, projects };