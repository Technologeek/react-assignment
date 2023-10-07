import React from 'react'
import { Grid, Image, Label, Icon, Item } from 'semantic-ui-react'
import './style.css'
import cat from '../../static/Octocat.png'
import myself from '../../static/myself.jpg'

const AboutMe = () => {
  return (
    <Grid className="custom_cell">
      <Grid.Column width={4}>
        <Image src={myself} />
      </Grid.Column>
      <Grid.Column width={9}>
        <Item>
          <Item.Content verticalAlign="middle">
            <Item.Header>
              <Icon name="like" />
              Rahul Patil
            </Item.Header>
          </Item.Content>
        </Item>
        <p>
         
        </p>
        <Label as="a" image>
          <img src={cat} />
          <a href="https://github.com/Technologeek" target="_blank">
            Follow Me on Github
          </a>
        </Label>
      </Grid.Column>
    </Grid>
  )
}
export default AboutMe
