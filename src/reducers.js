import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'
import UserAuthReducer from './redux/UserAuth/UserAuthReducer'
import UserDbAuthReducer from './redux/UserAuth/UserDbAuthReducer'
import UserCollectionReducer from './redux/UserCollection/UserCollectionReducer'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    firebase: firebaseReducer,
    user: UserAuthReducer,
    id: UserDbAuthReducer,
    collection: UserCollectionReducer,
  })
export default rootReducer
