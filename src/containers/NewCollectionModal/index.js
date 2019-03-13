import React, { Component, StrictMode } from 'react'
import { ModalWrapper } from './style'
import { Validations } from '../../utils'
import Loader from '../../components/Loader'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../../utils/history'
import * as actions from '../../redux/UserAuth/actions'
import panda from '../../static/panda.png'

class NewCollectionModal extends Component {
  constructor(props) {
    super(props)
    this.validations = new Validations()
    this.state = {
      fields: ['url', 'description', 'collectionName'],
      url: '',
      collectionName: '',
      description: '',
      errors: this.validations.errors,
    }
  }

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

  handleFormSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const { url, description, collectionName } = this.state
    let errors = null
    this.state.fields.forEach(field => {
      let fieldValue = this.state[field]
      errors = this.validations.validate(field, fieldValue)
    })
    this.setState({
      errors: errors,
    })
    if (!this.validations.allNullKeyValue(errors)) return false

    const dataTosend = {
      url: url,
      description: description,
    }
    //this.props.loginUser({ email, password })
  }
  render() {
    const { url, description, errors } = this.state
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
                    placeholder="Url's comma seperated)"
                    name="url"
                    value={this.state.url}
                    onChange={this.handleChange}
                    onBlur={this.handleInputChange}
                  />
                  {errors && errors.url ? (
                    <div className="err">{errors.url}</div>
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

                <button type="button" onClick={this.handleFormSubmit}>
                  {this.props.spinner ? (
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

const mapStateToProps = state => {
  return {
    user: state.user,
    userId: state.id,
  }
}
export default connect(
  mapStateToProps,
  actions,
  null
)(NewCollectionModal)
