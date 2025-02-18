import cisco from "../../public/cisc.png";
import book from "../../public/b.png";
import m from "../../public/m.png";
import afca from "../../public/new-afca.png";
import yeabrak from "../../public/yeabrak.png";
import rec from "../../public/rec.png";
import astmari from "../../public/astmari.png";
import utrade from "../../public/utrade.png";




import ba from "../../public/ba.png";



export const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Services",
    href: "#services",
  },

  {
    name: "Contact",
    href: "#contact",
  },
] as const;
export const projectsData = [
  {
    title: "AFCA",
    description:
      `comprehensive event management platform designed to simplify and optimize the event planning process. 
     `,
    tags: ["Nextjs", "React query", "Shadcn ui", "Express.js", "Mongodb"],
    imageUrl: afca,
    href: 'https://purchase.afca.coffee/'
  },
  {
    title: "Utradie",
    description:
      `UTRADIE is a platform designed to support tradespeople at every stage of their career—from apprentices to business owners.`,
    tags: ["React.js", "React query", "Shadcn UI", "PHP"],
    imageUrl: utrade,
    href: 'https://utradie.com/'
  },
  {
    title: "Recognise design",
    description:
      `This portfolio site for RecognizeDesign is crafted with the latest technologies,
       emphasizing meticulous attention to animation and SEO.`,
    tags: ["Atsrojs", "Tailwindcss", "Strapi cms",],
    imageUrl: rec,
    href: 'https://www.recognisedesign.com/'

  },

  {
    title: "Addis Astemari",
    description:
      `Addis Astemari helps schools and educators in creating 
      fully customizable teaching websites, as well as in building and selling online courses.`,
    tags: ["Nextjs", "Mantine ui", "Tailwindcss"],
    imageUrl: astmari,
    href: 'https://www.addisastemari.com/'
  },



  // {
  //   title: "5killo bookclub",
  //   description:
  //     "This site was developed for the 5kilo AAIT Fellowship Book Club students.",
  //   tags: ["React", "Nextjs", "React query", "Shadcn ui", "Nest.js", "Mongodb"],
  //   imageUrl: book,
  //   href: 'https://bookclub-5kilo.vercel.app/'
  // },


  // {
  //   title: "Merine",
  //   description:
  //     `Merine is dedicated to listing businesses across various categories, 
  //     where users can explore detailed profiles, leave reviews, and rate their experiences. `,
  //   tags: ["Nextjs", "React query", "Shadcn ui", "Express.js", "Mongodb"],
  //   imageUrl: m,
  //   href: 'https://www.merinbd.com/'
  // },





] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Nestjs",
  "Django",
  "Strapi cms",
] as const;


export const service = [
  {
    description: " With expertise in MERN Stack, TypeScript, and Next.js, I can help build custom web apps that are optimized for performance, security, and scalability.",
    tag: "Use latest tech stacks.",
    title: "Web Application Development",
    headerText: "I have experiance with  a lot of cool framerworks out there like React,Vue, Nodejs",
  },
  {
    description: "With API development expertise, I can help build powerful and scalable APIs to connect your apps with any service you require.",
    tag: "Scalable APIs.",
    title: "API Development",
    headerText: "Empowering Your Apps with Seamless Third-Party Integrations",
  },
  {
    description: "As a UI/UX designer, I can help design and create intuitive user interfaces that ensure a seamless user experience.",
    tag: "Intuitive Design",
    title: "UI/UX Design",
    headerText: "Crafting User-Focused Interfaces for Seamless App Experiences",
  }
] as const

