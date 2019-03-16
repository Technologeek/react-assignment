import React, { Component } from 'react'
import error_fallback from '../../static/error_fallback.gif'
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Warning : Component Malfunctioned</h1>
          <img src={error_fallback} />
        </div>
      )
    }

    return this.props.children
  }
}
