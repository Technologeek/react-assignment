import { DEFAULT_ACTION, ALL_USER_COLLECTIONS } from './constants'
const initialState = {}
const UserCollectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    case ALL_USER_COLLECTIONS:
      return action.payload
    default:
      return state
  }
}
export default UserCollectionReducer
