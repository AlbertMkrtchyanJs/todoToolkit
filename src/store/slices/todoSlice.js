import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/api";
import axios from "axios";

export const getAsyncTodo = createAsyncThunk(
    'asyncTodo',
    async (_,{dispatch}) => {
       const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=30')
        dispatch(addAsync(res.data))
    }
)

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
        ...state.todos,
        { id: Date.now(), title: state.text, completed: false },
      ];
    },
    addAsync(state,action){
        state.todos = action.payload
    }
  },
});

export const { changeText , add ,addAsync} = todoSlice.actions;

export default todoSlice.reducer;
