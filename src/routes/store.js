import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

const store = createStore(toDos.reducer);

export const { add, remove } = toDos.actions;

export default store;
