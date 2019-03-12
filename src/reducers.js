import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'
import UserAuthReducer from './redux/UserAuth/UserAuthReducer'
import UserDbAuthReducer from './redux/UserAuth/UserDbAuthReducer'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    firebase: firebaseReducer,
    user: UserAuthReducer,
    id: UserDbAuthReducer,
  })
export default rootReducer
