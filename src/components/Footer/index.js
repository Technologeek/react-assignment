import React from 'react'
import { FooterContainer } from './style'
import { Link } from 'react-router-dom'
const Footer = () => (
  <FooterContainer>
    <ul className="padding">
      <li />
      <li>
        <a href="https://restfulapi.net/" target="_blank">
          REST-API Help
        </a>
      </li>
      <li>
        <Link to="/AboutMe">About Me</Link>
      </li>
    </ul>
  </FooterContainer>
)
export default Footer
