"use client";

import Image from 'next/image'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillMail, AiFillGithub} from 'react-icons/ai'
import DarkModeToggle from './DarkModeToggle'; 

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <main className={`md:px-20 lg:px-20 px-10 transition ${isDarkMode ? 'bg-teal-950 text-white' : 'bg-white text-black'}`}>
      <section className="min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
          <div className='flex item-center gap-8'>
            <AiFillLinkedin className='text-2xl'/>
            <AiFillMail className='text-2xl'/>
            <AiFillGithub className='text-2xl'/>
          </div>
          
          <ul className='flex item-center'>
            <li>
              <DarkModeToggle 
                isDarkMode={isDarkMode} 
                toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
              />
            </li>
            <li>
              <a className='px-6 py-4 ml-8' href="https://tmpfiles.org/dl/3065132/gnanavel_premnath_resume.pdf" target="_blank" rel="Resume">Resume</a>
            </li>
          </ul>
        </nav>

        <section className='home'>
          <div className='home-content'>
            <h1>
              Hi, <span> I&apos;m Gnanavel Premnath</span>
            </h1>
            <div className='text-2xl'>
              <h3>Software Developer</h3>
            </div>
            <p className='text-xl'>
              Navigating the wild world of Computer Science at Simon Fraser University in the ever-rainy Vancouver, BC, I&apos;ve found myself caught in a love triangle between full-stack development, artificial intelligence, and game development. It&apos;s like a techy soap opera, and I&apos;m here for all the drama!
            </p>
          </div>
        </section>

        <div>
          <h3 className='text-3xl'>
            Projects:
          </h3>
        </div>
        <div className='grid lg:grid-cols-2 gap-10'>
          <div className='shadow-lg p-10 rounded-xl my-10'>
            <AiFillGithub className='text-xl'/>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 text-teal-500'>
              Full Stack Development
            </h3>
            <p className='py-2'>
            In September 2022, I designed and deployed a multimedia review platform built with the MEAN stack, aimed at improving the way users engage with movie and TV show reviews. This platform features integration with the TMDb API, which allows for easy access to movie and TV show data and lets users search for content by genre. For user security and management, the platform includes JWT for user authentication and CRUD operations. The backend is powered by MongoDB, offering a scalable database solution. The application is hosted on Google Cloud Platform to ensure it runs smoothly and can handle more users as it grows.
            </p>
            <h4 className='text-center py-4 text-teal-500'>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-between'>
                <p className='py-1'>JavaScript</p>
                <p className='py-1'>MongoDB</p>
                <p className='py-1'>Express</p>
                <p className='py-1'>Angular</p>
                <p className='py-1'>NodeJS</p>
              </div>
          </div>

          <div className='shadow-lg p-10 rounded-xl my-10'>
            <AiFillGithub className='text-xl'/>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 text-teal-500'>
              Angular Project
            </h3>
            <p className='py-2'>
              In March 2021, I developed a dynamic Angular web application that allowed the public to report and monitor missing pigs effectively. This platform offers enhanced engagement and functionality through interactive features. With CRUD operations, JSON libraries, and REST APIs, the app manages data on a web server seamlessly. I integrated the Leaflet maps API to help users filter reports, interact with map markers, and obtain a detailed view of pig sightings. The application includes well-designed forms for easy report submission and smart feedback systems for handling user errors, ensuring an intuitive and smooth user experience.
            </p>
            <h4 className='text-center py-4 text-teal-500'>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-between'>
                <p className='py-1'>Angular</p>
                <p className='py-1'>HTML</p>
                <p className='py-1'>CSS</p>
                <p className='py-1'>TypeScript</p>
              </div>
          </div>
        
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1'>About Me</h3>
          <p>UNDER CONSTRUCTION</p>
        </div>
      </section>

    
    </main>
  )
}

