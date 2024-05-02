//http://localhost:5173/todos

import axios from "axios";
import TodoComponenet from "../components/TodoComponenet";

const BASE_REST_API_URL = "http://localhost:8080/api/todos";

export const getAllTodos = () => {
  return axios.get(BASE_REST_API_URL);
};

export const saveTodo = (todo) => {
  axios.post(BASE_REST_API_URL, todo);
};

export const getTodo = (id) => {
  axios.get(BASE_REST_API_URL + "/" + id);
};

export const updateTodo = (id, todo) => {
  axios.put(BASE_REST_API_URL + "/" + id, todo);
};

export const deleteTodo = (id) => {
  axios.delete(BASE_REST_API_URL + "/" + id);
};

export const completeTodo = (id) => {
  axios.patch(BASE_REST_API_URL + "/" + id + "/complete");
};

export const incompletedTodo = (id) => {
  axios.patch(BASE_REST_API_URL + "/" + id + "/incomplete");
};