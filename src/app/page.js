"use client";

import { useEffect, useState, useCallback, Fragment, useMemo } from 'react';
import Projects from 'src/components/project.js';
import AboutMe from 'src/components/aboutMe.js';
import { skills, hobbies } from 'src/constants/personalData.js';
import Navbar from 'src/components/navbar.js';
import Banner from 'src/components/banner.js';

export default function Home() {
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

  return (
    <main className={`md:px-20 lg:px-20 px-10 transition ${isDarkMode ? 'bg-custom-gradient text-white' : 'bg-custom-graident-light bg-color-text'}`}>

      <Navbar isDarkMode={isDarkMode} toggleDarkMode={setIsDarkMode} />

      <Banner isDarkMode={isDarkMode} text={text} shouldBlink={shouldBlink} />

      <AboutMe isDarkMode={isDarkMode} skills={skills} hobbies={hobbies} />

      <Projects isDarkMode={isDarkMode} />

      <div className='text-center textColor p-5'>
        <p className='py-2' style={{ fontSize: '12px' }}>Built and designed by Gnanavel Premnath.</p>
        <p style={{ fontSize: '12px' }}>All rights reserved. ©</p>
      </div>
    </main>
  )
}

