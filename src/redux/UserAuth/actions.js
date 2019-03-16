import {
  USER_LOGGEDIN,
  REGISTER_NEW_USER,
  REGISTER_NEW_USER_DATABSE,
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
          //dispatch(resetErrors())
        })
        .catch(error => {
          dispatch(hideLoadingIcon())
          const errorMessage = 'Invalid Credentials'
          dispatch(showBackendError(errorMessage))
        })
    }
  }
}
export function registerNewUser({ email, password }) {
  return (dispatch, getState, { api, setAuthorizationToken }) => {
    dispatch(showLoadingIcon())
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        dispatch(showLoadingIcon())
        dispatch({
          type: REGISTER_NEW_USER,
          payload: response.user,
        })
        dispatch(resetErrors())
      })
      .catch(error => {
        dispatch(hideLoadingIcon())
        const errorMessage = 'User Already Registered/Put Valid Data'
        dispatch(showBackendError(errorMessage))
      })
  }
}

export function registerNewUserDatabse(userData) {
  const url = `${process.env.REACT_APP_JSON_BASE_URL}users`
  return (dispatch, getState) => {
    return axios
      .post(url, userData)
      .then(response => {
        console.log(response.data.id)
        dispatch({
          type: REGISTER_NEW_USER_DATABSE,
          payload: response.data.id,
        })
      })
      .catch(error => {
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

export function loginNewUserDatabse(email) {
  const url = `${process.env.REACT_APP_JSON_BASE_URL}users?email_like=${email}`
  return (dispatch, getState) => {
    dispatch(showLoadingIcon())
    return axios
      .get(url)
      .then(response => {
        if (response.data) dispatch(showLoadingIcon())
        dispatch({
          type: LOGIN_NEW_USER_DATABSE,
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
    firebase
      .auth()
      .signOut()
      .then(response => {
        dispatch({
          type: LOGOUT_USER,
          payload: response,
        })
        console.log(response.user)
        //dispatch(resetErrors())
      })
      .catch(error => {
        //dispatch(showLoadingIcon())
        const errorMessage = 'Something went wrong.Please try again.'
        // const errorObjectWithMessage = {
        //   ...error,
        //   errorMessage: error.response.data.error
        //     ? error.response.data
        //     : {
        //         error: [errorMessage],
        //       },
        // }
        //dispatch(showBackendError(errorObjectWithMessage.errorMessage))
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
