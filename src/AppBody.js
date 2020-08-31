import React from 'react'
import {Container} from 'react-bootstrap'
import Skills from './Skills'
import Hero from './Hero'
import Projects from  './Projects'
import AboutMe from './AboutMe'

function AppBody() {
  return (
    <div style={{ width: '100%', height: '100vh'}}>
      <Hero />
      <div style={{ width: '100%', height: '40rem', backgroundColor: '#4092FD', margin: '-5em 0 0 0 '}}>
        <Container id="about" style={{ color: 'white' }}>
          <AboutMe />
          <Skills />
        </Container>
        <Container id='projects'>
          <Projects />
        </Container>
      </div>
    </div>
  )
}

export default AppBody