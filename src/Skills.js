import React from 'react'
import './AppBody.css'
import { faProjectDiagram, faFileCode, faServer } from '@fortawesome/free-solid-svg-icons'
import SkillsItem from './SkillsItem'

function Skills() {
  let skillsData = [
    {
      classes:'skills w-border',
      icon:faProjectDiagram,
      mainTitle:'Technology',
      mainContent:"I value tools and technologies that provide an ease of use with informative documentation.",
      secondaryTitle:'What I Use Most:',
      secondaryContent:'Github & Heroku',
      tertiaryTitle:'Other Tools I Use:',
      list: ['AWS EC2', 'AWS DynamoDB', 'AWS Lambda', 'AWS S3', 'AWS Elastic Beanstalk', 'MongoDB', 'AppDynamics', 'CloudFront']
    },
    {
      classes:'skills w-border',
      icon: faFileCode,
      mainTitle:'Front End Development',
      mainContent:"I love the challenge of creating something that is both intuitive to use and beautiful to look at.",
      secondaryTitle:'What I Love:',
      secondaryContent:'React',
      tertiaryTitle:'Tech Toolbelt:',
      list:['Javascript', 'HTML/CSS', 'JQuery', 'React Router', 'Redux', 'Bootstrap', 'Semantic UI', 'Vue']
    },
    {
      classes:'skills',
      icon: faServer,
      mainTitle:'Back End Development',
      mainContent:"The flipside to the Front-End coin, building the infrastructure that supplies the UI is both challenging and rewarding.",
      secondaryTitle:'My Go-To Stack:',
      secondaryContent:'Node.js & Express',
      tertiaryTitle:'Tech Toolbelt:',
      list:['C#', '.Net Core', 'Microservices', 'MS SQL', 'Cloud Development', 'ASP.Net', 'SOA', 'PosgreSQL']
    }
  ]

  let skills = skillsData.map(skill => (
    <SkillsItem
      classes={skill.classes}
      icon={skill.icon}
      mainTitle={skill.mainTitle}
      mainContent={skill.mainContent}
      secondaryTitle={skill.secondaryTitle}
      secondaryContent={skill.secondaryContent}
      tertiaryTitle={skill.tertiaryTitle}
      list={skill.list}
    />
  ))
  return (
    <div className='skills-container'>
      {skills}
    </div> 
  )
}

export default Skills