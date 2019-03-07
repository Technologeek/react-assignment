import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
//import ModalRegister from '../../containers/ModalRegister'
//import { HeaderContainer } from './style'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }
  handleOpenModal = () => {
    this.setState({
      showModal: true,
    })
  }
  handleModalClose = () => {
    this.setState({
      showModal: false,
    })
  }
  render() {
    return <div />
  }
}
