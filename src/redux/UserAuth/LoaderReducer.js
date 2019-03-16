import { SHOW_LOADING_ICON, HIDE_LOADING_ICON } from './constants'
const INITIAL_STATE = false
const LoaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LOADING_ICON:
      return action.payload
    case HIDE_LOADING_ICON:
      return action.payload
    default:
      return state
  }
}
export default LoaderReducer
