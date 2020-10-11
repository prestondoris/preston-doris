import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import server from './Server-amico.svg'

function Hero(props) {
  let linkStyles = {
      color: 'whitesmoke',
      display: 'block',
      margin: '0',
      padding: '0'
  }
  return (
    <Jumbotron fluid style={{ margin: '0', backgroundColor: 'white' }}>
      <h1 id="jumboHeader">
        <span style={{fontSize: '1.5em'}}>Preston Doris </span>
        <br />
        Full Stack Software Engineer
      </h1>
      <p style={{ fontSize: '1.5em' }}>Tackling new challenges and turning a blank page into something beautiful.</p>
      <img style={{ width: '40%', margin: '0 auto', minWidth: '300px' }} src={server} alt='Full Stack Software Engineer'></img>
      <a style={linkStyles} target='_blank' rel="noopener noreferrer" href="https://stories.freepik.com/internet">Illustration by Freepik Stories</a>
    </Jumbotron>
  )
}

export default Hero