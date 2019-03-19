import React from 'react'
import { Grid, Image, Label, Icon, Item } from 'semantic-ui-react'
import './style.css'
import cat from '../../static/Octocat.png'

const AboutMe = () => {
  return (
    <Grid className="custom_cell">
      <Grid.Column width={4}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
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
          Hi! I'm Rahul Patil, a passionate Front-End developer. I like writing
          JavaScript appplications with asthetics. Currently I'm a masters
          student pursuing Enterprise Software Systems at Waterford Institute Of
          Technology and an Software Enginner intern at Errigal Inc, Waterford.
          I believe in writing clean, testable and maintainbale code.
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
export default AboutPage
