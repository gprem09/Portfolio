"use client";

import { useEffect, useState, useCallback, Fragment, useMemo } from 'react';
import {AiFillLinkedin, AiFillMail, AiFillGithub, AiOutlineEllipsis, AiFillFolderOpen} from 'react-icons/ai'
import { BiArrowToRight } from "react-icons/bi";
import { BsCodeSlash,  } from "react-icons/bs";
import { PiCarProfileFill } from 'react-icons/pi';
import DarkModeToggle from './DarkModeToggle'
import { Col, Container, Row } from 'react-bootstrap';
import { Dialog, Transition } from '@headlessui/react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [isMRIModalOpen, setMRIModalOpen] = useState(false);
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [isCHATGPTModalOpen, setCHATGPTModalOpen] = useState(false);
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
    'Listen podcast', 'Table tennis', 'Gym'
  ];

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
            {/* Use fluid for a full-width container */}
            <Row>
              <Col xs={12} md={6} xl={7}>
                <h1>Hi, I&apos;m <span className={`fonts transition ${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'}`}>Gnanavel</span> Premnath<span className={`p-1 ${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'}`}>;</span></h1>

                <h2>
                  <BsCodeSlash className={`${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'}`} style={{ display: 'inline-block' }} /> Am I <span className={`wrap fonts transition ${!isDarkMode ? 'bg-color-text' : 'text-custom-cyan'}`}>
                    {text}
                    <span className={`cursor ${shouldBlink ? 'blinking-cursor' : ''}`}>|</span>
                  </span> Developer?
                </h2>
                
                <p className='ErikasBuero'>Exploring the world of Computer Science at Simon Fraser University in the ever-rainy Vancouver, BC, I&apos;ve found myself caught in a love triangle between artificial intelligence, full-stack development, and game development. It&apos;s like a techy soap opera, and I&apos;m here for all the drama!</p>
              </Col>
            </Row>
          </Container>
        </section>



        <section className={`aboutMe ${!isDarkMode ? 'light-mode' : ''}`}>
          <div>
            <h1 className={`fonts text-4vw lg:text-3vw xl:text-2.5vw 2xl:text-2vw ${!isDarkMode ? 'light-mode-h' : 'textColor'}`}>
              <BsCodeSlash style={{ display: 'inline-block', color: !isDarkMode ? 'rgb(10,25,47)' : '#65FFDA' }} /> about me
            </h1>
            <p className={`py-5 ${!isDarkMode ? 'textColor' : 'titleColor'}`}>
              I am currently in my 3rd year at Simon Fraser University, diligently working towards completing my degree. Immersed in a dynamic academic environment, I am passionate about making the most of my educational journey and exploring new opportunities that come my way.
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




        <h1 className={`fonts project ${!isDarkMode ? 'light-mode-h' : 'textColor'}`}><BsCodeSlash style={{ display: 'inline-block', color: !isDarkMode ? 'rgb(10,25,47)' : '#65FFDA' }} /> personal experiences</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>

          {/* Brain Tumour */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/Brain-Tumor-Detection" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Brain Tumour Detection
            </h3>
            <p className='py-2 textColor'>
            Developed a neural network using PyTorch for brain tumor detection, achieving 100% accuracy. This involved crafting custom convolutional networks and utilizing OpenCV for image analysis, and implementing custom training loops to better understand neural network fundamentals.
            </p>
            <h4 className='text-center py-4 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center gap-4 textColor'>
                <p className='py-1'>Python</p>
                <p className='py-1'>PyTorch</p>
              </div>
          </div>

          {/* Self Checkout */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <AiFillGithub className='text-xl'/>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Smart Self-Checkout
            </h3>
            <p className='py-2 textColor'>
            Developed a smart self-checkout system using a custom-trained YOLO model to recognize and price over 100 grocery items, incorporating OpenCV for advanced image analysis, which significantly improved the accuracy of item identification. This system streamlines the checkout process by providing real-time, automated calculations of total costs.
            </p>
            <h4 className='text-center py-4 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center gap-4 textColor'>
                <p className='py-1'>Python</p>
                <p className='py-1'>PyTorch</p>
              </div>
          </div>
          
          {/* ChatGPT Clone */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/CHATGPT-CLONE" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Conversational AI Assistant
            </h3>
            <p className='py-2 textColor'>
            I developed a virtual AI assistant using Flask and GPT-4 OpenAI API, which handles multiple chat sessions and offer real-time interaction with the AI model. The application features LangChain for fine-tuning the GPT-4 model, allowing it to learn and respond to new information. I used Next.js and Tailwind CSS for a responsive user interface. The backend relies on MySQL for data management. The entire application is hosted on AWS.
            </p>
            <h4 className='text-center py-4 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center gap-4 textColor'>
                <p className='py-1'>Flask</p>
                <p className='py-1'>NextJS</p>
              </div>
          </div>

          {/* Full Stack Development */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/Fullstack-Web-Development" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Full Stack Development
            </h3>
            <p className='py-2 textColor'>
            I created a multimedia review site using the MEAN stack to enhance how people interact with movie and TV reviews. It integrates with the TMDb API for easy access to media information, allowing genre-based searches. The site uses JWT for secure user authentication and supports create, read, update, and delete operations. MongoDB is used for database, and it is hosted on Google Cloud Platform.
            </p>
            <h4 className='text-center py-4 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center gap-4 textColor'>
                <p className='py-1'>JavaScript</p>
                <p className='py-1'>MongoDB</p>
              </div>
          </div>

          {/* 2d-Arcade Game */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/2d-Arcade-Java-Game" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              2D-Arcade Game
            </h3>
            <p className='py-2 textColor'>
            I led a project to develop &quot;Spirit Experiment&quot;, a 2D arcade game, using Java Swing and Graphics2D for a responsive design. We adopted Agile Scrum methods for efficient workflow and used JUnit for rigorous testing, ensuring a reliable and enjoyable gaming experience.
            </p>
            <h4 className='text-center py-4 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center gap-4 textColor'>
                <p className='py-1'>Java</p>
                <p className='py-1'>Maven</p>
              </div>
          </div>

          {/* cShell */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <a href="https://github.com/gprem09/myShell" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='text-xl'/>
              </a>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              myShell
            </h3>
            <p className='py-2 textColor'>
            I developed myShell, a custom C-based shell featuring command execution, environment management, and history logging. It highlights my proficiency in system programming, utilizing complex C and UNIX concepts like process forking and piping.
            </p>
            <h4 className='text-center py-4 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Main Programming languages and tools used:
            </h4>
              <div className='flex justify-center textColor'>
                <p className='py-1'>C Language</p>
              </div>
          </div>

          {/* Arduino Gesture Control Car */}
          <div className={`glass p-10 rounded-xl my-10 hover:bg-white hover:bg-opacity-5 transition duration-300 ${!isDarkMode ? 'bg-white' : 'boxColor'}`}>
            <div className='flex justify-between'>
              <AiFillGithub className='text-xl'/>
              <AiFillFolderOpen className='text-xl'/>
            </div>
            <h3 className='text-center text-lg font-medium pt-8 pb-2 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Arduino Gesture Control Car
            </h3>
            <p className='py-2 textColor'>
              I developed a gesture-controlled car using Arduino, highlighting my electronics expertise. The project featured a system that interprets finger gestures for intuitive vehicle control, programmed in C++ with the Arduino IDE for responsive and precise operation.
            </p>
            <h4 className='text-center py-4 titleColor' style={{ color: !isDarkMode ? 'rgb(10,25,47)' : '' }}>
              Main Programming languages and tools used:
            </h4>
            <div className='flex justify-center textColor'>
                <p className='py-1'>C++ Language</p>
              </div>
          </div>

        </div>

        <div className='text-center textColor p-5'>
          <p className='py-2' style={{ fontSize: '12px' }}>Built and designed by Gnanavel Premnath.</p>
          <p style={{ fontSize: '12px' }}>All rights reserved. ©</p>
        </div>
      </section>

    
    </main>
  )
}

