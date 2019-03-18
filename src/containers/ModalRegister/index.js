import React, { Component, StrictMode } from 'react'
import { ModalWrapper } from './style'
import { Validations } from '../../utils'
import * as actions from '../../redux/UserAuth/actions'
import { connect } from 'react-redux'
import history from '../../utils/history'
import panda from '../../static/panda.png'
import Loader from '../../components/Loader'
import PropTypes from 'prop-types'

export class ModalRegister extends Component {
  constructor(props) {
    super(props)
    this.validations = new Validations()
    this.state = {
      fields: ['username', 'password', 'confirmpassword', 'email'],
      username: '',
      password: '',
      confirmpassword: '',
      email: '',
      passwordError: false,
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
  handleConfirmPassword() {
    const { password, confirmpassword } = this.state
    if (password !== confirmpassword) this.setState({ passwordError: true })
    else this.setState({ passwordError: false })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const {
      username,
      password,
      confirmpassword,
      passwordError,
      email,
    } = this.state
    let errors = null
    this.state.fields.forEach(field => {
      let fieldValue = this.state[field]
      errors = this.validations.validate(field, fieldValue)
      errors = this.validations.validate(field, fieldValue)
    })
    this.handleConfirmPassword()
    this.setState({
      errors: errors,
    })
    if (!this.validations.allNullKeyValue(errors) && !passwordError)
      return false

    const dataTosend = {
      username: username,
      email: email,
    }
    this.props.registerNewUser({ email, password })
    this.props.registerNewUserDatabse(dataTosend)
  }
  render() {
    console.log(this.props.loader)
    if (this.props.user) {
      if (Object.keys(this.props.user).length !== 0 && this.props.userId) {
        history.push('/Dashboard')
        this.props.onClick()
      }
    }
    const { errors, passwordError } = this.state
    const backEndError = this.props.error
    let passwordErrorMessage = ''
    if (passwordError) passwordErrorMessage = "Passwords Don't Match"
    else passwordErrorMessage = ''
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
              <span className="custom-textmessage">
                Get Your Panda Hats on!
              </span>
            </div>
            <h3>Register</h3>
            <div className="modal-register__form">
              {backEndError ? (
                <ul className="err-message">{backEndError}</ul>
              ) : null}
              <div className="input-field">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={this.state.username || ''}
                    onChange={this.handleChange}
                    onBlur={this.handleInputChange}
                  />
                  {errors && errors.username ? (
                    <div className="err">{errors.username}</div>
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
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmpassword"
                    value={this.state.confirmpassword || ''}
                    onChange={this.handleChange}
                    onBlur={this.handleInputChange}
                  />
                  {errors && errors.confirmpassword ? (
                    <div className="err">{errors.confirmpassword}</div>
                  ) : null}
                  {passwordError ? (
                    <div className="err">{passwordErrorMessage}</div>
                  ) : null}
                </div>
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
                <button type="button" onClick={this.handleFormSubmit}>
                  {this.props.loader ? <Loader /> : <span>Register</span>}
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
ModalRegister.propTypes = {
  error: PropTypes.string,
  loader: PropTypes.bool,
}
const mapStateToProps = state => {
  return {
    user: state.user,
    userId: state.id,
    loader: state.loader,
    error: state.error,
  }
}
export default connect(
  mapStateToProps,
  actions,
  null
)(ModalRegister)
