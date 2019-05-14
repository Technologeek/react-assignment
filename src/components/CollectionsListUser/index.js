import React, { PureComponent, Fragment } from 'react'
import { CollectionListWrapper } from './style'
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'
import UrlAccordin from '../UrlAccordin'
import NewCollectionModal from '../../containers/NewCollectionModal'
import { Dropdown } from 'semantic-ui-react'
import emptylist from '../../static/emptylist.png'
import axios from 'axios'
import SearchBar from '../SearchBar'
import PropTypes from 'prop-types'

export default class CollectionsList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      collectionName: [],
      collectionDescription: [],
      urlList: [],
    }
  }

  render() {
    let getAllCollections = this.props && this.props.getAllCollections
    let getUrlDataForResponse = this.props && this.props.getUrlDataForResponse
    let userId = this.props && this.props.userId
    return (
      <CollectionListWrapper>
        <Card className="cell_width">
          <Card.Content>
            <Card.Header className="set_color">Your Collections</Card.Header>
            <Card.Meta>
              <span className="date custom_color">
                Your Collections Appear here
              </span>
            </Card.Meta>
            <SearchBar
              getAllCollections={this.props.collections}
              userId={userId}
            />
          </Card.Content>
          {this.props.collections &&
          Object.keys(this.props.collections).length === 0 ? (
            <div>
              <img src={emptylist} className="custom_width" />
              <p>Panda Couldn't Find Any Collections</p>
            </div>
          ) : (
            <Fragment>
              {this.props.collections &&
                this.props.collections.map((collections, key) => {
                  console.log(collections)
                  return (
                    <UrlAccordin
                      id={collections._id}
                      title={collections.collectionname}
                      description={collections.description}
                      urlItem={collections.url}
                      method={collections.method}
                      getAllCollections={getAllCollections}
                      getUrlDataForResponse={getUrlDataForResponse}
                      userId={userId}
                      makeRequest={this.props.makeRequest}
                      key={collections.id}
                    />
                  )
                })}
            </Fragment>
          )}

          <Card.Content extra />
        </Card>
      </CollectionListWrapper>
    )
  }
}
CollectionsList.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
  getAllCollections: PropTypes.func,
  userId: PropTypes.number.isRequired,
}
