import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor, history } from './configureStore'
import App from './containers/App'

// Create redux store with history
const initialState = {}
const MOUNT_NODE = document.getElementById('root')
console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  MOUNT_NODE
)
