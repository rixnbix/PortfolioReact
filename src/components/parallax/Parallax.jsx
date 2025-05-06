import "./parallax.scss";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "portfolio"
            ? "linear-gradient(180deg, black, rgb(58, 222, 255))"
            : "linear-gradient(180deg, black, rgb(30, 161, 255))",
      }}
    >
      <motion.h1 style={{ y: yText }} className={`textHeading ${type}`}>
        {type === "portfolio" ? "My creations" : "Get to know me"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "portfolio" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
