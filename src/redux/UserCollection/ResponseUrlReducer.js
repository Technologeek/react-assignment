import { DEFAULT_ACTION, GET_RESPONSE_URL_DATA } from './constants'
const initialState = {}
const ResponseUrlReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    case GET_RESPONSE_URL_DATA:
      return action.payload
    default:
      return state
  }
}
export default ResponseUrlReducer
