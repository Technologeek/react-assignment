import React, { Component, StrictMode } from 'react'
import { ModalWrapper } from './style'
import { Validations } from '../../utils'
import Loader from '../../components/Loader'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../../utils/history'
import * as actions from '../../redux/UserCollection/actions'
import panda from '../../static/panda.png'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import PropTypes from 'prop-types'

const dropDownOptions = [
  { key: 1, text: 'GET', value: 1 },
  { key: 2, text: 'POST', value: 2 },
]
export class NewCollectionModal extends Component {
  constructor(props) {
    super(props)
    this.validations = new Validations()
    this.state = {
      fields: ['url', 'description', 'collectionName'],
      url: '',
      collectionName: '',
      description: '',
      method: '',
      errors: this.validations.errors,
    }
    this.handler = this.handler.bind(this)
  }

  handler() {}
  handleInputChange = event => {
    const { target } = event
    event.preventDefault()

    event.stopPropagation()
    let errors = this.validations.validate(target.name, target.value)
    let erros = '    '
    this.setState({
      [target.name]: target.value,
      errors: errors,
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
    const { url, description, collectionName } = this.state
    let userId = localStorage.getItem('userId')
    let token = localStorage.getItem('token')
    let errors = null
    this.state.fields.forEach(field => {
      let fieldValue = this.state[field]
      errors = this.validations.validate(field, fieldValue)
    })
    this.setState({
      errors: errors,
    })
    if (!this.validations.allNullKeyValue(errors)) return false
    const { method } = this.state
    const dataTosend = {
      collectionname: collectionName,
      description: description,
      method: method,
      url: url,
      user_id: userId,
    }
    let auth = {
      headers: { Authorization: 'Bearer ' + token },
    }
    console.log(userId)
    let postUrl = `${
      process.env.REACT_APP_BACKEND_URL
    }/users/${userId}/collections`

    axios.post(postUrl, dataTosend, auth).then(response => {
      console.log(response)
      this.props.getAllUserCollections(userId)
    })
  }
  render() {
    const { url, description, errors } = this.state
    const { method } = this.state
    console.log(method)
    const backEndError = this.props.error
    return (
      <StrictMode>
        <ModalWrapper
          style={{
            display: this.props.show ? 'flex' : 'none',
          }}
        >
          <div className="modal-register">
            <div className="modal-close" onClick={this.props.onClick} />
            <div className="logo-heading">
              <img className="logo-heading__nine" src={panda} alt="" />
              <span />
            </div>
            <h3>New Collection</h3>
            <div className="modal-register__form">
              {backEndError ? (
                <ul className="err-message">
                  {backEndError.error.map((errors, index) => (
                    <li key={index}>{errors}</li>
                  ))}
                </ul>
              ) : null}
              <div className="input-field">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Collection Name"
                    name="collectionName"
                    value={this.state.collectionName}
                    onChange={this.handleChange}
                    onBlur={this.handleInputChange}
                  />
                  {errors && errors.collectionName ? (
                    <div className="err">{errors.collectionName}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    onBlur={this.handleInputChange}
                  />
                  {errors && errors.description ? (
                    <div className="err">{errors.description}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <Dropdown
                    clearable
                    options={dropDownOptions}
                    selection
                    onChange={this.getDropDownValue}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Url"
                    name="url"
                    value={this.state.url}
                    onChange={this.handleChange}
                    onBlur={this.handleInputChange}
                  />
                  {errors && errors.url ? (
                    <div className="err">{errors.url}</div>
                  ) : null}
                </div>
                <button type="button" onClick={this.handleFormSubmit}>
                  {this.props.loader ? (
                    <Loader />
                  ) : (
                    <span>Create Collection</span>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="backdrop" />
        </ModalWrapper>
      </StrictMode>
    )
  }
}

NewCollectionModal.propTypes = {}

const mapStateToProps = state => {
  return {
    user: state.user,
    userId: state.id,
    loader: state.loader,
  }
}
export default connect(
  mapStateToProps,
  actions,
  null
)(NewCollectionModal)
