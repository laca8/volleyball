import {
  ADD_PLAYER_FAIL,
  ADD_PLAYER_REQUEST,
  ADD_PLAYER_SUCCESS,
  LIST_PLAYERS_FAIL,
  LIST_PLAYERS_REQUEST,
  LIST_PLAYERS_SUCCESS,
} from "../type";
export const addPlayerReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PLAYER_REQUEST:
      return {
        loading: true,
      };
    case ADD_PLAYER_SUCCESS:
      return {
        loading: false,
        player: payload,
      };
    case ADD_PLAYER_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listPlayersReducer = (state = { players: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_PLAYERS_REQUEST:
      return {
        loading: true,
      };
    case LIST_PLAYERS_SUCCESS:
      return {
        loading: false,
        players: payload,
      };
    case LIST_PLAYERS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
