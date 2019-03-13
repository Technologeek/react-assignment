import React, { Component } from 'react'
import { CollectionListWrapper } from './style'
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'
import UrlAccordin from '../UrlAccordin'
import NewCollectionModal from '../../containers/NewCollectionModal'
import { Dropdown } from 'semantic-ui-react'
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

  render() {
    console.log(this.props)
    let getAllCollections = this.props && this.props.getAllCollections
    let userId = this.props && this.props.userId
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
                  {this.props &&
                    this.props.collections.map((collections, key) => {
                      console.log(collections)
                      return (
                        <UrlAccordin
                          id={collections.id}
                          title={collections.name}
                          description={collections.description}
                          urlItem={collections.url}
                          method={collections.method}
                          getAllCollections={getAllCollections}
                          userId={userId}
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
