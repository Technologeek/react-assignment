import { BACKEND_ERROR, RESET_ERRORS } from './constants'

const INITIAL_STATE = null

const ErrorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BACKEND_ERROR:
      return action.payload
    case RESET_ERRORS:
      return INITIAL_STATE
    default:
      return state
  }
}

export default ErrorReducer
