"use client";

import Image from 'next/image'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillInstagram, AiFillMail, AiFillGithub} from 'react-icons/ai'
import devad from 'public/comp.png'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <main className={`md:px-20 lg:px-20 px-10 transition ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <section className="min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
          <div className='flex item-center gap-8'>
            <AiFillInstagram className='text-2xl'/>
            <AiFillLinkedin className='text-2xl'/>
            <AiFillMail className='text-2xl'/>
            <AiFillGithub className='text-2xl'/>
          </div>
          
          <ul className='flex item-center'>
            <li>
              <BsFillMoonStarsFill 
                className='cursor-pointer text-2xl' 
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
            </li>
            <li>
              <a className='px-4 py-2 ml-8 text-white bg-gradient-to-r from-cyan-900 to-teal-900 rounded-md' href="#">Resume</a>
            </li>
          </ul>
        </nav>

        <section className='home'>
          <div className='home-content'>
            <h1>
              Hi, I'm <span>Gnanavel Premnath</span>
            </h1>
            <div className='text-3xl'>
              <h3>SOFTWARE ENGINEER</h3>
            </div>
            <p className='text-xl'>
              Navigating the wild world of Computer Science at Simon Fraser University in the ever-rainy Vancouver, BC, I've found myself caught in a love triangle between full-stack development, artificial intelligence, and game development. It's like a techy soap opera, and I'm here for all the drama!
            </p>
          </div>
        </section>

        <div>
          <h3 className='text-3xl'>
            Projects:
          </h3>
        </div>
        <div className='grid lg:grid-cols-3 gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-2 text-teal-500'>
              Full Stack Development
            </h3>
            <p className='py-2'>
              Made a movie-show review web application using TMDB API
            </p>
            <h4 className='py-4 text-teal-500'>
              Programming languages and Framework used:
            </h4>
            <p className='py-1'>HTML</p>
            <p className='py-1'>CSS</p>
            <p className='py-1'>TS</p>
            <p className='py-1'>ANGULAR</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-2 text-teal-500'>
              Full Stack Development
            </h3>
            <p className='py-2'>
              Made a movie-show review web application using TMDB API
            </p>
            <h4 className='py-4 text-teal-500'>
              Programming languages and Framework used:
            </h4>
            <p className='py-1'>HTML</p>
            <p className='py-1'>CSS</p>
            <p className='py-1'>TS</p>
            <p className='py-1'>ANGULAR</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-2 text-teal-500'>
              Full Stack Development
            </h3>
            <p className='py-2'>
              Made a movie-show review web application using TMDB API
            </p>
            <h4 className='py-4 text-teal-500'>
              Programming languages and Framework used:
            </h4>
            <p className='py-1'>HTML</p>
            <p className='py-1'>CSS</p>
            <p className='py-1'>TS</p>
            <p className='py-1'>ANGULAR</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-2 text-teal-500'>
              Full Stack Development
            </h3>
            <p className='py-2'>
              Made a movie-show review web application using TMDB API
            </p>
            <h4 className='py-4 text-teal-500'>
              Programming languages and Framework used:
            </h4>
            <p className='py-1'>HTML</p>
            <p className='py-1'>CSS</p>
            <p className='py-1'>TS</p>
            <p className='py-1'>ANGULAR</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-2 text-teal-500'>
              Full Stack Development
            </h3>
            <p className='py-2'>
              Made a movie-show review web application using TMDB API
            </p>
            <h4 className='py-4 text-teal-500'>
              Programming languages and Framework used:
            </h4>
            <p className='py-1'>HTML</p>
            <p className='py-1'>CSS</p>
            <p className='py-1'>TS</p>
            <p className='py-1'>ANGULAR</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-2 text-teal-500'>
              Full Stack Development
            </h3>
            <p className='py-2'>
              Made a movie-show review web application using TMDB API
            </p>
            <h4 className='py-4 text-teal-500'>
              Programming languages and Framework used:
            </h4>
            <p className='py-1'>HTML</p>
            <p className='py-1'>CSS</p>
            <p className='py-1'>TS</p>
            <p className='py-1'>ANGULAR</p>
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

