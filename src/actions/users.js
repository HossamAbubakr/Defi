import { setAuthedUser } from "../actions/authedUser";
import { saveUser } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_USERS = " RECEIVE_USERS";
export const ADD_USER = "ADD_USER";
export const ASSIGN_ANSWER = "ASSIGN_ANSWER";
export const ASSIGN_QUESTION = "ASSIGN_QUESTION";

export function assignAnswer({ authedUser, qid, answer }) {
  return {
    type: ASSIGN_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function assignQuestion(authedUser, qid) {
  return {
    type: ASSIGN_QUESTION,
    authedUser,
    qid,
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleAddUser(id, name, password, avatarURL) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(addUser({ id, name, password, avatarURL }));
    dispatch(setAuthedUser(id));
    return saveUser({ id, name, password, avatarURL }).then(() => dispatch(hideLoading()));
  };
}
