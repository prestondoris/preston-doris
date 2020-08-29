import React from 'react'
import { Jumbotron, Container} from 'react-bootstrap'
import server from './Server-amico.svg'

function AppBody() {
  return (
    <div style={{ width: '100%', height: '100vh'}}>
      <Jumbotron fluid style={{ margin: 0}}>
        <h1 style={{fontSize: '4.5em'}}>Full Stack Software Engineer</h1>
        <p style={{ fontSize: '1.5em' }}>I love to tackle new challenges and turning the blank page into something beautiful.</p>
        <img style={{ width: '40%', margin: '0 auto' }} src={server} alt='person sitting at desk in front of server illustration'></img>
      </Jumbotron>
      <div style={{ width: '100%', height: '30rem', backgroundColor: '#4092FD', margin: '-5em 0 0 0 '}}>
        <Container style={{ color: 'white' }}>
          <h1 style={{fontWeight: 'bold', padding: '2em 0 0 0'}}>I'm Preston. Thanks for visting!</h1>
          <p style={{fontSize: '1.5em', padding: '1em 0 0 0'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Container>
      </div>
    </div>
  )
}

export default AppBody