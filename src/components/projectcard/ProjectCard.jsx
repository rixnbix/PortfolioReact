import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  githubLink,
}) => {
  return (
    <div className="projectCard">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="techStack">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default ProjectCard;
