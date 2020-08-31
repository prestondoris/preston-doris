import React from 'react'
import ProjectCard from './ProjectCard'
import {Container} from 'react-bootstrap'

function Projects() {
  let wrapperStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto'
  }
  return (
    <Container style={{marginTop: '.5em'}}>
      <h4 style={{ fontWeight: '900' }}>My Recent Work</h4>
      <h5>Here are a few projects that I have worked on recently.</h5>
      <div style={wrapperStyles}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Container>
  )
}

export default Projects