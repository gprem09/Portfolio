import React from "react";
import {AiFillLinkedin, AiFillMail, AiFillGithub} from 'react-icons/ai'
import DarkModeToggle from 'src/app/DarkModeToggle.js';
import "src/app/globals.css";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    return(
        <nav className='py-10 mb-12 flex justify-between'>
        <div className={`flex items-center gap-8 transition ${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'}`}>
          <a href="https://www.linkedin.com/in/gnanavel-premnath-b27a53235/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='text-2xl'/>
          </a>
          <a href="mailto:gpa21@sfu.ca" target="_blank" rel="noopener noreferrer">
            <AiFillMail className='text-2xl'/>
          </a>
          <a href="https://github.com/gprem09" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className='text-2xl'/>
          </a>
        </div>
          
          <ul className='flex item-center'>
            <li>
              <DarkModeToggle 
                isDarkMode={isDarkMode} 
                toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
              />
            </li>
            <li>
              <a className={`px-3 py-4 ml-8 transition ${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'} hover:text-teal-700`} 
                href='/Gnanavel_Premnath_Resume.pdf' 
                target="_blank" 
                rel="noopener noreferrer" 
                download="Gnanavel_Premnath_Resume.pdf">
                Resume
              </a>
            </li>
          </ul>
      </nav>
    )
}

export default Navbar;