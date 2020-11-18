import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_EMAIL,
  CHANGE_DATE,
} from "./constant";

export const setFirstName = (text) => ({
  type: CHANGE_FIRST_NAME,
  payload: text,
});

export const setLastName = (text) => ({
  type: CHANGE_LAST_NAME,
  payload: text,
});

export const setEmail = (text) => ({
  type: CHANGE_EMAIL,
  payload: text,
});

export const setDate = (text) => ({
  type: CHANGE_DATE,
  payload: text,
});
