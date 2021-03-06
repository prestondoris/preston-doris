import React from 'react'
import ProjectCard from './ProjectCard'
import {Container} from 'react-bootstrap'

function Projects() {

  let projectData = [
    {
      title:'Enterprise Brewery MRP',
      text: "A powerfully unique application for managing a Production Brewery's recipe creation",
      url: '',
      urlText: 'In Development',
      fontStyle: 'italic'
    },
    {
      title:'UtilWeb',
      text:'A PWA built with React to provide a suite of utilities on the web',
      url:'https://cryptic-oasis-63616.herokuapp.com/',
      urlText:'Visit Website',
      fontStyle:'none'
    },
    {
      title: 'Tiny Mortgage',
      text: 'An NPM Package designed to be small in size & expose an API to calculate a Fixed Rate Mortgage',
      url: 'https://www.npmjs.com/package/tiny-mortgage',
      urlText: 'Visit Website',
      fontStyle: 'none',
    },
    {
      title:'RBG Color Game',
      text:'A fun game to challenge your knowledge of RGB and HEX color codes',
      url:'https://pdoris-react-colorgame.herokuapp.com/',
      urlText:'Visit Website',
      fontStyle:'none'
    },
    {
      title:'OAuth 2.0 API Server',
      text:"An Authentication Server built to utilize OAuth 2.0 ROPC Flow and JSON Web Tokens.",
      url: '',
      urlText:'No UI',
      fontStyle:'italic',
    },
    {
      title:'Generic Personal Website',
      text:'A beautiful and simple static Portfolio Website to showcase a unqiue portfolio',
      url: 'http://pd-generic-portfolio-site.s3-website-us-west-1.amazonaws.com/',
      urlText:'Visit Website',
      fontStyle:'none'
    }
  ]
  let projects = projectData.map(project => (
    <ProjectCard
      title={project.title}
      text={project.text}
      url={project.url}
      urlText={project.urlText}
      fontStyle={project.fontStyle}
    />
  ))
  return (
    <Container style={{marginTop: '.5em'}}>
      <h4 style={{ fontWeight: '900' }}>My Recent Work</h4>
      <h5>Here are a few projects that I have worked on recently.</h5>
      <div className='projects'>
        {projects}
      </div>
    </Container>
  )
}

export default Projects