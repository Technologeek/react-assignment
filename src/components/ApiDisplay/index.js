import React, { Component, Fragment } from 'react'
import { Input, Segment, Dropdown, Button } from 'semantic-ui-react'
import axios from 'axios'
import JSONPretty from 'react-json-pretty'
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css'
import { connect } from 'react-redux'
import * as actions from '../../redux/ResponseUrl/actions'
import './style.css'

// const dropDownOptions = [
//   { key: 1, text: 'GET', value: 1 },
//   { key: 2, text: 'POST', value: 2 },
// ]
class ApiDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method: '',
      url: '',
      key: '',
      value: '',
      dropdown: [],
      contentType: '',
      body: '',
      getResponseData: '',
      getResponseError: '',
      postResponseData: '',
      postResponseError: '',
      errors: '',
      dropDownOptions: [
        { key: 1, text: 'GET', value: 1 },
        { key: 2, text: 'POST', value: 2 },
      ],
    }
    this.input = React.createRef()
  }

  static getDerivedStateFromProps(props, currentState) {
    console.log(props.urldata.method)
    if (currentState.url !== props.urldata) {
      return {
        url: props.urldata.url,
        dropdown: props.urldata.method,
      }
    }
    // Return null to indicate no change to state.
    return null
  }

  handleInputChange = event => {
    const { target } = event
    console.log(event)
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      [target.name]: target.value,
    })
  }

  handleChange = event => {
    const { currentTarget } = event
    console.log(event)
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
    console.log(this.input)
    const { method, key, value, body, contentType } = this.state
    let url = this.input.current.value
    event.preventDefault()
    event.stopPropagation()
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
    console.log(this.props)
    console.log(this.state.dropdown)
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
        <Segment className="message">
          This is your Api Display Section.All the Url's from the collection can
          be called and the respective responses willbe displayed here. You can
          also make new direct requests to urls but only get and post types are
          supported at the moment.
        </Segment>
        <div className="input_container">
          <div className="inputbox">
            <span className="label">URL: </span>
            <Input
              name="url"
              label={{ icon: 'asterisk' }}
              labelPosition="right corner"
              placeholder="Http/Https.."
              defaultValue={this.state.url}
              ref={this.input}
              // onChange={this.handleInputChange}
              // onBlur={this.handleInputChange}
            />
            <span className="label">Method: </span>
            <Dropdown
              clearable
              options={dropDownOptions}
              selection
              value={this.state.dropdown}
              defaultValue={this.state.dropdown}
              onChange={this.getDropDownValue}
            />
            <span className="label">Body: </span>
            <Input
              name="key"
              placeholder="Key..."
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
          </div>
          <div className="inputbox custom">
            <span className="label">Type: </span>
            <Input
              name="contentType"
              placeholder="Content Type..."
              value={this.state.contentType}
              onChange={this.handleChange}
              onBlur={this.handleInputChange}
            />
            <span className="buttonwidth">
              <Button
                className="buttonlabel"
                content="SEND"
                icon="right arrow"
                labelPosition="right"
                onClick={this.handleFormSubmit}
              />
            </span>
          </div>
        </div>
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

const mapStateToProps = state => {
  return {
    urldata: state.urldata,
  }
}
export default connect(
  mapStateToProps,
  actions,
  null
)(ApiDisplay)
