import React from "react";
import { BsCodeSlash } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = ({ isDarkMode, text, shouldBlink }) => {
    return (
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
    );
  };
  
  export default Banner;