import { RECEIVE_USERS, ADD_USER, ASSIGN_ANSWER, ASSIGN_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  const { authedUser, qid, answer } = action;
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case ADD_USER:
      const { id, name, password, avatarURL } = action.user;
      return {
        ...state,
        [id]: {
          id,
          name,
          password,
          avatarURL,
          answers: {},
          questions: [],
        },
      };
    case ASSIGN_ANSWER:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: Object.assign(state[authedUser].answers, { [qid]: answer }),
        },
      };
    case ASSIGN_QUESTION:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat(qid),
        },
      };
    default:
      return state;
  }
}
