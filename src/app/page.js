"use client";

import { useEffect, useState, useCallback, Fragment, useMemo } from 'react';
import {AiFillLinkedin, AiFillMail, AiFillGithub, AiOutlineEllipsis, AiFillFolderOpen} from 'react-icons/ai'
import { BiArrowToRight } from "react-icons/bi";
import { BsCodeSlash,  } from "react-icons/bs";
import { PiCarProfileFill } from 'react-icons/pi';
import DarkModeToggle from './DarkModeToggle'
import { Col, Container, Row } from 'react-bootstrap';
import Projects from 'src/components/project.js';
import AboutMe from 'src/components/aboutMe.js';
import { skills, hobbies } from 'src/constants/personalData.js';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [shouldBlink, setShouldBlink] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = useMemo(() => [
    "Software", "Web", "Game"
  ], []);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => Math.max(prevDelta / 2, 50)); 
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setShouldBlink(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setShouldBlink(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [text, isDeleting, loopNum, toRotate, setIsDeleting, setText, setDelta]);

  useEffect(() => {
    let ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollableDistance = docHeight - windowHeight;

      const progress = (scrollPosition / totalScrollableDistance) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500); 
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isJumping]);

  const iconStyle = {
    position: 'fixed',
    bottom: '-2px',
    left: `${scrollProgress}%`,
    transform: 'translateX(-50%)', 
    transition: 'left 0.2s ease-out', 
    zIndex: 1
  };

  return (
    <main className={`md:px-20 lg:px-20 px-10 transition ${isDarkMode ? 'bg-custom-gradient text-white' : 'bg-custom-graident-light bg-color-text'}`}>

       
      <div style={iconStyle}>
        <PiCarProfileFill
          className={`text-2xl z-1 ${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'} ${isJumping ? 'jump' : ''}`}
        />
      </div>  
      

      <section className="min-h-screen">
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
        <section className={`banner ${!isDarkMode ? 'light-mode' : ''}`} id='home'>
          <Container fluid>
            <Row>
              <Col xs={12} md={6} xl={7}>
                <h1>Hi, I&apos;m <span className={`fonts transition ${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'}`}>Gnanavel</span> Premnath<span className={`p-1 ${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'}`}>;</span></h1>

                <h2>
                  <BsCodeSlash className={`${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'}`} style={{ display: 'inline-block' }} /> Am I a <span className={`wrap fonts transition ${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'}`}>
                    {text}
                    <span className={`cursor ${shouldBlink ? 'blinking-cursor' : ''}`}>|</span>
                  </span> Developer?
                </h2>
                
                <p className='ErikasBuero'>
                I'm passionate about creating applications that can solve real-world problems. I am always looking for new opportunities to learn and grow, and excited to engage with my fellow tech community and level up my professional game. 
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <AboutMe isDarkMode={isDarkMode} skills={skills} hobbies={hobbies} />

        <Projects isDarkMode={isDarkMode} />

        <div className='text-center textColor p-5'>
          <p className='py-2' style={{ fontSize: '12px' }}>Built and designed by Gnanavel Premnath.</p>
          <p style={{ fontSize: '12px' }}>All rights reserved. ©</p>
        </div>
      </section>

    
    </main>
  )
}

