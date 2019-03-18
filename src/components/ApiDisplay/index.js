import React, { Component, Fragment } from 'react'
import { Input, Segment, Dropdown, Button } from 'semantic-ui-react'
import axios from 'axios'
import JSONPretty from 'react-json-pretty'
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css'
import { connect } from 'react-redux'
import * as actions from '../../redux/ResponseUrl/actions'
import Loader from '../Loader'
import ErrorBoundary from '../ErrorPage'
import './style.css'
import PropTypes from 'prop-types'

const dropDownOptions = [
  { key: 1, text: 'GET', value: 1 },
  { key: 2, text: 'POST', value: 2 },
]
class ApiDisplay extends Component {
  constructor(props) {
    super(props)
    this.dynamicallySetDiv()
    this.state = {
      method: '',
      url: '',
      key: '',
      value: '',
      dropdown: [],
      placeholder: '',
      contentType: '',
      body: '',
      showLoader: false,
      showgetResponseDataDiv: false,
      showpostResponseDataDiv: false,
      getResponseData: '',
      getResponseError: '',
      postResponseData: '',
      postResponseError: '',
      errors: '',
    }
  }

  // static getDerivedStateFromProps(props, currentState) {
  //   console.log(props.urldata.method)
  //   if (currentState.url !== props.urldata) {
  //     return {
  //       url: props.urldata.url,
  //       placeholder: props.urldata.method,
  //     }
  //   }
  //   // Return null to indicate no change to state.
  //   return null
  // }

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
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      method: event.target.textContent,
    })
  }

  dynamicallySetDiv = () => {
    console.log('reached')
    let showDynamicgetDiv = Object.keys(this.props.reqdata).length !== 0
    if (showDynamicgetDiv) {
      this.setState({
        showgetResponseDataDiv: true,
      })
    }
  }
  componentWillReceiveProps() {
    this.dynamicallySetDiv()
  }
  handleFormSubmit = event => {
    console.log(this.input)
    const { method, key, url, value, body, contentType } = this.state
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      showLoader: true,
    })
    let dynamicKey = this.state.key
    if (method === '') {
      this.setState({
        showLoader: false,
      })
    }
    if (method === 'GET') {
      axios
        .get(url, {
          headers: {
            'Content-Type': contentType || 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Headers': '*',
          },
        })
        .then(response => {
          this.setState({
            getResponseData: response,
            showLoader: false,
            showgetResponseDataDiv: true,
            showpostResponseDataDiv: false,
          })
        })
        .catch(error => {
          this.setState({
            getResponseError: error,
            showLoader: false,
            showgetResponseDataDiv: false,
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
            showpostResponseDataDiv: true,
            showgetResponseDataDiv: false,
            showLoader: false,
          })
        })
        .catch(error => {
          this.setState({
            postResponseError: error,
            showLoader: false,
            showpostResponseDataDiv: false,
          })
        })
    } else {
      console.log('Method Not Supported')
    }
  }

  render() {
    const { errors } = this.state
    const {
      method,
      url,
      body,
      placeholder,
      getResponseData,
      getResponseError,
      postResponseData,
      postResponseError,
      showLoader,
      get,
      showgetResponseDataDiv,
      showpostResponseDataDiv,
    } = this.state
    let dataToDisplay = getResponseData || this.props.reqdata
    console.log(dataToDisplay)
    console.log(showgetResponseDataDiv)
    console.log(
      getResponseData === '' && Object.keys(this.props.reqdata).length == 0
    )
    console.log(Object.keys(this.props.reqdata).length)
    return (
      <ErrorBoundary>
        <div className="modal-register">
          <Segment className="message">
            This is your Api Display Section.All the Url's from the collection
            can be called and the respective responses willbe displayed here.
            You can also make new direct requests to urls but only get and post
            types are supported at the moment.
          </Segment>
          <div className="input_container">
            <div className="inputbox">
              <span className="label">URL: </span>
              <Input
                name="url"
                label={{ icon: 'asterisk' }}
                labelPosition="right corner"
                placeholder="Http/Https.."
                onChange={this.handleInputChange}
              />
              <span className="label">Method: </span>
              <Dropdown
                clearable
                options={dropDownOptions}
                selection
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
                {showLoader ? (
                  <Loader />
                ) : (
                  <Button
                    className="buttonlabel"
                    content="SEND"
                    icon="right arrow"
                    labelPosition="right"
                    onClick={this.handleFormSubmit}
                  />
                )}
              </span>
            </div>
          </div>
          <div className="response-container">
            {getResponseData === '' &&
            Object.keys(this.props.reqdata).length == 0 ? null : (
              <div>
                {showgetResponseDataDiv ? (
                  <JSONPretty
                    id="json-pretty"
                    data={JSON.stringify(dataToDisplay)}
                    theme={JSONPrettyMon}
                  />
                ) : null}
              </div>
            )}
            <Fragment>
              {postResponseData === '' ? null : (
                <div>
                  {showpostResponseDataDiv ? (
                    <JSONPretty
                      id="json-pretty"
                      data={JSON.stringify(postResponseData)}
                      theme={JSONPrettyMon}
                    />
                  ) : null}
                </div>
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
              <Fragment>
                <p className="error">
                  Error! : Something went wrong with your request. Please ensure
                  your backend server have enabled CORS
                </p>
                <span className="error_response">
                  {JSON.stringify(getResponseError)}
                </span>
              </Fragment>
            )}
            {postResponseError === '' ? null : (
              <Fragment>
                <p className="error">
                  Error! : Something went wrong with your request. Please ensure
                  your backend server have enabled CORS
                </p>
                <span className="error_response">
                  {JSON.stringify(postResponseError)}
                </span>
              </Fragment>
            )}
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}

ApiDisplay.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    urldata: state.urldata,
    reqdata: state.reqdata,
  }
}
export default connect(
  mapStateToProps,
  actions,
  null
)(ApiDisplay)
