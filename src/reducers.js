import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'
import UserAuthReducer from './redux/UserAuth/UserAuthReducer'
import LoaderReducer from './redux/UserAuth/LoaderReducer'
import ErrorReducer from './redux/UserAuth/ErrorReducer'
import UserDbAuthReducer from './redux/UserAuth/UserDbAuthReducer'
import UserCollectionReducer from './redux/UserCollection/UserCollectionReducer'
import ResponseUrlReducer from './redux/UserCollection/ResponseUrlReducer'
import ResponseRequestReducer from './redux/UserCollection/ResponseRequestReducer'
const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    firebase: firebaseReducer,
    user: UserAuthReducer,
    id: UserDbAuthReducer,
    collection: UserCollectionReducer,
    urldata: ResponseUrlReducer,
    reqdata: ResponseRequestReducer,
    loader: LoaderReducer,
    error: ErrorReducer,
  })
export default rootReducer
