import React from "react";
import { motion } from "framer-motion";
import "./about.scss";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      delay: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      delay: 0.4,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.1,
    },
  },
};

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="aboutContent">
          <motion.div
            className="aboutText"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            <motion.h1 variants={headingVariants}>
              <span className="highlight">About</span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Software Developer and Leader
            </motion.h1>
            <p>
              I'm a passionate software developer based on Vancouver Island. I
              love building intuitive, high-performance web applications and
              exploring the latest technologies.
            </p>
            <p>
              With a background in Computer Science and strong leadership
              skills, I bring both technical expertise and teamwork to every
              project.
            </p>
            <p>
              When I’m not coding, you’ll find me lifting weights, hiking
              trails, or trying out new coffee shops and restaurants.
            </p>
          </motion.div>

          <motion.div
            className="aboutImage"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <img src="/about.jpg" alt="Ricardo Fernandes" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
