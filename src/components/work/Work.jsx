import { useRef } from "react";
import "./work.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Work = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const redirectToResume = () => {
    window.location.href = "https://shorturl.at/PMWIq";
  };
  const redirectToBrane = () => {
    window.location.href = "https://www.braneenterprises.com/";
  };
  const redirectToDroom = () => {
    window.location.href = "https://droom.in/";
  };
  return (
    <motion.div
      className="work"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Exceptional programming skills
          <br /> and a swift learning curve.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Work</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Experience</motion.b>{" "}
          </h1>
          <button onClick={redirectToResume}>HIRE ME?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "olive", color: "black" }}
        >
          <img
            src="https://www.braneenterprises.com/assets/images/logo-white.svg"
            alt="Brane"
            className="companyImage"
          />
          <h2 className="descriptions">Brane</h2>
          <p className="designation">Software Engineer</p>
          <p className="timePeriod">June 2024 - August 2024</p>
          <p className="descriptions">
            Worked in the Solution Delivery team to create scalable solutions
            using SaaS. Designed application flows, developed new features, and
            ensured smooth implementation using NSL.
          </p>
          <br className="descriptions" />
          <br className="descriptions" />
          <button onClick={redirectToBrane} className="descriptions">
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "olive", color: "black" }}
        >
          <img
            src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/droom-logo.png"
            alt="Droom"
            className="companyImage"
          />
          <h2 className="descriptions">Droom</h2>
          <p className="designation">Software Engineering intern</p>
          <p className="timePeriod">May 2023 - June 2023</p>
          <p className="descriptions">
            Worked in the back-end engineering team to develop key APIs and user
            authentication features using PHP and Laravel. Enhanced code quality
            and ensured all functionalities were thoroughly tested.
          </p>
          <br className="descriptions" />
          <br className="descriptions" />
          <button onClick={redirectToDroom} className="descriptions">
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Work;
