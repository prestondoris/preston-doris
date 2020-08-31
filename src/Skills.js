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
        mainContent="I value tools and technologies that provide an ease of use with informative documentation."
        secondaryTitle='What I use most:'
        secondaryContent='Github & Heroku'
        tertiaryTitle='Other Tools I Use:'
        list={['AWS EC2', 'AWS DynamoDB', 'AWS Lambda', 'AWS S3', 'AWS Elastic Beanstalk', 'MongoDB', 'AppDynamics', 'CloudFront']}
      />
      <SkillsItem
        classes='skills w-border'
        icon={faFileCode}
        mainTitle='Front End Development'
        mainContent="I love the challenge of creating something that is both intuitive to use and beautiful to look at."
        secondaryTitle='What I love to use:'
        secondaryContent='React'
        tertiaryTitle='Tech Toolbelt:'
        list={['Javascript', 'HTML/CSS', 'JQuery', 'React Router', 'Redux', 'Bootstrap', 'Semantic UI', 'Vue']}
      />
      <SkillsItem
        classes='skills'
        icon={faServer}
        mainTitle='Back End Development'
        mainContent="The flipside to the Front-End coin, building the infrastructure that supplies the UI is both challenging and rewarding."
        secondaryTitle='My Go to Stack:'
        secondaryContent='Node.js & Express'
        tertiaryTitle='Tech Toolbelt:'
        list={['C#', '.Net Core', 'Microservices', 'MS SQL', 'Cloud Development', 'ASP.Net', 'SOA', 'PosgreSQL']}
      />
  </div> 
  )
}

export default Skills