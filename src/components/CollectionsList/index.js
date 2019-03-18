import React, { Component } from 'react'
import { CollectionListWrapper } from './style'
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'
import UrlAccordin from '../UrlAccordin'
import NewCollectionModal from '../../containers/NewCollectionModal'
import Quotes from '../Hooks/Quotes'
import axios from 'axios'
import ErrorBoundary from '../ErrorPage'
import PropTypes from 'prop-types'

export default class CollectionsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaltCollection: [],
      showModal: false,
    }
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
  componentDidMount() {
    let url = 'https://api.myjson.com/bins/q7fh2'
    axios.get(url).then(response => {
      this.setState({
        defaltCollection: response.data.collection,
      })
    })
  }
  renderDefaultCollection() {
    let renderList = ''
    const { defaltCollection } = this.state
    defaltCollection &&
      defaltCollection.map(collection => {
        let collectionName = collection.name
        let collectionDescription = collection.description
        let urlItem = collection.url
        let method = collection.method
        renderList = (
          <UrlAccordin
            title={collectionName}
            description={collectionDescription}
            urlItem={urlItem}
            method={method}
            makeRequest={this.props.makeRequest}
          />
        )
      })
    return renderList
  }
  render() {
    const { defaltCollection } = this.state
    return (
      <ErrorBoundary>
        <CollectionListWrapper>
          {this.state.showModal ? (
            <NewCollectionModal
              show={this.state.showModal}
              onClick={this.handleSignupModalClose}
            />
          ) : null}
          <Card>
            <Card.Content>
              <Card.Header className="set_color">
                Default Collection
              </Card.Header>
              <Card.Meta>
                <span className="date custom_color">
                  Collection Generated by the System
                </span>
              </Card.Meta>
              {this.renderDefaultCollection()}
              <Card.Description className="custom_color_2">
                Create your own Collection to get started
              </Card.Description>
              <a onClick={this.handleSignupOpenModal}>
                <Icon name="add circle" className="icon_color" />
                <span className="new_color"> Create New</span>
              </a>
            </Card.Content>
            <Card.Content extra />
          </Card>
        </CollectionListWrapper>
      </ErrorBoundary>
    )
  }
}
CollectionsList.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
}
