import React, { Component, Fragment } from 'react'
import { Input, Segment, Dropdown, Button } from 'semantic-ui-react'
import axios from 'axios'
import JSONPretty from 'react-json-pretty'
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css'

const dropDownOptions = [
  { key: 1, text: 'GET', value: 1 },
  { key: 2, text: 'POST', value: 2 },
]
export default class ApiDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method: '',
      url: '',
      key: '',
      value: '',
      contentType: '',
      body: '',
      getResponseData: '',
      getResponseError: '',
      postResponseData: '',
      postResponseError: '',
      errors: '',
    }
  }
  handleInputChange = event => {
    const { target } = event
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      [target.name]: target.value,
    })
  }

  handleChange = event => {
    const { currentTarget } = event
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      [currentTarget.name]: currentTarget.value,
    })
  }

  getDropDownValue = event => {
    console.log('reached')
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      method: event.target.textContent,
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const { url, method, key, value, body, contentType } = this.state
    let dynamicKey = this.state.key
    if (method === 'GET') {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${url}`, {
          headers: {
            'Content-Type': contentType,
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Headers': '*',
          },
        })
        .then(response => {
          this.setState({
            getResponseData: response,
          })
        })
        .catch(error => {
          this.setState({
            getResponseError: error,
          })
        })
    } else if (method === 'POST') {
      const dataToSend = {}
      dataToSend[dynamicKey] = value
      console.log(dataToSend)
      axios
        .post(url, dataToSend, {
          headers: {
            'Content-Type': contentType || 'application/json',
          },
        })
        .then(response => {
          this.setState({
            postResponseData: response,
          })
        })
        .catch(error => {
          this.setState({
            postResponseError: error,
          })
        })
    } else {
      console.log('Method Not Supported')
    }
  }

  render() {
    const { errors } = this.state
    console.log(this.state.getResponseData, this.state.postResponseData)
    const {
      method,
      url,
      body,
      getResponseData,
      getResponseError,
      postResponseData,
      postResponseError,
    } = this.state
    return (
      <div className="modal-register">
        <Segment>
          This is your Api Display Section.All the Url's from the collection can
          be called and the respective responses willbe displayed here. You can
          also make new direct requests to urls but only get and post types are
          supported at the moment.
        </Segment>
        <span>URL: </span>
        <Input
          name="url"
          label={{ icon: 'asterisk' }}
          labelPosition="right corner"
          placeholder="Search..."
          value={this.state.url}
          onChange={this.handleInputChange}
          onBlur={this.handleInputChange}
        />
        <span>Method: </span>
        <Dropdown
          clearable
          options={dropDownOptions}
          selection
          onChange={this.getDropDownValue}
        />
        <span>Body: </span>
        <Input
          name="key"
          placeholder="Key..."
          value={this.state.key}
          onChange={this.handleChange}
          onBlur={this.handleInputChange}
        />
        <Input
          name="value"
          placeholder="Value..."
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.handleInputChange}
        />
        <Input
          name="contentType"
          placeholder="Value..."
          value={this.state.contentType}
          onChange={this.handleChange}
          onBlur={this.handleInputChange}
        />
        <Button
          content="SEND"
          icon="right arrow"
          labelPosition="right"
          onClick={this.handleFormSubmit}
        />
        <div className="response-container">
          {getResponseData === '' ? null : (
            <JSONPretty
              id="json-pretty"
              data={JSON.stringify(getResponseData)}
              theme={JSONPrettyMon}
            />
          )}
          <Fragment>
            {postResponseData === '' ? null : (
              <JSONPretty
                id="json-pretty"
                data={JSON.stringify(postResponseData)}
                theme={JSONPrettyMon}
              />
            )}
          </Fragment>
          {getResponseError === '' ? null : (
            <JSONPretty
              id="json-pretty"
              data={JSON.stringify(postResponseData)}
              theme={JSONPrettyMon}
            />
          )}
          {getResponseError === '' ? null : (
            <span>{JSON.stringify(getResponseError)}</span>
          )}
          {postResponseError === '' ? null : (
            <span>{JSON.stringify(postResponseError)}</span>
          )}
        </div>
      </div>
    )
  }
}
