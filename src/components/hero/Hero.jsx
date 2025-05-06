import "./hero.scss";
import { motion } from "motion/react";

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
    x: "-310%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RICARDO FERNANDES</motion.h2>
          <motion.h1 variants={textVariants}>Full stack developer</motion.h1>
          <motion.div variants={textVariants}>
            <motion.a
              href="#Portfolio"
              className="button-link"
              variants={textVariants}
            >
              See my projects
            </motion.a>
            <motion.a
              href="#Contact"
              className="button-link"
              variants={textVariants}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="/scroll.png"
            alt=""
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Fitness Coffee Travel
      </motion.div>
      <div className="imageContainer">
        <img className="imgHero" src="/hero.png" alt="Ricardo Potrait" />
      </div>
    </div>
  );
};

export default Hero;
