import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteasyncToDo,patchasyncToDo } from "../../store/slices/todoSlice";
import style from './TodoList.module.css'

const TodoList = () => {
    const dispatch = useDispatch()
  const { todos } = useSelector((state) => state.todoSlice);
  
  return (
    <div >
      {todos.map((todo) => {
        const complete = () => {
          dispatch(
            patchasyncToDo({
              id: todo.id,
              data: { completed: !todo.completed },
            })
          );
        };
        const remove = (id) => {
          dispatch(deleteasyncToDo(id));
        };
        return (
          <div className={style.box}>
            <input  
              type="checkbox"
              checked={todo.completed}
              onChange={complete}
            />
            <p className={style.font}>{todo.title}</p>
            <button className={style.btn} onClick={() => remove(todo.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
