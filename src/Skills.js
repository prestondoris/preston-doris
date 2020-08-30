import React from 'react'
import './AppBody.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram, faFileCode, faServer } from '@fortawesome/free-solid-svg-icons'

function Skills() {
  return (
    <div className='skills-container'>
      <div className='skills w-border' >
        <FontAwesomeIcon style={{color: 'blue'}} icon={faProjectDiagram} />
      </div>      
      <div className='skills w-border' >
        <FontAwesomeIcon style={{ color: 'blue' }}  icon={faFileCode}/>
      </div>      
      <div className='skills' >
        <FontAwesomeIcon style={{ color: 'blue' }}  icon={faServer} />
      </div>
    </div>
  )
}

export default Skills