import React, {useState} from 'react';
import deleteIcon from "./../../assets/delete.svg"

const Todo = (props) => {

   const {title, id, deleteTodo,complete } = props;

   const [isComplete, setIsComplete] = useState(true)


   function handleTodoCompleted(e) {
      if(e.target.style.textDecoration) {
         e.target.style.removeProperty('text-decoration')
      }else {
         e.target.style.setProperty('text-decoration', "line-through")
      }
      setIsComplete(false)
   }

   console.log(isComplete, "isComplete")

   return (

      <div className={"todo"}>

        <p
           onClick={handleTodoCompleted}
           className={"todo_Completed"}>{title}</p>
         <img
            className={"icon"}
            src={deleteIcon}
            alt=""
            onClick={() => deleteTodo(id)}
         />
      </div>
   );
};

export default Todo;