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
    <div className="box">
      <AddTodo />
      <TodoList/>
    </div>
  );
}

export default App;
