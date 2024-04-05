import React from 'react';
import { AiFillGithub, AiFillFolderOpen } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import 'src/app/globals.css';

const Projects = ({ isDarkMode }) => {
  return (
    <div>
      <h1 className={`fonts project ${!isDarkMode ? 'light-mode-h' : 'textColor'}`}><BsCodeSlash style={{ display: 'inline-block', color: !isDarkMode ? 'rgb(10,25,47)' : '#65FFDA' }} /> projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>

          {/* MRI analysis */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/Brain-Tumor-Detection" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              MRI Analysis
            </h3>
            <p className='py-2 textColor'>
            A system to sort MRI scans and find brain tumours. It was tested to be accurate and makes checking scans faster and cheaper. 
            </p>
            <div className='flex justify-center py-10 gap-4 textColor'>
              <p>Python</p>
              <p>PyTorch</p>
              <p>OpenCV</p>
            </div>
          </div>
          
          {/* Prem A.I. */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/Prem-A.I." target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Prem A.I.
            </h3>
            <p className='py-2 textColor'>
            Prem AI is a virtual assistant that learns efficiently when you add information to a specific folder. It makes the process of fine-tuning much simpler. 
            </p>
            <div className='flex justify-center py-10 gap-4 textColor'>
              <p>Flask</p>
              <p>LangChain</p>
              <p>NextJS</p>
            </div>
          </div>

          {/* TubeTalk */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/Fullstack-Web-Development" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              TubeTalk
            </h3>
            <p className='py-2 textColor'>
            A review platform for films and TV that simplifies discovering and discussing critiques. It searches by genre through a media database and uses secure login. 
            </p>
            <div className='flex justify-center py-10 gap-4 textColor'>
              <p>JavaScript</p>
              <p>NodeJS</p>
              <p>Angular</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
          </div>

          {/* Spirit Experiment */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/2d-Arcade-Java-Game" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Spirit Experiment
            </h3>
            <p className='py-2 textColor'>
            Collaborated with team of 4 to create the "Spirit Experiment", a 2D pixel maze game. Built mazes with a recursive algorithm, placing rewards and special rooms. 
            </p>
            <div className='flex justify-center py-10 gap-4 textColor'>
              <p>Java</p>
              <p>Maven</p>
              <p>JUnit</p>
              <p>Scrum</p>
            </div>
          </div>

          {/* cShell */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/myShell" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              myShell
            </h3>
            <p className='py-2 textColor'>
            A custom built operating system that allows command execution, environment control, history recording etc.
            </p>
            <div className='flex py-10 justify-center textColor'>
              <p>C Language</p>
            </div>
          </div>

          {/* Arduino Gesture Control Car */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <AiFillGithub className='text-xl'/>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Auto-Pilot
            </h3>
            <p className='py-2 textColor'>
            A gesture-controlled car with Arduino that uses individual finger movement for fun and easy car control.
            </p>
            <div className='flex justify-center py-10 textColor'>
                <p>C++ Language</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Projects;
