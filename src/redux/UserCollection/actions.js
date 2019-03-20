import {
  DEFAUL_ACTION,
  ALL_USER_COLLECTIONS,
  GET_RESPONSE_URL_DATA,
  SHOW_URL_RESPONSE,
  SHOW_URL_RESPONSE_POST,
  SHOW_URL_RESPONSE_ERROR,
  SHOW_POST_RESPONSE_POST,
  SHOW_POST_RESPONSE_ERROR,
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
        .get(`https://cors-anywhere.herokuapp.com/${url}`, {
          headers: {
            'Content-Type': contentType || 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Headers': '*',
          },
        })
        .then(response => {
          let dataRequest = {
            responseData: response,
          }
          dispatch({
            type: SHOW_URL_RESPONSE,
            payload: dataRequest,
          })
        })
        .catch(error => {
          let errordata = {
            error: error,
          }
          dispatch({
            type: SHOW_URL_RESPONSE_ERROR,
            payload: errordata,
          })
        })
    } else if (method === 'POST') {
      const dataToSend = {}
      let dynamicKey = data[0].key
      let value = data[0].value
      dataToSend[dynamicKey] = value
      console.log(dataToSend)
      axios
        .post(url, dataToSend, {
          headers: {
            'Content-Type': contentType || 'application/json',
          },
        })
        .then(response => {
          let postdataRequest = {
            responseDataPost: response,
          }
          dispatch({
            type: SHOW_URL_RESPONSE,
            payload: postdataRequest,
          })
        })
        .catch(error => {
          let posterrordata = {
            posterror: error,
          }
          dispatch({
            type: SHOW_URL_RESPONSE_ERROR,
            payload: posterrordata,
          })
        })
    } else {
      console.log('Method Not Supported')
    }
  }
}
