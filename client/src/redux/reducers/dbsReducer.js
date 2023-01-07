import {
  ADD_DBS_FAIL,
  ADD_DBS_REQUEST,
  ADD_DBS_SUCCESS,
  LIST_DBS_FAIL,
  LIST_DBS_REQUEST,
  LIST_DBS_SUCCESS,
} from "../type";
const initialState = {};
export const addDbReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DBS_REQUEST:
      return {
        loading: true,
      };
    case ADD_DBS_SUCCESS:
      return {
        loading: false,
        db: payload,
      };
    case ADD_DBS_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
export const listDbsReducer = (state = { dbs: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_DBS_REQUEST:
      return {
        loading: true,
      };
    case LIST_DBS_SUCCESS:
      return {
        loading: false,
        dbs: payload,
      };
    case LIST_DBS_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
