import movieimg from "../assets/images/movie-app-proj.jpg";
import saasimg from "../assets/images/saas-site.png";
import ajrenaimg from "../assets/images/ajrena-site.png";
import nutzyimg from "../assets/images/nutzy-site.png";

import ajrenalogo from "../assets/images/companylogo/ajrenafoods-logo4.png";
import afrotreasureslogo from "../assets/images/companylogo/afrotreasures-logo.png";

export const navItems = [
  { label: "WORKS", href: "#" },
  { label: "RESUME", href: "#" },
  { label: "SERVICES", href: "#" },
];

export const webTitle = "FATAI AYELOJA | DEVOPS ENGINEER";

export const projectdatabase = [
  {
    id: 1,
    projectname: "Movie App",
    projectcategory: "Web-Application",
    shortdescription:
      "A short description of the project highlighting key features and tech stack.",
    imgsource: movieimg,
    githublink: "https://github.com/fayeloja/react-movie-app",
    demolink: "https://react-movie-app-nine-xi.vercel.app/",
    techstack: ["Reactjs", "TailwindCSS", "The Movie Database API"],
  },
  {
    id: 2,
    projectname: "Saas Landing Page",
    projectcategory: "Web-Application",
    shortdescription:
      "A short description of the project highlighting key features and tech stack.",
    imgsource: saasimg,
    githublink: "https://github.com/fayeloja/sass-landingpage",
    demolink: "https://sass-landingpage.vercel.app/",
    techstack: ["Reactjs", "TailwindCSS"],
  },
  {
    id: 3,
    projectname: "Ajrena Foods Ltd Website",
    projectcategory: "WordPress Website",
    shortdescription:
      "A short description of the project highlighting key features and tech stack.",
    imgsource: ajrenaimg,
    githublink: null,
    demolink: "https://www.ajrenafoods.com/",
    techstack: ["Wordpress", "Elementor"],
  },
  {
    id: 4,
    projectname: "Nutzy Brand ",
    projectcategory: "WordPress Website",
    shortdescription:
      "A short description of the project highlighting key features and tech stack.",
    imgsource: nutzyimg,
    githublink: "#",
    demolink: "https://nutzy.ng/",
    techstack: ["Wordpress", "Elementor", "JS"],
  },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const experienceList = [
  {
    id: 1,
    companyLogo: ajrenalogo,
    companyName: "Operations Director at Ajrena Foods Ltd",
    yearDuration: "Dec 2016 - Till Present",
    jobDescription:
      "During my tenure at Ajrena, I held the role of Operations Director, where I played a key role in Operations, Procurement, Product Sales & Marketing strategy, Distribution logistics, Information Technology. Responsible for designing all the product packages and marketing assets and the websites.",
  },
  {
    id: 2,
    companyLogo: afrotreasureslogo,
    companyName: "Ecommerce Manager at Afrotreasures Inc",
    yearDuration: "Jan 2015 - Dec 2016",
    jobDescription:
      "During my tenure at Afrotreasures, I played a key role in Operations, Creative and Design of marketing assets, Onboarding strategic partners and oversees logistics activities.",
  },
];
