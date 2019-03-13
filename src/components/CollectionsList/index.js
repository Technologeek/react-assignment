import React, { Component } from 'react'
import { CollectionListWrapper } from './style'
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'
import UrlAccordin from '../UrlAccordin'
import NewCollectionModal from '../../containers/NewCollectionModal'
import Quotes from '../Hooks/Quotes'
import axios from 'axios'

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
    let url = 'https://api.myjson.com/bins/z601u'
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
        const urlItems =
          collection &&
          collection.urls.map(url => {
            return <li>{url}</li>
          })
        renderList = (
          <UrlAccordin
            title={collectionName}
            description={collectionDescription}
            urllist={urlItems}
          />
        )
      })
    return renderList
  }
  render() {
    const { defaltCollection } = this.state
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
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      All your collections appear here
                    </Card.Description>
                    <a onClick={this.handleSignupOpenModal}>
                      <Icon name="folder open" />
                      Create New
                    </a>
                  </Card.Content>
                  {this.renderDefaultCollection()}
                  <Card.Content extra />
                </Card>
              </Grid.Column>
              <Grid.Column width={11}>
                <Quotes />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </CollectionListWrapper>
    )
  }
}
