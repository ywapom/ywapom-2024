export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration, and foster open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I've worked with and managed globally distributed teams",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "I constantly learn",
    description: "tech",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I have a post-graduate certificate in Machine Learning & Artificial Intelligence",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring AI's use in Test Automation",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/code.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Reach out by email",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "VR Automation",
    des: "Created a Test Automation Framework for Oculus at Meta",
    img: "/ocu.jpeg",
    iconLists: ["/Python-logo-notext.png","/perfetto-logo.gif", "/oculus-icon.png", "/android-icon.jpeg", "/adb-icon.png"],
    link: "",
  },
  {
    id: 2,
    title: "FB Messenger Automation",
    des: "Awarded 'Jest-Hero' for jest-e2e automation work at Meta",
    img: "/msg-icon.jpeg",
    iconLists: ["/jest-e2e.png", "/instagram_icon.png", "/ts.svg", "/vscode-icon.png", "/re.svg"],
    link: "",
  },
  {
    id: 3,
    title: "Support Ticket Categorization",
    des: "Leveraged AI: NLP, and Transformer Models, with Prompt Engineering to categorize support tickets",
    img: "/MLAI.jpeg",
    iconLists: ["/AI-icon.png", "/uot.png", "/ml2.png", "/Python-logo-notext.png", "/colab-icon.png"],
    link: "/ui.aiimg.com",
  },
];

export const testimonials = [
  {
    quote:
      "...contributed greatly to the quality and supportability of our highly complex enterprise application suite.",
    name: "Christopher Cambell",
    title: "CEO at AssetSmart",
    img: "/profile_cc.jpeg",
  },
  {
    quote:
      "Ron is a highly intelligent, motivated, and creative problem solver... I have no hesitation in recommending him to anyone.",
    name: "Richard Piedra",
    title: "Director of Quality Assurance at Conduce",
    img: "/profile_rp.jpeg",
  },
  {
    quote:
      "...he excelled in writing automation and test tools to reduce testing time and increase coverage.",
    name: "Paul Davis",
    title: "Director of Engineering at Rovi",
    img: "/profile_pd.jpeg",
  },

];

export const companies = [
  {
    id: 1,
    nameImg: "/meta.svg",
    
  },
  {
    id: 2,
    nameImg: "/AssetSmart.png",
  },
  {
    id: 3,
    nameImg: "/conduce.jpeg",
  },
  {
    id: 4,
    nameImg: "/tivo.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "VR Tools Developer",
    desc: "Developed Test Frameworks for VR Headsets",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Test Automation Scripter",
    desc: "Developed automated tests for Meta's Messenger",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Senior Developer",
    desc: "Automated tests, builds, and installations, along with full-stack development",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Principal QA Engineer",
    desc: "Lead QA work and automation development",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const otherSkills = [
  {
    id: 1,
    title: "National Chess Master",
    desc: "Former Los Angeles County Champion & National USAT Undefeated Champion",
    className: "md:col-span-2",
    thumbnail: "/chess.png"
  },
  {
    id: 2,
    title: "I enjoy composing",
    desc: 'Check out the <a href="https://s3.amazonaws.com/www.ywapom.com/vid/RH_visit_flim_mix.mp4" target="_blank" rel="noopener noreferrer" class="text-blue-500 font-bold hover:text-blue-700">filmscore</a> I wrote while visiting beautiful Thessaloniki!',
    className: "md:col-span-2",
    thumbnail: "/thess.png",
  },
  {
    id: 3,
    title: "I adopt Red Pandas",
    desc: 'You can donate too, <a href="https://redpandanetwork.org" target="_blank" rel="noopener noreferrer" class="text-blue-500 font-bold hover:text-blue-700">here</a> (redpandanetwork.org)',
    className: "md:col-span-2",
    thumbnail: "/panda.png",
  },
  {
    id: 4,
    title: "I like traveling to historic sites",
    desc: '',
    className: "md:col-span-2",
    thumbnail: "/athens.png",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
