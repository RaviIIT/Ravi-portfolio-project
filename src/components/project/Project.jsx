import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Bill Manager",
    img: "/billManager.png",
    desc: "Bill Manager is an easy-to-use web application that helps you keep track of your bills and financial transactions. It simplifies managing your finances by reducing the need for paperwork and provides a user-friendly interface for tracking and updating your expenses.",
    demoUrl: "https://github.com/RaviIIT/Bill-Manager",
    skills: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "JWT",
    ],
  },
  {
    id: 2,
    title: "LAN Group Chat Application",
    img: "/chatApp.png",
    desc: "This application enables real-time chatting with friends over a local network using a user-friendly interface. Developed with Tkinter and Python, it supports user registration, authentication, and features like sending messages, files, and emoticons. Users can also invite friends, clear chats, and manage block settings.",
    demoUrl:
      "https://www.youtube.com/watch?v=2_QLU3ObyY8&list=PLk5f-HNHepqF1DetO1nrKZLAhytENlMS9",
    skills: ["Python", "Tkinter", "Sockets Programming"],
  },
  {
    id: 3,
    title: "Online Shopping Application",
    img: "/onlineStore.jpg",
    desc: "Created an Android app that lets users shop online. The app provides a smooth experience by showing product listings and updating in real-time. Users can sign in and manage their accounts securely. The app features an easy-to-use interface with product categories and interactive elements to enhance shopping.",
    demoUrl:
      "https://www.youtube.com/watch?v=JZ1txvmHCiI&list=PLk5f-HNHepqFxKOI_cvkW0NvZXqf_NDSu",
    skills: ["XML", "JAVA", "Cloud Firebase", "Android Development"],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="skills">
              <h4>Skills : {item.skills.join(", ")}</h4>
            </div>
            <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="Project" className="project" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
