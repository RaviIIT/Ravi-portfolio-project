import { motion, animate } from "framer-motion";
import "./introPage.scss";
import TypingEffect from "../TypingEffect";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const scrollToProjects = () => {
  const element = document.getElementById("Project");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToContact = () => {
  const element = document.getElementById("Contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const IntroPage = () => {
  return (
    <div className="introPage">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RAVI KUMAR</motion.h2>
          <motion.h1 variants={textVariants}>
            <TypingEffect
              texts={["IITian", "Software Developer", "Programmer"]}
            />
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={scrollToProjects}>
              {" "}
              See the latest works
            </motion.button>
            <motion.button variants={textVariants} onClick={scrollToContact}> Contact me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        IITian Developer Programmer
      </motion.div>
      <div className="imageContainer">
        <img src="/raviImage.png" />
      </div>
    </div>
  );
};

export default IntroPage;
