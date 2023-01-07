import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addUserReducer,
  listUsersReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducer";
import { addDbReducer, listDbsReducer } from "./reducers/dbsReducer";
import { addPlayerReducer, listPlayersReducer } from "./reducers/team";
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  addDbs: addDbReducer,
  listDbs: listDbsReducer,
  addUser: addUserReducer,
  listUsers: listUsersReducer,
  listPlayers: listPlayersReducer,
  addPlayer: addPlayerReducer,
});

const userInfoFormStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const middleware = [thunk];
const initialState = {
  userLogin: { userInfo: userInfoFormStorage },
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
