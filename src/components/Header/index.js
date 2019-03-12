import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ModalRegister from '../../containers/ModalRegister'
import ModalLogin from '../../containers/ModalLogin'
import { HeaderContainer } from './style'
import { connect } from 'react-redux'
import logo from '../../static/logo.png'

class Header extends Component {
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
  }
  render() {
    const isLoggedIn = Object.keys(this.props.user).length !== 0
    return (
      <HeaderContainer>
        <ModalRegister
          show={this.state.showModal}
          onClick={this.handleSignupModalClose}
        />
        <ModalLogin
          show={this.state.showLoginModal}
          onClick={this.handleLoginModalClose}
        />
        <div className="leftNav">
          <div className="log">
            <img
              className="fitimage"
              src="https://i.imgur.com/oSOW0jh.png"
              alt=""
            />
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="rightNav">
          <ul>
            <li>
              <Link to="/about"> What is Api-Pot?</Link>
            </li>
            <li>
              <div>
                {isLoggedIn ? (
                  <div>
                    <button onClick={this.handleSignupOpenModal}>
                      Profile
                    </button>
                    <button onClick={this.handleLoginOpenModal}>Logout</button>
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
const mapStateToProps = state => {
  return {
    user: state.user,
    router: state.router,
  }
}
export default connect(
  mapStateToProps,
  null
)(Header)
