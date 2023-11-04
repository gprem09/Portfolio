"use client";

import Image from 'next/image'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillInstagram, AiFillMail} from 'react-icons/ai'
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
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 font-medium text-teal-600 md:text-6xl'>
            Gnanavel Premnath
          </h2>
          <h3 className='text-2xl py-2 md:text-3xl'>
            Software Developer
          </h3>
          <p className='text-md py-5 leading-8 md:text-xl'>
            Navigating the wild world of Computer Science at Simon Fraser University in the ever-rainy Vancouver, BC, I've found myself caught in a love triangle between full-stack development, artificial intelligence, and game development. It's like a techy soap opera, and I'm here for all the drama!
          </p>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-cyan-900 to-teal-900 rounded-full w-80 h-80 overflow-hidden'>
          <Image src={devad} layout='fill' objectFit='cover'/>
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl mt-10 mb-5'>
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
        </div>
      </section>
    </main>
  )
}

