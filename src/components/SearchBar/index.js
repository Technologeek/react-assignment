import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import './style.css'
import axios from 'axios'
import PropTypes from 'prop-types'

const source = []
export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { isLoading: false, results: [], value: '', active: false }

    //this.handleResultSelect = this.handleResultSelect.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }
  componentWillMount() {
    this.resetComponent()
  }
  resetComponent = () =>
    this.setState({
      isLoading: false,
      results: [],
      value: '',
    })
  getListData() {
    this.setState({ isLoading: true })
    let pushData =
      this.props.getAllCollections &&
      this.props.getAllCollections.body &&
      this.props.getAllCollections.body.map(element => {
        const found = source.some(el => el.title === element.collectionname)
        if (!found)
          source.push({ title: element.collectionname, method: element.method })
      })
  }
  handleSearchChange(e, { value: query }) {
    this.getListData()
    const re = new RegExp(query, 'i')
    const isMatch = result => re.test(result.title)
    this.setState({
      value: query,
      isLoading: false,
      results: source.filter(isMatch),
    })
  }
  render() {
    const { isLoading, value, results } = this.state
    return (
      <div className="padding">
        <Search
          fluid
          loading={isLoading}
          onSearchChange={this.handleSearchChange}
          results={results}
          value={value}
        />
      </div>
    )
  }
}
SearchBar.propTypes = {
  results: PropTypes.array,
}
