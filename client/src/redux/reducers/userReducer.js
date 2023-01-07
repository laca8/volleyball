import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  ADD_USER_REQUEST,
  LIST_USERS_FAIL,
  LIST_USERS_SUCCESS,
  LIST_USERS_REQUEST,
} from "../type";
const initialState = {};
export const userLoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const userRegisterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addUserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER_REQUEST:
      return {
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        loading: false,
        user: payload,
      };
    case ADD_USER_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listUsersReducer = (state = { users: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_USERS_REQUEST:
      return {
        loading: true,
      };
    case LIST_USERS_SUCCESS:
      return {
        loading: false,
        users: payload,
      };
    case LIST_USERS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
