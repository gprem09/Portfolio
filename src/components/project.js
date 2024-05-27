import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import ProjectCard from './projectCard.js';
import 'src/app/globals.css';

const Projects = ({ isDarkMode }) => {
  const projectData = [
    {
      title: "HoloSpace 3D",
      description: "Built an AI-powered social platform that generates photorealistic 3D scenes from videos, enabling users to share, post, and interact with 3D content across iOS devices for a unique social experience.",
      githubLink: "https://github.com/reinesana/HoloSpace3D"
    },
    {
      title: "Urban.I",
      description: "Developed a platform that leverages AI to revitalize urban spaces impacted by conflict or natural disasters, while seamlessly connecting businesses with leading urban planners",
      githubLink: "https://github.com/gprem09/Urban.I"
    },
    {
      title: "MRI Analysis",
      description: "A system that reads MRI scans and find if tumours exist. It was tested to be accurate and boosted cost-effective preliminary diagnosis in healthcare by reducing time and resources required for MRI analysis.",
      githubLink: "https://github.com/gprem09/Brain-Tumor-Detection"
    },
    {
      title: "Spirit Experiment",
      description: "Collaborated with team of 4 to create the 'Spirit Experiment', a 2D pixel maze game. Built mazes with a recursive algorithm, placing rewards and special rooms.",
      githubLink: "https://github.com/gprem09/2d-Arcade-Java-Game"
    },
    {
      title: "myShell",
      description: "A custom built operating system that allows command execution, environment control, history recording etc.",
      githubLink: "https://github.com/gprem09/myShell"
    },
    {
      title: "Auto-Pilot",
      description: "A gesture-controlled car with Arduino that uses individual finger movement for fun and easy car control.",
      githubLink: "#"
    }
  ];

  return (
    <div>
      <h1 className={`fonts project_h1 ${!isDarkMode ? 'light-mode-h' : 'textColor'}`}>
        <BsCodeSlash style={{ display: 'inline-block', color: !isDarkMode ? 'rgb(10,25,47)' : '#65FFDA' }} /> projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            isDarkMode={isDarkMode}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
