import React, { Component, Fragment } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'
import axios from 'axios'
import './style.css'
import UpdateCollectionModal from '../UpdateCollectionModal'
import ReactTooltip from 'react-tooltip'

export default class UrlAccordin extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: -1, showModal: false }
    this.deleteCollection = this.deleteCollection.bind(this)
  }
  handleSignupOpenModal = () => {
    this.setState({
      showModal: true,
    })
  }
  handleSignupModalClose = () => {
    this.setState({
      showModal: false,
    })
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
      <Fragment>
        <UpdateCollectionModal
          show={this.state.showModal}
          onClick={this.handleSignupModalClose}
          description={this.props.description}
          title={this.props.title}
          method={this.props.method}
          url={this.props.url}
          userId={this.props.userId}
          collectionId={this.props.id}
          getAllUserCollections={this.props.getAllCollections}
        />
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
                {this.props.title === 'Default Collection' ? null : (
                  <Fragment>
                    <Icon
                      data-tip
                      data-for="deleteIcon"
                      name="delete"
                      onClick={this.deleteCollection}
                    />
                    <ReactTooltip id="deleteIcon" type="error">
                      <span>Delete Collection?</span>
                    </ReactTooltip>
                    <Icon
                      data-tip
                      data-for="updateIcon"
                      name="content"
                      onClick={this.handleSignupOpenModal}
                    />
                    <ReactTooltip id="updateIcon" type="warning">
                      <span>Update Collection?</span>
                    </ReactTooltip>
                  </Fragment>
                )}
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
      </Fragment>
    )
  }
}
