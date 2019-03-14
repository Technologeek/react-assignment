import React, { Component, Fragment } from 'react'
import CollectionsList from '../../components/CollectionsList'
import CollectionsListUser from '../../components/CollectionsListUser'
import Quotes from '../../components/Hooks/Quotes'
import ApiDisplay from '../../components/ApiDisplay'
import * as actions from '../../redux/UserCollection/actions'
import { connect } from 'react-redux'
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'
import './style.css'

class DashBoard extends Component {
  componentDidMount() {
    console.log(this.props)
    let id = this.props && this.props.userId
    console.log(id)
    this.props.getAllUserCollections(id)
  }
  render() {
    let id = this.props && this.props.userId
    return (
      <Fragment>
        <Container className="custom_width">
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={5}>
                <CollectionsList />
                <CollectionsListUser
                  collections={this.props.collection}
                  getAllCollections={this.props.getAllUserCollections.bind(
                    this
                  )}
                  userId={id}
                />
              </Grid.Column>
              <Grid.Column width={11}>
                <Quotes />
                <ApiDisplay />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    userId: state.id,
    collection: state.collection,
  }
}
export default connect(
  mapStateToProps,
  actions,
  null
)(DashBoard)
