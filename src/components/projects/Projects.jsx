import ProjectCard from "../projectcard/ProjectCard";
import Skills from "../skills/Skills";
import { motion } from "framer-motion";
import "./projects.scss";

const cardVariants = {
  initial: {
    x: 500,
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
};

const projectCardVariants = {
  initial: { x: 0, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 2 } },
};

const skillsVariants = {
  initial: { y: 100, opacity: 0 }, // Start from below the viewport
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Projects = () => {
  const projectList = [
    {
      title: "Iron Journal(work-in-progress)",
      image: "/ironjournal.png",
      description:
        "A web app which will be used to create, edit and log workouts and also provide statistics and analytics to measure progress",
      technologies: ["React", "Next.js", "PostgreSQL"],
      githubLink: "https://github.com/rixnbix/IronJournal",
    },
    {
      title: "GymOS",
      image: "https://github.com/rixnbix/GymOS/blob/main/logo.png?raw=true",
      description:
        "A full-stack web-app that can be used by fitness facilities to manage members and trainers",
      technologies: ["Python", "Flask", "Oracle"],
      githubLink: "https://github.com/rixnbix/GymOS",
    },
    {
      title: "My Portfolio",
      image: "/portfolio.png",
      description: "My personal website that showcases my projects",
      technologies: ["React", "Motion", "HTML", "Javascript", "SCSS"],
      githubLink: "https://github.com/rixnbix/PortfolioReact",
    },
    {
      title: "Pixel Chess",
      image:
        "https://github.com/prometheus-viu/Pixel-Chess/blob/main/assets/screenshots/chessboard.gif?raw=true",
      description: "A Pass and play Chess game with a GUI",
      technologies: ["C++", "SDL2", "OOP"],
      githubLink: "https://github.com/prometheus-viu/Pixel-Chess",
    },
    /**    {
      title: "JobLens",
      image: "/joblens.png",
      description:
        "An application tracking web-app that matches resumes with job descriptions",
      technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/rixnbix/JobLens",
    }, */
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <motion.div
        className="projectCards"
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={projectCardVariants}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="projectCardWrapper"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="skillsSection"
        variants={skillsVariants}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", stiffness: 300 }}
        viewport={{ once: true }}
      >
        <h1>Skills</h1>
        <Skills />
      </motion.div>
    </div>
  );
};

export default Projects;
