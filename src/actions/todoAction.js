import { ADD_TODO, CHECK_TODO } from "../constants/actionType";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: content,
});
export const checkTodo = (content) => ({
  type: CHECK_TODO,
  payload: content,
});
