import React from 'react'
import logo from './LOGO-white.svg'
import GithubLogo from './github-brands.svg'
import LinkedInLogo from './linkedin-brands.svg'

function Footer(props) {
  let wrapperStyles = {
    paddingTop: '5em'
  }
  return (
    <div style={wrapperStyles}>
      <img src={logo} style={{width: '3.5rem'}} alt='prestondoris.com logo' />
      <p>prestondoris.com</p>
      <div>
        <img src={GithubLogo} style={{width: '2rem'}} alt='Github logo' />
        <img src={LinkedInLogo} style={{width: '2rem'}} alt='LinkedIn logo' />
      </div>
    </div>
  )
}

export default Footer