import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ModalRegister from '../../containers/ModalRegister'
import ModalLogin from '../../containers/ModalLogin'
import HomePage from '../../containers/HomePage'
import DashBoard from '../../containers/Dashboard'
import history from '../../utils/history'
import RouteNotFound from '../../components/RouteNotFound'
import 'semantic-ui-css/semantic.min.css'

import { GlobalStyle } from '../../styles/global-styles'

export default function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Signup" component={ModalRegister} />
            <Route exact path="/Login" component={ModalLogin} />
            <Route exact path="/Dashboard" component={DashBoard} />
            <Route component={RouteNotFound} />
          </Switch>
          <Footer />
          <GlobalStyle />
        </div>
      </Router>
    </div>
  )
}
