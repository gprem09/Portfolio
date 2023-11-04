"use client";

import Image from 'next/image'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillInstagram, AiFillMail} from 'react-icons/ai'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <main className={`px-10 transition ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
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
              <a className='px-4 py-2 ml-8 bg-gradient-to-r from-cyan-700 to-teal-700 rounded-md' href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 font-medium text-teal-700'>
            Gnanavel Premnath
          </h2>
          <h3 className='text-2xl py-2'>
            Software Developer
          </h3>
          <p className='text-md py-5 leading-8'>
            Navigating the wild world of Computer Science at Simon Fraser University in the ever-rainy Vancouver, BC, I've found myself caught in a love triangle between full-stack development, artificial intelligence, and game development. It's like a techy soap opera, and I'm here for all the drama!
          </p>
        </div>
      </section>
    </main>
  )
}

