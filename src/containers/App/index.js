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
import ProfilePage from '../../containers/ProfilePage'
import AboutPage from '../../components/AboutPage'
import AboutMe from '../../components/AboutMe'
import 'semantic-ui-css/semantic.min.css'
import ErrorBoundary from '../../components/ErrorPage'

import { GlobalStyle } from '../../styles/global-styles'

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/Dashboard" component={DashBoard} />
              <Route
                path="/:userId/Profile"
                render={props => <ProfilePage {...props} />}
              />
              <Route exact path="/AboutPage" component={AboutPage} />
              <Route exact path="/AboutMe" component={AboutMe} />
              <Route component={RouteNotFound} />
            </Switch>
            <Footer />
            <GlobalStyle />
          </div>
        </Router>
      </ErrorBoundary>
    </div>
  )
}
