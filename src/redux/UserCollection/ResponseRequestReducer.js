import {
  DEFAULT_ACTION,
  SHOW_URL_RESPONSE,
  SHOW_URL_RESPONSE_ERROR,
} from './constants'
const initialState = {}
const ResponseRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    case SHOW_URL_RESPONSE:
      return action.payload
    case SHOW_URL_RESPONSE_ERROR:
      return action.payload
    default:
      return state
  }
}
export default ResponseRequestReducer
