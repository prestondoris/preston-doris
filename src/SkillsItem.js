import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SkillsItem(props) {
  let list = props.list.map(item => <p>{item}</p>)
  let iconStyles = {
    color: '#fd8940',
    fontSize: '3rem',
    marginTop: '1em'
  }
  let headerStyle = {
    fontWeight: '900',
    padding: '1em 0 1em 0',
    fontSize: '1.5em'
  }
  let cardStyles = {
    width: '100%',
    border: 'none',
    margin: '0 auto'
  }
  let secondaryStyle = {
    color: '#4092FD'
  }
  return (
    <div className={props.classes}>
      <FontAwesomeIcon style={iconStyles} icon={props.icon } />
      <Card style={cardStyles}>
        <Card.Body>
          <Card.Title style={headerStyle}>{props.mainTitle}</Card.Title>
          <Card.Text>
            {props.mainContent}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyles}>
        <Card.Body>
          <Card.Title style={secondaryStyle}>{props.secondaryTitle}</Card.Title>
          <Card.Text>{props.secondaryContent}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyles}>
        <Card.Body>
          <Card.Title style={secondaryStyle}>{props.tertiaryTitle}</Card.Title>
          <Card.Text>
            {list}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SkillsItem