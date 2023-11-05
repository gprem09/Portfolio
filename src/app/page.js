"use client";

import Image from 'next/image'
import { useEffect, useState, useCallback, Fragment } from 'react';
import {AiFillLinkedin, AiFillMail, AiFillGithub, AiOutlineEllipsis, AiOutlineMenu, AiFillFolderOpen} from 'react-icons/ai'
import { BiArrowToRight } from "react-icons/bi";
import { VscSymbolNumeric } from "react-icons/vsc";
import DarkModeToggle from './DarkModeToggle'
import { Col, Container, Row } from 'react-bootstrap';
import { Dialog, Transition } from '@headlessui/react';

export default function Home() {
  const [isFullStackModalOpen, setFullStackModalOpen] = useState(false);
  const [isAngularModalOpen, setAngularModalOpen] = useState(false);
  const [is2DModalOpen, set2DModalOpen] = useState(false);
  const [isNoteModalOpen, setNoteModalOpen] = useState(false);
  const skills = [
    'Next.js', 'React.js', 'Node.js', 
    'Angular', 'JavaScript', 'HTML & CSS', 'Tailwind CSS',
    'C++', 'Python'
  ];

  const hobbies = [
    'Video editing', 'Photo editing', 'VFX',
    'Listen podcast', 'Table tennis', 'Eating ;)'
  ];

  const openFullStackModal = () => {
    setFullStackModalOpen(true);
  };

  const closeFullStackModal = () => {
    setFullStackModalOpen(false);
  };

  const openAngularModal = () => {
    setAngularModalOpen(true);
  };

  const closeAngularModal = () => {
    setAngularModalOpen(false);
  };

  const open2DModal = () => {
    set2DModalOpen(true);
  };

  const close2DModal = () => {
    set2DModalOpen(false);
  };

  const openNoteModal = () => {
    setNoteModalOpen(true);
  };

  const closeNoteModal = () => {
    setNoteModalOpen(false);
  };

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [shouldBlink, setShouldBlink] = useState(false);
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
    <main className={`md:px-20 lg:px-20 px-10 transition ${isDarkMode ? 'bg-custom-gradient text-white' : 'bg-white text-black'}`}>
      <section className="min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
          <div className='flex item-center gap-8 text-custom-cyan'>
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
              <a className='px-6 py-4 ml-8 text-custom-cyan hover:text-white' 
                href='/Gnanavel_Premnath_Resume.pdf' 
                target="_blank" 
                rel="noopener noreferrer" 
                download="Gnanavel_Premnath_Resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </nav>



        <section className='banner' id='home'>
          <Container>
            <Row>
              <Col xs={12} md={6} xl={7}>
                <h1>Hi, I&apos;m <span className='text-custom-cyan fonts'>Gnanavel</span> Premnath<span className='text-custom-cyan p-1'>;</span></h1>

                <h2>
                <VscSymbolNumeric style={{ display: 'inline-block' }} /> Am I <span className='wrap text-custom-cyan fonts'>
                    {text}
                    <span className={`cursor ${shouldBlink ? 'blinking-cursor' : ''}`}>|</span>
                  </span> Developer?
                </h2>
                
                <p className='ErikasBuero'>Exploring the world of Computer Science at Simon Fraser University in the ever-rainy Vancouver, BC, I&apos;ve found myself caught in a love triangle between full-stack development, artificial intelligence, and game development. It&apos;s like a techy soap opera, and I&apos;m here for all the drama!</p>
              </Col>
            </Row>
          </Container>
        </section>



        <section className='aboutMe'>
          <div>

            <p className='titleColor py-5 paraWidth'>
              I am currently in my 3rd year at Simon Fraser University, diligently working towards completing my degree. Immersed in a dynamic academic environment, I am passionate about making the most of my educational journey and exploring new opportunities that come my way.
            </p>

            <p className='titleColor py-4'>Here are some languages that I am currently working with;</p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridGap: '10px', 
              maxWidth: '600px',
            }}>
              {skills.map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', color: '#8793AF' }}>
                  <BiArrowToRight style={{ marginRight: '5px', color: '#65FFDA' }} />
                  {skill}
                </div>
              ))}
            </div>
            
            <p className='titleColor py-5'>When I&apos;m not working, I like to spend my time;</p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridGap: '10px', 
              maxWidth: '600px',
            }}>
              {hobbies.map((hobby, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', color: '#8793AF' }}>
                  <BiArrowToRight style={{ marginRight: '5px', color: '#65FFDA' }} />
                  {hobby}
                </div>
              ))}
            </div>
          </div>
        </section>




        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
          {/* Full Stack Development */}
          <div className='shadow-lg p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-10 transition duration-300'>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/Fullstack-Web-Development" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor'>
              Full Stack Development
            </h3>
            <p className='py-2 textColor'>
            In September 2022, I designed and deployed a multimedia review platform built with the MEAN stack, aimed at improving the way users engage with movie and TV show reviews. This platform features integration with the TMDb API, which allows for easy access to movie and TV show data and lets users search for content by genre. For user security and management, the platform includes JWT for user authentication and CRUD operations. The backend is powered by MongoDB, offering a scalable database solution. The application is hosted on Google Cloud Platform to ensure it runs smoothly and can handle more users as it grows.
            </p>
            <h4 className='text-center py-4 titleColor'>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center gap-4 textColor'>
                <p className='py-1'>JavaScript</p>
                <p className='py-1'>MongoDB</p>
                <button 
                  className='text-teal-500 hover:text-teal-700 transition duration-300' 
                  onClick={openFullStackModal}>
                  
                  <span className='hidden md:inline text-custom-cyan'>Show More</span>
                  <AiOutlineEllipsis className='text-2xl text-custom-cyan md:hidden'/>

                </button>
              </div>
              

              <Transition appear show={isFullStackModalOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeFullStackModal}>
                  <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    
                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                    
                    <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Additional:
                      </Dialog.Title>
                      <div className="mt-2 textColor">
                        <p className='py-1'>Express</p>
                        <p className='py-1'>Angular</p>
                        <p className='py-1'>NodeJS</p>
                      </div>
                      <div className="mt-4">
                        <button type="button" className="text-custom-cyan hover:text-teal-900" onClick={closeFullStackModal}>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition>
          </div>

          {/* Angular Web Development */}
          <div className='shadow-lg p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-10 transition duration-300'>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/Pig-Report-Angular" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor'>
              Angular Web Development
            </h3>
            <p className='py-2 textColor'>
              In March 2021, I developed a dynamic Angular web application that allowed the public to report and monitor missing pigs effectively. This platform offers enhanced engagement and functionality through interactive features. With CRUD operations, JSON libraries, and REST APIs, the app manages data on a web server seamlessly. I integrated the Leaflet maps API to help users filter reports, interact with map markers, and obtain a detailed view of pig sightings. The application includes well-designed forms for easy report submission and smart feedback systems for handling user errors, ensuring an intuitive and smooth user experience.
            </p>
            <h4 className='text-center py-4 titleColor'>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center gap-4 textColor'>
                <p className='py-1'>Angular</p>
                <p className='py-1'>TypeScript</p>
                <button 
                  className='text-teal-500 hover:text-teal-700 transition duration-300' 
                  onClick={openAngularModal}>
                  <span className='hidden md:inline text-custom-cyan'>Show More</span>
                  <AiOutlineEllipsis className='text-2xl text-custom-cyan md:hidden'/>
                </button>
              </div>
              <Transition appear show={isAngularModalOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeAngularModal}>
                  <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    
                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                    
                    <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Additional:
                      </Dialog.Title>
                      <div className="mt-2 textColor">
                        <p className='py-1 text-black'>HTML</p>
                        <p className='py-1 text-black'>CSS</p>
                      </div>
                      <div className="mt-4">
                        <button type="button" className="text-custom-cyan hover:text-teal-700" onClick={closeAngularModal}>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition>

          </div>

          {/* 2d-Arcade Game */}
          <div className='shadow-lg p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-10 transition duration-300'>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/2d-Arcade-Java-Game" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor'>
              2D-Arcade Game
            </h3>
            <p className='py-2 textColor'>
              In September 2021, I led a group project to develop a 2D arcade game named &quot;Spirit Experiment&quot;. We applied Java Swing and Graphics2D to create a visually engaging and responsive game engine. We adopted Agile Scrum methodologies, such as sprint planning, daily stand-ups, and retrospectives, which enhanced our workflow and project management. To ensure the reliability of our game logic and mechanics, we utilized JUnit and Junit.jupiter for thorough unit testing, aiming for a bug-free user experience. The combination of these practices contributed to the successful delivery of a robust and enjoyable 2D arcade gaming experience.
            </p>
            <h4 className='text-center py-4 titleColor'>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center gap-4 textColor'>
                <p className='py-1'>Java</p>
                <p className='py-1'>Maven</p>
                <button 
                  className='text-teal-500 hover:text-teal-700 transition duration-300' 
                  onClick={open2DModal}>
                  <span className='hidden md:inline text-custom-cyan'>Show More</span>
                  <AiOutlineEllipsis className='text-2xl text-custom-cyan md:hidden'/>
                </button>
              </div>
              <Transition appear show={is2DModalOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={close2DModal}>
                  <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    
                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                    
                    <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Additional:
                      </Dialog.Title>
                      <div className="mt-2 textColor">
                        <p className='py-1 text-black'>JUnit</p>
                        <p className='py-1 text-black'>Swing (GUI)</p>
                      </div>
                      <div className="mt-4">
                        <button type="button" className="text-custom-cyan hover:text-teal-700" onClick={close2DModal}>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition>
          </div>

          {/* cShell */}
          <div className='shadow-lg p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-10 transition duration-300'>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/myShell" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor'>
              myShell
            </h3>
            <p className='py-2 textColor'>
              In January 2022, I developed a custom C-based shell, myShell, that facilitates command execution, environment variable management, and command history logging. This project demonstrated my skills in system programming and my ability to apply complex C and UNIX system call concepts, such as process forking, piping, and efficient memory management. I prioritized security by implementing robust error handling and password protection for sensitive operations. Additionally, I enhanced user experience by allowing dynamic theme color adjustments, adding a layer of personalization to the shell interface.
            </p>
            <h4 className='text-center py-4 titleColor'>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center textColor'>
                <p className='py-1'>C Language</p>
              </div>
          </div>

          {/* NoteTaking App */}
          <div className='shadow-lg p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-10 transition duration-300'>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/Docker-CRUD-App" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor'>
              Note-Taking App
            </h3>
            <p className='py-2 textColor'>
              For my journey into backend development, I developed a full-stack note-taking app enabling users to manage their notes through operations such as creating, viewing, updating, and deleting (CRUD functionality). The server-side was done by Express.js, which facilitated the routing with a MongoDB database. On the client side, EJS was used for the user interface. Features like efficient pagination and an organized dashboard were incorporated to enhance user experience. For deployment, Docker was utilized, which not only streamlined the launch process but also ensured that the application could be run consistently across different computing environments.
            </p>
            <h4 className='text-center py-4 titleColor'>
              Main Programming languages and tools used:
            </h4>
            <div className='flex justify-center gap-4 textColor'>
                <p className='py-1'>JavaScript</p>
                <p className='py-1'>Docker</p>
                <button 
                  className='text-custom-cyan hover:text-teal-900 transition duration-300' 
                  onClick={openNoteModal}>
                  <span className='hidden md:inline'>Show More</span>
                  <AiOutlineEllipsis className='text-2xl text-custom-cyan md:hidden'/>
                </button>
              </div>

              <Transition appear show={isNoteModalOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeNoteModal}>
                  <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    
                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                    
                    <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Additional:
                      </Dialog.Title>
                      <div className="mt-2 textColor">
                        <p className='py-1'>Express</p>
                        <p className='py-1'>MongoDB</p>
                        <p className='py-1'>Embedded JS</p>
                      </div>
                      <div className="mt-4">
                        <button type="button" className="text-teal-500 hover:text-teal-700" onClick={closeNoteModal}>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition>
          </div>

          {/* Arduino Gesture Control Car */}
          <div className='shadow-lg p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-10 transition duration-300'>
            <div className='flex justify-between'>
              <AiFillGithub className='text-xl'/>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor'>
              Arduino Gesture Control Car
            </h3>
            <p className='py-2 textColor'>
              In December 2019, I worked on an embedded systems project to create a gesture-controlled car using Arduino, showcasing my skills in electronics. This innovative project involved developing a system that recognizes finger gestures to command the cars movement, allowing for an intuitive driving experience. I programmed in C++ within the Arduino IDE, which was crucial for the seamless integration of the hardware and software, resulting in a responsive and precise control mechanism. This work highlighted the exciting possibilities for enhancing human-machine interaction, specifically in the realm of vehicular control.
            </p>
            <h4 className='text-center py-4 titleColor'>
              Main Programming languages and tools used:
            </h4>
            <div className='flex justify-center textColor'>
                <p className='py-1'>C++ Language</p>
              </div>
          </div>

        </div>

        <div className='text-center textColor p-10'>
          <p className='py-2' style={{ fontSize: '12px' }}>Built and designed by Gnanavel Premnath.</p>
          <p style={{ fontSize: '12px' }}>All rights reserved. ©</p>
        </div>
      </section>

    
    </main>
  )
}

