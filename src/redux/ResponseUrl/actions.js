import { DEFAULT_ACTION, GET_RESPONSE_URL_DATA } from './constants'

export function getUrlDataForResponse(urlData) {
  return (dispatch, getState) => {
    if (urlData)
      dispatch({
        type: GET_RESPONSE_URL_DATA,
        payload: urlData,
      })
  }
}
