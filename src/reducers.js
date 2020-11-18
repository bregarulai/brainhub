import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_EMAIL,
  CHANGE_DATE,
} from "./constant";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  date: "",
};

export const formFields = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME:
      return Object.assign({}, state, { firstName: action.payload });

    case CHANGE_LAST_NAME:
      return Object.assign({}, state, { lastName: action.payload });

    case CHANGE_EMAIL:
      return Object.assign({}, state, { email: action.payload });

    case CHANGE_DATE:
      return Object.assign({}, state, { date: action.payload });

    default:
      return state;
  }
};
