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
        <ProjectCard 
          title='Enterprise Brewery MRP'
          text="A powerfully unique application for managing a Production Brewery's recipe creation"
          urlText='In Development'
        />
        <ProjectCard 
          title='UtilWeb'
          text='A PWA built with React to provide a suite of utilities on the web'
          url='https://cryptic-oasis-63616.herokuapp.com/'
          urlText='Visit Website'
        />
        <ProjectCard 
          title='RBG Color Game'
          text='A fun game to challenge your knowledge of RGB and HEX color codes'
          url='https://pdoris-react-colorgame.herokuapp.com/'
          urlText='Visit Website'
        />
        <ProjectCard 
          title='OAuth 2.0 API Server'
          text="An Authentication Server built to utilize OAuth 2.0 ROPC Flow and JSON Web Tokens."
          urlText='--'
        />
        <ProjectCard 
          title='Generic Personal Website'
          text='A beautiful and simple static Portfolio Website to showcase a unqiue portfolio'
          urlText='Visit Website'
        />
        <ProjectCard 
          title='Neighborhood Map'
          text='A simple UI utilizing the Google Maps and Fourquare APIs for displaying Bay Area Breweries'
          urlText='Visit Website'
        />
      </div>
    </Container>
  )
}

export default Projects