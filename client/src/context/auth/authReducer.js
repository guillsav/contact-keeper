import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types"

export default (state, action) => {
  switch (action.type) {
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      }
    default:
      return state
  }
}
