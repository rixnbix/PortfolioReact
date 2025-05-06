import { motion } from "motion/react";
const Skills = () => {
  const skills = [
    { name: "Python", logo: "/logos/python.png" },
    { name: "C++", logo: "/logos/cpp.png" },
    { name: "JavaScript", logo: "/logos/java-script.png" },
    { name: "React", logo: "/logos/react.png" },
    { name: "Flask", logo: "/logos/flask.png" },
    { name: "HTML", logo: "/logos/html.png" },
    { name: "CSS", logo: "/logos/css.png" },
    { name: "Oracle", logo: "/logos/oracle.png" },
    { name: "SQL", logo: "/logos/sql.png" },
  ];

  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <motion.div key={index} className="skill">
          <img src={skill.logo} alt={skill.name} />
          <span>{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
