import React from 'react'
import { FooterContainer } from './style'
import { Link } from 'react-router-dom'
const Footer = () => (
  <FooterContainer>
    <ul>
      <li>
        <Link to="/">Terms & Conditions</Link>
      </li>
      <li>
        <Link to="/">RESTFUL API Help</Link>
      </li>
      <li>
        <Link to="/">About Me</Link>
      </li>
    </ul>
  </FooterContainer>
)
export default Footer
