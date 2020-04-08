import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types"

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token)
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
      }
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem("token")
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: true,
        error: action.payload,
      }
    case LOGOUT:
      localStorage.removeItem("token")
      return {
        ...state,
        token: null,
        user: null,
        loading: true,
        isAuthenticated: false,
      }
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuthenticated: true,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
