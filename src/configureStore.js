import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createBrowserHistory from 'history/createBrowserHistory'
import createRootReducer from './reducers'
import { reduxFirebase, getFirebase } from 'react-redux-firebase'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import config from './components/FireBase/config'

export const history = createBrowserHistory()
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['urldata', 'collection', 'loader', 'error'],
}
const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
)

const initialState = {}
const enhancers = []

const middleware = [
  thunk.withExtraArgument(getFirebase),
  routerMiddleware(history),
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  reduxFirebase(config)
)

const store = createStore(persistedReducer, initialState, composedEnhancers)
export let persistor = persistStore(store)
export default store
