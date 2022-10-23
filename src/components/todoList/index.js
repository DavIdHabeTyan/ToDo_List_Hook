import React, {useState} from 'react';
import Todo from "../todo";


const TodoList = () => {
   const [inputValue, setInputValue] = useState("");
   const [todos, setTodos] = useState([]);

   const formatTodo = {
      title: inputValue,
      id: Math.random(),
      complete: false,
   }


   function handleInputValue(e) {
      e.preventDefault()
      setInputValue(e.target.value)
   }

   function handleAddTodoButton() {
      setTodos(prev => ([...prev, formatTodo]))
      setInputValue("")
   }

   function handleDeleteTodo (id) {
      setTodos(prev => prev.filter(elem=> elem.id !== id))
   }


   return (
      <div>
         <div className="header" onSubmit={handleInputValue}>
            <h1>Tod Do List</h1>
            <form action="">
            <input
               value={inputValue}
               type="text"
               placeholder={"Write todo"}
               onChange={handleInputValue}
            />
            <button disabled={!inputValue} onClick={handleAddTodoButton}>Add Todo</button>
            </form>
         </div>
         <div className="main">
            {todos.map(elem => <Todo
            key={elem.id}
            deleteTodo={handleDeleteTodo}
            {...elem}
            />)}
         </div>

      </div>
   );
};

export default TodoList;