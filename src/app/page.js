"use client";

import Image from 'next/image'
import { useEffect, useState, useCallback } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillMail, AiFillGithub} from 'react-icons/ai'
import DarkModeToggle from './DarkModeToggle'
import { Col, Container, Row } from 'react-bootstrap';


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software", "Web", "Game"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => Math.max(prevDelta / 2, 50)); // Ensure it doesn't go too low
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [text, isDeleting, loopNum, toRotate, setIsDeleting, setText, setDelta]);

  useEffect(() => {
    let ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

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



        <section className='banner' id='home'>
          <Container>
            <Row className='text-center'>
              <Col xs={12} md={6} xl={7}>
                <h1>Hi I&apos;m Gnanavel Premnath</h1>
                <h2>Am I <span className='wrap'>{text}</span> Developer?</h2>
                <p>Navigating the wild world of Computer Science at Simon Fraser University in the ever-rainy Vancouver, BC, I&apos;ve found myself caught in a love triangle between full-stack development, artificial intelligence, and game development. It&apos;s like a techy soap opera, and I&apos;m here for all the drama!</p>
                <button onClick={()=>console.log('connect')}>Interest Me?</button>
              </Col>
            </Row>
          </Container>
        </section>



        <div className='banner'>
          <h3 className='text-3xl'>
            Projects:
          </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
          {/* Full Stack Development */}
          <div className='shadow-lg p-10 rounded-xl my-10'>
            <a href="https://github.com/gprem09/Fullstack-Web-Development" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='text-xl'/>
            </a>
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

          {/* Angular Web Development */}
          <div className='shadow-lg p-10 rounded-xl my-10'>
            <a href="https://github.com/gprem09/Pig-Report-Angular" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='text-xl'/>
            </a>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 text-teal-500'>
              Angular Web Development
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

          {/* 2d-Arcade Game */}
          <div className='shadow-lg p-10 rounded-xl my-10'>
            <a href="https://github.com/gprem09/2d-Arcade-Java-Game" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='text-xl'/>
            </a>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 text-teal-500'>
              2D-Arcade Game
            </h3>
            <p className='py-2'>
              In September 2021, I led a group project to develop a 2D arcade game named &quot;Spirit Experiment&quot;. We applied Java Swing and Graphics2D to create a visually engaging and responsive game engine. We adopted Agile Scrum methodologies, such as sprint planning, daily stand-ups, and retrospectives, which enhanced our workflow and project management. To ensure the reliability of our game logic and mechanics, we utilized JUnit and Junit.jupiter for thorough unit testing, aiming for a bug-free user experience. The combination of these practices contributed to the successful delivery of a robust and enjoyable 2D arcade gaming experience.
            </p>
            <h4 className='text-center py-4 text-teal-500'>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-between'>
                <p className='py-1'>Java</p>
                <p className='py-1'>Maven</p>
                <p className='py-1'>JUnit</p>
                <p className='py-1'>Swing (GUI)</p>
              </div>
          </div>

          {/* cShell */}
          <div className='shadow-lg p-10 rounded-xl my-10'>
            <a href="https://github.com/gprem09/myShell" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='text-xl'/>
            </a>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 text-teal-500'>
              myShell
            </h3>
            <p className='py-2'>
              In January 2022, I developed a custom C-based shell, myShell, that facilitates command execution, environment variable management, and command history logging. This project demonstrated my skills in system programming and my ability to apply complex C and UNIX system call concepts, such as process forking, piping, and efficient memory management. I prioritized security by implementing robust error handling and password protection for sensitive operations. Additionally, I enhanced user experience by allowing dynamic theme color adjustments, adding a layer of personalization to the shell interface.
            </p>
            <h4 className='text-center py-4 text-teal-500'>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center'>
                <p className='py-1'>C Language</p>
              </div>
          </div>

          {/* NoteTaking App */}
          <div className='shadow-lg p-10 rounded-xl my-10'>
            <a href="https://github.com/gprem09/Docker-CRUD-App" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='text-xl'/>
            </a>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 text-teal-500'>
              Note-Taking App
            </h3>
            <p className='py-2'>
              For my journey into backend development, I developed a full-stack note-taking app enabling users to manage their notes through operations such as creating, viewing, updating, and deleting (CRUD functionality). The server-side was done by Express.js, which facilitated the routing with a MongoDB database. On the client side, EJS was used for the user interface. Features like efficient pagination and an organized dashboard were incorporated to enhance user experience. For deployment, Docker was utilized, which not only streamlined the launch process but also ensured that the application could be run consistently across different computing environments.
            </p>
            <h4 className='text-center py-4 text-teal-500'>
              Main Programming languages and tools used:
            </h4>
            <div className='flex justify-between'>
                <p className='py-1'>JavaScript</p>
                <p className='py-1'>Embedded JS</p>
                <p className='py-1'>MongoDB</p>
                <p className='py-1'>Express</p>
                <p className='py-1'>Docker</p>
              </div>
          </div>

          {/* Arduino Gesture Control Car */}
          <div className='shadow-lg p-10 rounded-xl my-10'>
            <AiFillGithub className='text-xl'/>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 text-teal-500'>
              Arduino Gesture Control Car
            </h3>
            <p className='py-2'>
              In December 2019, I worked on an embedded systems project to create a gesture-controlled car using Arduino, showcasing my skills in electronics. This innovative project involved developing a system that recognizes finger gestures to command the cars movement, allowing for an intuitive driving experience. I programmed in C++ within the Arduino IDE, which was crucial for the seamless integration of the hardware and software, resulting in a responsive and precise control mechanism. This work highlighted the exciting possibilities for enhancing human-machine interaction, specifically in the realm of vehicular control.
            </p>
            <h4 className='text-center py-4 text-teal-500'>
              Main Programming languages and tools used:
            </h4>
            <div className='flex justify-center'>
                <p className='py-1'>C++ Language</p>
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

