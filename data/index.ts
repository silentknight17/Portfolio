export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#work_experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Skills",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Accolades",
    description: "Multiple Jeevansathi Rockstar awards and a coveted Platinum Infoedge Merit Award for outstanding performance in critical projects",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Day to Day Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Frontend Engineer with an Eye on AI; UI-Driven. AI-Inspired.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Education",
    description: "Motilal Nehru National Institute of Technology, Allahabad",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-start",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const skillSet = [
  {
    skillSubheading: "Languages",
    skills: "Javascript, TypeScript, C, C++",
  },
  {
    skillSubheading: "Frontend Technologies and Framework",
    skills: "HTML, CSS, React Js, Next Js, Tailwind CSS, TensorFlow.js",
  },
  {
    skillSubheading: "Backend Technologies and Frameworks",
    skills: "NodeJS, ExpressJS",
  },
  {
    skillSubheading: "Other key skills",
    skills: "Tech Designing, Documenting, Debugging, Deployment, Server Maintenance, Git, Agile Methodology",
  },
  
]

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    description: "Motilal Nehru National Institute of Technology, Allahabad",
    marks: "CPI: 9.06"
  },
  {
    id: 2,
    degree: "Senior Secondary Education (ISC) (Class 12)",
    description: "Holy Cross Convent School, Ballia, Uttar Pradesh",
    marks: "Percentage: 97.75%",
  },
  {
    id:3,
    degree: "Secondary Education (ICSE) (Class 10)",
    description: "Holy Cross Convet School, Ballia, Uttar Pradesh", 
    marks: "Percentage: 97.20%",
  }
]

export const projects = [
  {
    id: 1,
    title: "Jeevansathi Monetization Initiatives",
    des: "List of Projects which were focussed on increasing the revenue of Jeevansathi Business",
    img: "/JSMonetisation.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "nodejs.webp"],
    link: "https://www.notion.so/Jeevansathi-Monetization-Initiatives-20afaaac223a809aa5b8c3d0550e55a7?source=copy_link",
  },
  {
    id: 2,
    title: "Jeevansathi Premier and Reviews",
    des: "Mobile and Desktop Site Pages for the Premier Section of Jeevansathi, meant for affluent people",
    img: "/premier.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
    link: "https://www.jeevansathi.com/jspremier",
  },
  {
    id: 3,
    title: "Personalised Wedding Invite",
    des: "Creation of personalized wedding invitation videos (which can be used to create Virtual Influencers too) using audio generation, image hosting, and video synthesis APIs",
    img: "/weddingInvite.jpeg",
    iconLists: ["python.jpeg", "collab.png"],
    link: "https://github.com/silentknight17/Personalised-wedding-invite",
  },
  {
    id: 4,
    title: "Detect Similar Images",
    des: "Used to detect similar images using TensorFlow.js",
    img: "/Detection.jpg",
    iconLists: ["/next.svg", "/js.png", "tfjs.png"],
    link: "https://github.com/silentknight17/Detecting-Similar-Images",
  },
];




export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer at Info edge India",
    desc: "Currently working in this role for Jeevansathi business vertical, building web apps which can be used by Android as well ios apps. Responsible for developing and maintaining the frontend ecosystem",
    className: "md:col-span-2", 
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Software Engineer at Info edge India",
    desc: "Built responsive, scalable web apps for Jeevansathi business vertical of Infoedge primarily working in Payments section",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  
  {
    id: 3,
    title: "Nestle India Winter Intern",
    desc: "Designed Web apps to showcase the Q-Pillars necessary for maintaining the quality of Nestle Products",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "Marketing and PR Lead for College Societies",
    desc: "While my primary focus is development, I’ve also gained experience in Marketing and Public Relations—serving as the PR Lead for my college’s Cultural Festival and the Marketing Lead for its Hackathon event",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    redirectTo: "https://github.com/silentknight17",
  },
  {
    id: 2,
    img: "/twit.svg",
    redirectTo: "https://x.com/storm___pegasus",
  },
  {
    id: 3,
    img: "/link.svg",
    redirectTo: "https://www.linkedin.com/in/sarvagya-prateek-926b5717b/",
  },
];
