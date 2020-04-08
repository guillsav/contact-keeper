import React, { useReducer } from "react"

import AuthContext from "./authContext"
import authReducer from "./authReducer"
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types"

const AuthState = (props) => {
  const intialState = {
    token: localStorage.getItem("token"),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null,
  }

  const [state, dispatch] = useReducer(authReducer, intialState)

  // Load User

  // Register User

  // Login User

  // Logout

  // clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        clearErrors,
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
