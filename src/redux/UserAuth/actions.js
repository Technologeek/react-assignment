import {
  USER_LOGGEDIN,
  REGISTER_NEW_USER,
  REGISTER_NEW_USER_DATABSE,
  LOGIN_NEW_USER_DATABSE,
} from './constants'
import firebase from 'firebase/app'
import axios from 'axios'
export function loginUser({ email, password }) {
  return (dispatch, getState) => {
    //const firebase = getFirebase()
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          // dispatch(showLoadingIcon())
          console.log(response.user)
          dispatch({
            type: USER_LOGGEDIN,
            payload: response.user,
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
}
export function registerNewUser({ email, password }) {
  return (dispatch, getState, { api, setAuthorizationToken }) => {
    //console.log(dispatch, getState, api, setAuthorizationToken);
    //dispatch(showLoadingIcon());
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        //dispatch(showLoadingIcon());
        console.log(response)
        dispatch({
          type: REGISTER_NEW_USER,
          payload: response.user,
        })
        //dispatch(resetErrors());
      })
      .catch(error => {
        // dispatch(showLoadingIcon());
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

export function registerNewUserDatabse(userData) {
  const url = `${process.env.REACT_APP_JSON_BASE_URL}users`
  return (dispatch, getState) => {
    //console.log(dispatch, getState, api, setAuthorizationToken);
    //dispatch(showLoadingIcon());
    return axios
      .post(url, userData)
      .then(response => {
        console.log(response.data.id)
        //dispatch(showLoadingIcon());

        dispatch({
          type: REGISTER_NEW_USER_DATABSE,
          payload: response.data.id,
        })
        //dispatch(resetErrors());
      })
      .catch(error => {
        // dispatch(showLoadingIcon());
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
    //console.log(dispatch, getState, api, setAuthorizationToken);
    //dispatch(showLoadingIcon());
    return axios
      .get(url)
      .then(response => {
        if (response.data)
          //dispatch(showLoadingIcon());
          dispatch({
            type: LOGIN_NEW_USER_DATABSE,
            payload: response.data[0].id,
          })
        //dispatch(resetErrors());
      })
      .catch(error => {
        // dispatch(showLoadingIcon());
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
