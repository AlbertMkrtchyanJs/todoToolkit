import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { postasyncToDo, changeText } from '../../store/slices/todoSlice'

import style from './AddTodo.module.css'

const AddTodo = () => {
  const { text } = useSelector((state) => state.todoSlice);
 const dispatch = useDispatch()
  const handleAdd = () => {
    if(text.trim()) {    
        const item = {
            id: Date.now(),
            title: text,
            completed: false
        };
        dispatch(postasyncToDo(item));
    }
};

  return (
    <div className={style.add}>
      <input
        className={style.inp}
        value={text}
        onChange={(e) => dispatch(changeText(e.target.value))}
      />
      <button className={style.btn} onClick={handleAdd}>+</button>
    </div>
  );
};

export default AddTodo;
