import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import ProjectCard from './projectCard.js';
import 'src/app/globals.css';

const Projects = ({ isDarkMode }) => {
  const projectData = [
    {
      title: "MRI Analysis",
      description: "A system to sort MRI scans and find brain tumours. It was tested to be accurate and makes checking scans faster and cheaper.",
      githubLink: "https://github.com/gprem09/Brain-Tumor-Detection"
    },
    {
      title: "Prem A.I.",
      description: "Prem AI is a virtual assistant that learns efficiently when you add information to a specific folder. It makes the process of fine-tuning much simpler.",
      githubLink: "https://github.com/gprem09/Prem-A.I."
    },
    {
      title: "TubeTalk",
      description: "A review platform for films and TV that simplifies discovering and discussing critiques. It searches by genre through a media database and uses secure login.",
      githubLink: "https://github.com/gprem09/Fullstack-Web-Development"
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
