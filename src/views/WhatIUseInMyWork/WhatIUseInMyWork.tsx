import expressIcon from "../../assets/express.png";
import htmlIcon from "../../assets/html5.png";
import djangoIcon from "../../assets/django.png";
import javascriptIcon from "../../assets/javascript.png";
import mongoIcon from "../../assets/mongo.png";
import nestIcon from "../../assets/nest.png";
import nextIcon from "../../assets/next.webp";
import nodeIcon from "../../assets/node.png";
import nuxtIcon from "../../assets/nuxt.png";
import postgresqlIcon from "../../assets/postgresql.png";
import pythonIcon from "../../assets/python.png";
import reactIcon from "../../assets/react.png";
import reduxIcon from "../../assets/redux.png";
import sassIcon from "../../assets/sass.png";
import tailwindIcon from "../../assets/tailwind.png";
import typescriptIcon from "../../assets/typescript.png";
import vueIcon from "../../assets/vue.png";
import websocketIcon from "../../assets/websocket.png";
import antIcon from '../../assets/ant.png';
import cssIcon from '../../assets/css.png';

const data = [
  {
    id: 1,
    icon: htmlIcon,
    title: "HTML",
    text: "A common thing that must know every web developer. I can write semantic markup and use sample libraries.",
  },
  {
    id: 2,
    icon: javascriptIcon,
    title: "JavaScript",
    text: "The most popular programming language for web development. It was the first thing that I lerned on my full-stack courses.",
  },
  {
    id: 3,
    icon: typescriptIcon,
    title: "Typescript",
    text: "A very useful extension for JavaScript that allows us to write typesafe code. I often use it in my work.",
  },
  {
    id: 4,
    icon: reactIcon,
    title: "React & React Native",
    text: "One of many popular libraries for fronted development, also can be use in mobile development with some difference. React is my core library that I use for fronted parts of my works.",
  },
  {
    id: 5,
    icon: reduxIcon,
    title: "Redux",
    text: "Popular state managment library. The second thing that I use in my work with React.",
  },
  {
    id: 6,
    icon: nodeIcon,
    title: "Node.js",
    text: "A very important thing if you would like to create a backend part or to build your frontend part. I was learning Node.js while I stydied on full-stack courses.",
  },
  {
    id: 7,
    icon: expressIcon,
    title: "Express",
    text: "A very good library for simple backend sides, convinient and easy. I'm usining it when I need to create backend side fast.",
  },
  {
    id: 8,
    icon: nextIcon,
    title: "Next 13+",
    text: "My favourite framework for web development. Next.js allows us to create SEO optimizable projects using react.",
  },
  {
    id: 9,
    icon: nestIcon,
    title: "Nest",
    text: "Nest is a framework for backend development, it allows us to write scallable architecture.",
  },
  {
    id: 10,
    icon: websocketIcon,
    title: "Websocket",
    text: "Websocket is a very popular computer communication protocol. Using when we need real-time communication between client and server.",
  },
  {
    id: 11,
    icon: mongoIcon,
    title: "MongoDB",
    text: "Non-relational database manage system. Convinient and simple for using, I use it with Express or Nest servers.",
  },
  {
    id: 12,
    icon: postgresqlIcon,
    title: "PostgreSQL",
    text: "A very popular relational database manage system, a little bit simmilar with MySQL but has some extensions. I use it with Django, Python",
  },
  {
    id: 13,
    icon: pythonIcon,
    title: "Python",
    text: "One of my favourite programming language, dynamic like JavaScript. Now I learn machine learning and data science and Python is the best in these.",
  },
  {
    id: 14,
    icon: djangoIcon,
    title: "Django",
    text: "Python framework for web development. It is very convinient because it has built-in necessary features like routing, database managment system, http module e.t.c",
  },
  {
    id: 15,
    icon: vueIcon,
    title: "Vue",
    text: "One of popular framework for web development. I have an experience in work with vue and I can create scallable frontend projects using vue and vuex.",
  },
  {
    id: 16,
    icon: nuxtIcon,
    title: "Nuxt",
    text: "Nuxt is a framework for vue like Next.js for react, it also allows us to create SEO optimizable projects.",
  },
  {
    id: 17,
    icon: sassIcon,
    title: "SASS",
    text: "A very useful preprocessor for styling frontend part of application. Technicaly it allows us to write independent styles and make stylizing process more convinient.",
  },
  {
    id: 18,
    icon: tailwindIcon,
    title: "Tailwind",
    text: "Simple library for stylizing components in frontend, it allows us to style our components using only classes.",
  },
  {
    id: 19,
    icon: antIcon,
    title: "Ant design",
    text: "Ant design is a components library for react. It is a very convinient to reuse complited components from this library.",
  },
  {
    id: 20,
    icon: cssIcon,
    title: "CSS",
    text: "The basic thing like HTML that must know any good web developer.",
  },
];

export const WhatIUseInMyWork = () => {
  return (
    <section>
      <div className="max-sm:w-full max-md:w-[540px] max-lg:w-[720px] xl:w-[1140px] mx-auto my-0 max-md:pt-[40px] pt-[200px] max-sm:px-[10px] xl:px-[0] px-[15px]">
        <h2 id="skills" className="w-[200px] mx-auto text-center font-bold text-base font-[Poppins] relative z-2 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1 before:left-[64px] before:-top-[5px]">Skills</h2>
        <span className="max-md:mt-[30px] max-md:leading-[45px] block font-bold text-4xl font-[Poppins] leading-[60px] text-center">What I use in my work</span>
        <div className="h-[3px] w-[60px] bg-amber-400 mx-auto mt-[22px]"></div>
        <ul className="max-xl:grid-cols-[repeat(auto-fit,270px)] xl:w-[1113px] xl:mx-auto grid-cols-4 justify-center grid gap-[11px] mt-[60px]">
          {data.map((item) => (
            <li key={item.id} className="border-black border-[1px] w-[270px] h-[270px]">
              <div className="pt-[30px] pb-[24px] px-[28px] grid grid-rows-[65px_auto] gap-y-[20px]">
                <div className="">
                  <img className="block max-h-[65px]" src={item.icon} />
                </div>
                <div>
                  <span className="block font-bold text-sm font-[Poppins]">
                    {item.title}
                  </span>
                  <p className="font-[Poppins] text-xs mt-[15px]">{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
