import React, { Component, StrictMode } from 'react'
import { ModalWrapper } from './style'
import { Validations } from '../../utils'
import Loader from '../../components/Loader'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../../utils/history'
import * as actions from '../../redux/UserAuth/actions'
import panda from '../../static/panda.png'
import PropTypes from 'prop-types'

export class ModalLogin extends Component {
  constructor(props) {
    super(props)
    this.validations = new Validations()
    this.state = {
      fields: ['email'],
      email: '',
      password: '',
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
    const { email, password } = this.state
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
      email: email,
      password: password,
    }
    this.props.loginUser({ email, password })
    this.props.loginNewUserDatabse(email)
  }

  render() {
    console.log(this.props)
    if (this.props.user) {
      if (Object.keys(this.props.user).length !== 0) {
        history.push('/Dashboard')
        this.props.onClick()
      }
    }
    const { errors, passwordError } = this.state
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
            <h3>Login</h3>
            <div className="modal-register__form">
              {backEndError ? (
                <ul className="err-message">{backEndError}</ul>
              ) : null}
              <div className="input-field">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={this.state.email || ''}
                    onChange={this.handleChange}
                    onBlur={this.handleInputChange}
                  />
                  {errors && errors.email ? (
                    <div className="err">{errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={this.state.password || ''}
                    onChange={this.handleChange}
                    onBlur={this.handleInputChange}
                  />
                  {errors && errors.password ? (
                    <div className="err">{errors.password}</div>
                  ) : null}
                </div>

                <button type="button" onClick={this.handleFormSubmit}>
                  {this.props.loader ? <Loader /> : <span>Login</span>}
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
ModalLogin.propTypes = {
  error: PropTypes.string,
  loader: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    user: state.user,
    router: state.router,
    loader: state.loader,
    error: state.error,
  }
}
export default connect(
  mapStateToProps,
  actions,
  null
)(ModalLogin)
