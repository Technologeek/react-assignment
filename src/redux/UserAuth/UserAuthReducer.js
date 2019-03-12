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
      console.log(action.payload)
      return action.payload
    case REGISTER_NEW_USER_DATABSE:
      return action.payload
    case USER_LOGGEDIN:
      console.log(action.payload)
      return action.payload
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
export default UserAuthReducer
