import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { add, getAsyncTodo, changeText } from "./store/slices/todoSlice";
import { useEffect } from "react";

function App() {

  const { text, todos } = useSelector((state) => state.todoSlice);
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAsyncTodo())
  },[])

  return (
    <>
      <input
        value={text}
        onChange={(e) => dispatch(changeText(e.target.value))}
      />
      <button onClick={() => dispatch(add())}>+</button>

      {todos.map((todo) => {
        return <p>{todo.title}</p>;
      })}
    </>
  );
}

export default App;
