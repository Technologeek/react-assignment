import React, { Component } from 'react'
import { Segment, Image, Grid } from 'semantic-ui-react'
import './style.css'
import welcome from '../../static/welcome.png'
export default class HomePage extends Component {
  render() {
    return (
      <Segment className="custom_class">
        <Image src={welcome} size="medium" centered />
        <Grid.Row className="custom_widthnew">
          <Grid.Column width={6}>
            <h1>Welcome to API-PANDA!</h1>
            <p className="custom_text">🚀 Manage all your API's at one Place</p>
            <p className="custom_text2">
              🤓 Ideal for developers to test their API end-points in browser!{' '}
            </p>
            <p className="custom_text2">🔥 Sign-up now to get started! </p>
          </Grid.Column>
        </Grid.Row>
      </Segment>
    )
  }
}
