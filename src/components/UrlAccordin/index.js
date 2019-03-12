import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class UrlAccordin extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: -1 }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="envelope" />
          {this.props.title}
          <p>
            <Icon name="at" />
            {this.props.description}
          </p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>{this.props.urllist}</p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
