import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ModalRegister from '../../containers/ModalRegister'
import ModalLogin from '../../containers/ModalLogin'
import { HeaderContainer } from './style'
import { connect } from 'react-redux'
import logo from '../../static/logo.png'
import history from '../../utils/history'
import * as actions from '../../redux/UserAuth/actions'
import PropTypes from 'prop-types'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showLoginModal: false,
    }
  }
  handleSignupOpenModal = () => {
    this.setState({
      showModal: true,
    })
  }
  handleSignupModalClose = () => {
    this.setState({
      showModal: false,
    })
    this.props.resetErrors()
  }

  handleLoginOpenModal = () => {
    this.setState({
      showLoginModal: true,
    })
  }
  handleLoginModalClose = () => {
    this.setState({
      showLoginModal: false,
    })
    this.props.resetErrors()
  }
  redirect = () => {
    history.push('/not')
  }
  handleHeader = () => {
    history.push('./AboutPage')
  }

  render() {
    let userId = this.props && this.props.userId
    const isLoggedIn = Object.keys(this.props.user || {}).length !== 0
    if (!isLoggedIn) {
      history.push('/')
    }
    return (
      <HeaderContainer>
        {this.state.showModal ? (
          <ModalRegister
            show={this.state.showModal}
            onClick={this.handleSignupModalClose.bind(this)}
          />
        ) : null}
        {this.state.showLoginModal ? (
          <ModalLogin
            show={this.state.showLoginModal}
            onClick={this.handleLoginModalClose}
          />
        ) : null}

        <div className="leftNav">
          <div className="log">
            {isLoggedIn ? (
              <img
                className="fitimage loggedIn"
                src="https://i.imgur.com/oSOW0jh.png"
                alt="Home"
                onClick={() => {
                  history.push('/Dashboard')
                }}
              />
            ) : (
              <img
                className="fitimage"
                src="https://i.imgur.com/oSOW0jh.png"
                alt=""
              />
            )}

            <img src={logo} alt="" />
          </div>
        </div>
        <div className="rightNav">
          <ul>
            <li className="custom_cursor" onClick={this.handleHeader}>
              {' '}
              What is API-PANDA?
            </li>
            <li>
              <div>
                {isLoggedIn ? (
                  <div>
                    <button
                      onClick={() => {
                        history.push(`${userId}/Profile`)
                      }}
                    >
                      Profile
                    </button>
                    <button onClick={this.props.logoutUser}>Logout</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={this.handleSignupOpenModal}>
                      Register
                    </button>
                    <button onClick={this.handleLoginOpenModal}>Login</button>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </HeaderContainer>
    )
  }
}
Header.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
}
const mapStateToProps = state => {
  return {
    user: state.user,
    router: state.router,
    userId: state.id,
  }
}
export default connect(
  mapStateToProps,
  actions,
  null
)(Header)
