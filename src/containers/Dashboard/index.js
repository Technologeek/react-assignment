import React, { Component, Fragment } from 'react'
import CollectionsList from '../../components/CollectionsList'
import CollectionsListUser from '../../components/CollectionsListUser'
import * as actions from '../../redux/UserCollection/actions'
import { connect } from 'react-redux'

class DashBoard extends Component {
  componentDidMount() {
    console.log(this.props)
    let id = this.props && this.props.userId
    console.log(id)
    this.props.getAllUserCollections(id)
  }
  render() {
    return (
      <Fragment>
        <CollectionsList />
        <CollectionsListUser collections={this.props.collection} />
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
