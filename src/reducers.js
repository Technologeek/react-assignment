import { combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { connectRouter } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'

export const history = createHistory()

export default combineReducers({
  router: connectRouter(history),
  firebase: firebaseReducer,
})
