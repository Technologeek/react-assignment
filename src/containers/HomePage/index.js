import React, { Component } from 'react'
import { HomePageContainer } from './style'
import background from '../../static/background.jpg'
export default class HomePage extends Component {
  render() {
    return (
      <HomePageContainer>
        <div className="image-container">
          <img src={background} />
        </div>
      </HomePageContainer>
    )
  }
}
