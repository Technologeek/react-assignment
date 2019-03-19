import React from 'react'
import { FooterContainer } from './style'
import { Link } from 'react-router-dom'
const Footer = () => (
  <FooterContainer>
    <ul>
      <li>
        <Link to="/">What is </Link>
      </li>
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
