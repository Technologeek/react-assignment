import React, { Component } from 'react'
import { CollectionListWrapper } from './style'
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'
import UrlAccordin from '../UrlAccordin'
import NewCollectionModal from '../../containers/NewCollectionModal'
import axios from 'axios'

export default class CollectionsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collectionName: [],
      collectionDescription: [],
      urlList: [],
    }
  }
  renderUserCollection() {
    let urlItems = ''
    this.props.collections &&
      this.props.collections.map(collection => {
        let collectionName = collection.name
        let collectionDescription = collection.description
        urlItems =
          collection &&
          collection.urls.map(url => {
            return <li>{url}</li>
          })
      })
    return urlItems
  }
  render() {
    let demo = this.renderUserCollection()
    console.log(demo)
    return (
      <CollectionListWrapper>
        <NewCollectionModal
          show={this.state.showModal}
          onClick={this.handleSignupModalClose}
        />
        <Container>
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={5}>
                <Card>
                  <Card.Content>
                    <Card.Header>Your Collections</Card.Header>
                  </Card.Content>
                  {/* {this.renderUserCollection()} */}
                  {this.props &&
                    this.props.collections.map((collections, key) => {
                      console.log(collections)
                      return (
                        <UrlAccordin
                          key={collections.id}
                          title={collections.name}
                          description={collections.description}
                        />
                      )
                    })}
                  <Card.Content extra />
                </Card>
              </Grid.Column>
              <Grid.Column width={11} />
            </Grid.Row>
          </Grid>
        </Container>
      </CollectionListWrapper>
    )
  }
}
