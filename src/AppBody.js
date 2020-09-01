import React from 'react'
import {Container} from 'react-bootstrap'
import Skills from './Skills'
import Hero from './Hero'
import Projects from  './Projects'
import AboutMe from './AboutMe'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

function AppBody() {
  let iconStyles = {
    color: '#fd8940',
    fontSize: '2em',
    marginBottom: '1rem'
  }
  return (
    <div style={{ width: '100%', height: '100vh'}}>
      <Hero />
      <div style={{ width: '100%', height: '40rem', backgroundColor: '#4092FD', margin: '0 0 0 0 '}}>
        <Container id="about" style={{ color: 'white' }}>
          <AboutMe />
          <Skills />
        </Container>
        <FontAwesomeIcon style={iconStyles} icon={faAngleDoubleLeft} />
        <FontAwesomeIcon style={iconStyles} icon={faAngleDoubleRight} />
        <Container id='projects'>
          <Projects />
        </Container>
        <div style={{ width: '100%', height: '20rem', backgroundColor: '#4092FD', margin: '5em 0 0 0 '}}>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  )
}

export default AppBody