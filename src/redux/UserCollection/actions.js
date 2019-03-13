import { DEFAUL_ACTION, ALL_USER_COLLECTIONS } from './constants'
import axios from 'axios'

export function getAllUserCollections(id) {
  let url = `${process.env.REACT_APP_JSON_BASE_URL}users/${id}/collections`
  return (dispatch, getState) => {
    return axios
      .get(url)
      .then(response => {
        dispatch({
          type: ALL_USER_COLLECTIONS,
          payload: response.data,
        })
      })
      .catch(error => {
        const errorMessage = 'Something went wrong.Please try again.'
      })
  }
}
