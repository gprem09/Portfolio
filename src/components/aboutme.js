import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { skills, hobbies } from 'src/constants/personalData.js';
import 'src/app/globals.css';

const AboutMe = ({ isDarkMode }) => {
    return (
        <section className={`aboutMe ${!isDarkMode ? 'light-mode' : ''}`}>
          <div>
            <h1 className={`fonts text-4vw lg:text-3vw xl:text-2.5vw 2xl:text-2vw ${!isDarkMode ? 'light-mode-h' : 'textColor'}`}>
              <BsCodeSlash style={{ display: 'inline-block', color: !isDarkMode ? 'rgb(10,25,47)' : '#65FFDA' }} /> about me
            </h1>
            <p className={`py-4 ${!isDarkMode ? 'textColor' : 'titleColor'}`}>
            I am currently pursuing my Bachelor's degree at Simon Fraser University in Vancouver, BC. I am all about coding, particularly in creating complex applications that make people say "wow." My goal is to help communities and develop software with a team that not only meets but also exceeds expectations.
            </p>

            <p className={`py-4 ${!isDarkMode ? 'light-mode-h2' : 'titleColor'}`}>Here are some languages that I am currently working with;</p>

            <div className="grid grid-cols-3 gap-4 max-w-2xl aboutMeP">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <BiArrowToRight style={{ marginRight: '5px', color: !isDarkMode ? 'rgb(10,25,47)' : '#65FFDA' }} />
                  {skill}
                </div>
              ))}
            </div>
            
            <p className={`py-5 ${!isDarkMode ? 'light-mode-h2' : 'titleColor'}`}>When I&apos;m not working, I like to spend my time;</p>

            <div className="grid grid-cols-3 gap-4 max-w-2xl aboutMeP">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center">
                  <BiArrowToRight style={{ marginRight: '5px', color: !isDarkMode ? 'rgb(10,25,47)' : '#65FFDA' }} />
                  {hobby}
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}

export default AboutMe;