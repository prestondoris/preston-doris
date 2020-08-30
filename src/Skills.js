import React from 'react'
import './AppBody.css'
import { faProjectDiagram, faFileCode, faServer } from '@fortawesome/free-solid-svg-icons'
import SkillsItem from './SkillsItem'

function Skills() {

  return (
    <div className='skills-container'>
      <SkillsItem
        classes='skills w-border'
        icon={faProjectDiagram}
        mainTitle='Technology'
        mainContent="Some quick example text to build on the card title and make up the bulk of
            the card's content."
        secondaryTitle='What I love to use...'
        secondaryContent='React'
        tertiaryTitle='Experience'
        list={['List1', 'List1', 'List1', 'List1', 'List1', 'List1', 'List1', 'List1',]}
      />
      <SkillsItem
        classes='skills w-border'
        icon={faFileCode}
        mainTitle='Front End Development'
        mainContent="Some quick example text to build on the card title and make up the bulk of
            the card's content."
        secondaryTitle='What I love to use...'
        secondaryContent='React'
        tertiaryTitle='Experience'
        list={['List1', 'List1', 'List1', 'List1', 'List1', 'List1', 'List1', 'List1',]}
      />
      <SkillsItem
        classes='skills'
        icon={faServer}
        mainTitle='Back End Development'
        mainContent="Some quick example text to build on the card title and make up the bulk of
            the card's content."
        secondaryTitle='What I love to use...'
        secondaryContent='React'
        tertiaryTitle='Experience'
        list={['List1', 'List1', 'List1', 'List1', 'List1', 'List1', 'List1', 'List1']}
      />
  </div> 
  )
}

export default Skills