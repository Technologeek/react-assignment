import {
  DEFAUL_ACTION,
  ALL_USER_COLLECTIONS,
  GET_RESPONSE_URL_DATA,
  SHOW_URL_RESPONSE,
  SHOW_URL_RESPONSE_POST,
  SHOW_URL_RESPONSE_ERROR,
} from './constants'
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

export function getUrlDataForResponse(urlData) {
  return (dispatch, getState) => {
    if (urlData)
      dispatch({
        type: GET_RESPONSE_URL_DATA,
        payload: urlData,
      })
  }
}

export function sendUrlResponse(...data) {
  console.log(data)
  let url = data[0].url
  let method = data[0].method
  let contentType = data[0].contentType
  return (dispatch, getState) => {
    if (method === 'GET') {
      return axios
        .get(url, {
          headers: {
            'Content-Type': contentType || 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Headers': '*',
          },
        })
        .then(response => {
          dispatch({
            type: SHOW_URL_RESPONSE,
            payload: response,
          })
        })
        .catch(error => {
          dispatch({
            type: SHOW_URL_RESPONSE_ERROR,
            payload: error,
          })
        })
    } else if (method === 'POST') {
      // const dataToSend = {}
      // dataToSend[dynamicKey] = value
      // console.log(dataToSend)
      // return axios
      //   .post(url, dataToSend, {
      //     headers: {
      //       'Content-Type': contentType || 'application/json',
      //     },
      //   })
      //   .then(response => {})
      //   .catch(error => {})
    } else {
      console.log('Method Not Supported')
    }
  }
}
