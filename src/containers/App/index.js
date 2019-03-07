import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomePage from '../../containers/HomePage'

import GlobalStyle from '../../styles/global-styles'

export default function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Footer />
      <GlobalStyle />
    </div>
  )
}
