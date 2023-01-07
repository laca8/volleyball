import {
  ADD_PLAYER_FAIL,
  ADD_PLAYER_REQUEST,
  ADD_PLAYER_SUCCESS,
  LIST_PLAYERS_FAIL,
  LIST_PLAYERS_REQUEST,
  LIST_PLAYERS_SUCCESS,
} from "../type";
import axios from "axios";
export const addPlayerAction =
  (name, club, number, position) => async (dispatch) => {
    dispatch({
      type: ADD_PLAYER_REQUEST,
    });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/teams",
        { name, club, number, position },
        config
      );
      dispatch({
        type: ADD_PLAYER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PLAYER_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.msg,
      });
    }
  };
export const listPlayersAction = () => async (dispatch) => {
  dispatch({
    type: LIST_PLAYERS_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/teams");
    dispatch({
      type: LIST_PLAYERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_PLAYERS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};
