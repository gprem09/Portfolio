import React from 'react';
import { AiFillGithub, AiFillFolderOpen } from 'react-icons/ai';

const ProjectCard = ({ isDarkMode, title, description, githubLink }) => {
  return (
    <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
      <div className='flex justify-between'>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <AiFillGithub size={30} className='text-xl'/>
        </a>
        <AiFillFolderOpen size={30} className='text-xl'/>
      </div>
      <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
        {title}
      </h3>
      <p className='py-2 textColor'>
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
