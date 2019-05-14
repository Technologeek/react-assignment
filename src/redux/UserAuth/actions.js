import {
  USER_LOGGEDIN,
  REGISTER_NEW_USER,
  LOGIN_NEW_USER_DATABSE,
  LOGOUT_USER,
  SHOW_LOADING_ICON,
  HIDE_LOADING_ICON,
  BACKEND_ERROR,
  RESET_ERRORS,
} from './constants'
import firebase from 'firebase/app'

import axios from 'axios'
export function loginUser({ email, password }) {
  return (dispatch, getState) => {
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          console.log(response.user)
          dispatch({
            type: USER_LOGGEDIN,
            payload: response.user,
          })
          console.log(response.user)
          dispatch(resetErrors())
          dispatch(hideLoadingIcon())
        })
        .catch(error => {
          dispatch(hideLoadingIcon())
          const errorMessage = 'Invalid Credentials'
          dispatch(showBackendError(errorMessage))
        })
    }
  }
}

export function registerNewUser(userData) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/auth/signup`
  return (dispatch, getState) => {
    return axios
      .post(url, userData)
      .then(response => {
        if (response.status && response.status === 200) {
          console.log(response.data)
          dispatch({
            type: REGISTER_NEW_USER,
            payload: response.data,
          })
          localStorage.setItem('userId', response.data && response.data.userId)
          localStorage.setItem('token', response.data && response.data.token)
        }
      })
      .catch(error => {
        const errorMessage =
          'Please Follow the Password Rules and use an unique username to Sign-up'
        dispatch(showBackendError(errorMessage))
      })
  }
}

export function loginNewUserDatabse(email) {
  const url = `${process.env.REACT_APP_JSON_BASE_URL}users?email_like=${email}`
  return (dispatch, getState) => {
    dispatch(showLoadingIcon())
    return axios
      .get(url)
      .then(response => {
        if (response.data) dispatch(showLoadingIcon())
        dispatch({
          type: USER_LOGGEDIN,
          payload: response.data[0].id,
        })
        //dispatch(resetErrors());
      })
      .catch(error => {
        dispatch(hideLoadingIcon())
        const errorMessage = 'Something went wrong.Please try again.'
        // const errorObjectWithMessage = {
        //   ...error,
        //   errorMessage: error.response.data.error
        //     ? error.response.data
        //     : {
        //         error: [errorMessage],
        //       },
        // };
        // dispatch(showBackendError(errorObjectWithMessage.errorMessage));
      })
  }
}

export function logoutUser() {
  return (dispatch, getState) => {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    dispatch({
      type: LOGOUT_USER,
      payload: '',
    }).catch(error => {
      dispatch(showLoadingIcon())
      const errorMessage = 'Something went wrong.Please try again.'
    })
  }
}

export function showLoadingIcon() {
  return {
    type: SHOW_LOADING_ICON,
    payload: true,
  }
}
export function hideLoadingIcon() {
  return {
    type: HIDE_LOADING_ICON,
    payload: false,
  }
}

export function resetErrors() {
  return {
    type: RESET_ERRORS,
  }
}

export function showBackendError(payload) {
  return {
    type: BACKEND_ERROR,
    payload,
  }
}
