import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'
import axios from 'axios'
import './style.css'

export default class UrlAccordin extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: -1 }
    this.deleteCollection = this.deleteCollection.bind(this)
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  deleteCollection(collectionId) {
    collectionId = this.props.id
    let deleteUrl = `${
      process.env.REACT_APP_JSON_BASE_URL
    }collections/${collectionId}`
    axios.delete(deleteUrl).then(response => {
      this.props.getAllCollections(this.props.userId)
    })
  }

  render() {
    const { activeIndex } = this.state
    console.log(this.props)
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
            <span className="customIcon">
              <Icon name="delete" onClick={this.deleteCollection} />
            </span>
          </p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>{this.props.urlItem}</p>
          <Label>
            <Icon name="mail" /> {this.props.method}
          </Label>
        </Accordion.Content>
      </Accordion>
    )
  }
}
