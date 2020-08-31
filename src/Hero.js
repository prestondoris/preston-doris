import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import server from './Server-amico.svg'

function Hero(props) {
  return (
    <Jumbotron fluid style={{ margin: '0', backgroundColor: 'white' }}>
      <h1 id="jumboHeader">Full Stack Software Engineer</h1>
      <p style={{ fontSize: '1.5em' }}>I love to tackle new challenges and turning the blank page into something beautiful.</p>
      <img style={{ width: '40%', margin: '0 auto' }} src={server} alt='person sitting at desk in front of server illustration'></img>
      <a href="https://stories.freepik.com/internet">Illustration by Freepik Stories</a>
    </Jumbotron>
  )
}

export default Hero