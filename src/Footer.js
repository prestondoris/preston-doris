import React from 'react'
import logo from './LOGO-white.svg'
import GithubLogo from './github-brands.svg'
import LinkedInLogo from './linkedin-brands.svg'

function Footer(props) {
  let wrapperStyles = {
    paddingTop: '4.5em'
  }
  let linkStyles = {
    padding: '1em'
  }
  return (
    <div style={wrapperStyles}>
      <a href='#home'><img src={logo} style={{width: '3.5rem'}} alt='prestondoris.com logo' /></a>
      <p style={{paddingTop: '1em'}}>prestondoris@gmail.com</p>
      
      <div>
        <a style={linkStyles} target="_blank" rel="noopener noreferrer"  href='https://www.github.com/prestondoris'><img src={GithubLogo} style={{width: '2rem'}} alt='Github logo' /></a>
        <a style={linkStyles} target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/prestondoris'><img src={LinkedInLogo} style={{width: '2rem'}} alt='LinkedIn logo' /></a>
      </div>
      <p style={{paddingTop: '1em'}}>Built using React. Handcrafted by Me &copy; 2020</p>
    </div>
  )
}

export default Footer