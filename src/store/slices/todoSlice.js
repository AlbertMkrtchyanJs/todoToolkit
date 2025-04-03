import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/api";

export const getAsyncTodo = createAsyncThunk(
  "asyncTodo",
  async (_, { dispatch }) => {
    const res = await API.getTodo();
    dispatch(addAsync(res.data));
  }
);

export const postasyncToDo = createAsyncThunk(
  "postasyncToDo",
  async (newItem, { dispatch }) => {
    const res = await API.postTodo(newItem);
    dispatch(add(res.data));
  }
);

export const patchasyncToDo = createAsyncThunk(
  "patchasyncToDo",
  async ({ id, data }, { dispatch }) => {
    const res = await API.patchTodo(id, data);
    dispatch(updateAsync({ id, data: res.data }));
  }
);

export const deleteasyncToDo = createAsyncThunk(
  "deleteasyncToDo",
  async (id, { dispatch }) => {
    await API.deleteTodo(id);
    dispatch(deleteAsync(id));
  }
);

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    text: "",
    todos: [],
  },
  reducers: {
    changeText(state, action) {
      state.text = action.payload;
    },
    add(state) {
      state.todos = [
          { id: Date.now(), title: state.text, completed: false },
        ...state.todos,
        state.text = ''
      ];
    },
    addAsync(state, action) {
      state.todos = action.payload;
    },
    updateAsync(state, action) {
      const { id, data } = action.payload;

      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...data } : todo
      );
    },
    deleteAsync(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { changeText, add, addAsync, updateAsync, deleteAsync} = todoSlice.actions;

export default todoSlice.reducer;
