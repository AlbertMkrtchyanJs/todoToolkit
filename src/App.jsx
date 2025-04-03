import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getAsyncTodo} from "./store/slices/todoSlice";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodo());
  }, []);

  return (
    <>
      <AddTodo />
      <TodoList/>
    </>
  );
}

export default App;
