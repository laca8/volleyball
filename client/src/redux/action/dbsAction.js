import axios from "axios";
import {
  ADD_DBS_FAIL,
  ADD_DBS_REQUEST,
  ADD_DBS_SUCCESS,
  LIST_DBS_FAIL,
  LIST_DBS_REQUEST,
  LIST_DBS_SUCCESS,
} from "../type";
export const addDbsAction = (newDb) => async (dispatch, getState) => {
  dispatch({
    type: ADD_DBS_REQUEST,
  });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: userInfo.token,
      },
    };
    const { data } = await axios.post("/api/dbs", newDb, config);
    dispatch({
      type: ADD_DBS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_DBS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const listDbsUserAction = () => async (dispatch, getState) => {
  dispatch({
    type: LIST_DBS_REQUEST,
  });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        token: userInfo.token,
      },
    };
    const { data } = await axios.get("/api/dbs", config);
    dispatch({
      type: LIST_DBS_SUCCESS,
      payload: data,
    });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: LIST_DBS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};
