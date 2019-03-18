import React, { Component, Fragment } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'
import axios from 'axios'
import './style.css'
import UpdateCollectionModal from '../UpdateCollectionModal'
import ReactTooltip from 'react-tooltip'
import ErrorBoundary from '../ErrorPage'
import PropTypes from 'prop-types'

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
  handleUrlClick = () => {
    let urlDataToSend = {
      url: this.props.urlItem,
      method: this.props.method,
    }
    this.props.makeRequest(urlDataToSend)
  }
  render() {
    const { activeIndex } = this.state
    console.log(this.props)
    return (
      <ErrorBoundary>
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
          <Accordion className="custom_accordin">
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="hotjar" className="custom_icon_color" />
              <span className="custom_color_title">{this.props.title}</span>
              <span>
                {this.props.title === 'Default Collection' ? null : (
                  <span className="icon_margin">
                    <Icon
                      data-tip
                      data-for="deleteIcon"
                      name="delete"
                      onClick={this.deleteCollection}
                      className="delete_icon"
                    />
                    <ReactTooltip id="deleteIcon" type="error">
                      <span>Delete Collection?</span>
                    </ReactTooltip>
                    <Icon
                      data-tip
                      data-for="updateIcon"
                      name="edit"
                      onClick={this.handleSignupOpenModal}
                      className="update_icon"
                    />
                    <ReactTooltip id="updateIcon" type="warning">
                      <span>Update Collection?</span>
                    </ReactTooltip>
                  </span>
                )}
              </span>
              <p>
                <Icon name="unordered list" className="custom_icon_color_2" />
                <span className="custom_description">
                  {this.props.description}
                </span>
              </p>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p onClick={this.handleUrlClick}>
                <span className="url_item">{this.props.urlItem}</span>
              </p>
              <Label className="method_item">
                <Icon name="send" /> {this.props.method}
              </Label>
            </Accordion.Content>
          </Accordion>
        </Fragment>
      </ErrorBoundary>
    )
  }
}

UrlAccordin.propTyopes = {
  onClick: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  method: PropTypes.string,
  url: PropTypes.string,
  userId: PropTypes.number,
  collectionId: PropTypes.number,
}
