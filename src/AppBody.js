import React from 'react'
import { Jumbotron, Button} from 'react-bootstrap'
import server from './Server-amico.svg'

function AppBody() {
  return (
    <div style={{ backgroundColor: '#F0F2F5', width: '100%', height: '100vh'}}>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <div>
          <img style={{width: '50%', margin: '0 auto'}} src={server} alt='person sitting at desk in front of server illustration'></img>
        </div>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default AppBody