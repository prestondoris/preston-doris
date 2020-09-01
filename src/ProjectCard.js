import React from 'react'
import {Card} from 'react-bootstrap'

function ProjectCard(props) {
  return (
    <Card style={{ width: '18rem', margin: '2em 0 2em 0', borderRadius: '15px' }}>
      <Card.Body>
        <Card.Title style={{ color: '#4092FD', fontWeight: '900'}}>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          <a style={{ textDecoration: 'none', color: 'inherit', fontStyle: props.fontStyle }} target='_blank' rel="noopener noreferrer" href={props.url}>{props.urlText}</a>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard