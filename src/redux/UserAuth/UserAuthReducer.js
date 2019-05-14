import {
  DEFAULT_ACTION,
  REGISTER_NEW_USER,
  USER_LOGGEDIN,
  LOGOUT_USER,
  REGISTER_NEW_USER_DATABSE,
} from './constants'
const initialState = {}
const UserAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    case REGISTER_NEW_USER:
      return action.payload
    case USER_LOGGEDIN:
      return action.payload
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
export default UserAuthReducer
