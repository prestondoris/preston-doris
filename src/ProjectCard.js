import React from 'react'
import {Card} from 'react-bootstrap'

function ProjectCard(props) {
  return (
    <Card style={{ width: '18rem', margin: '2em 0 2em 0' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard