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

    function handleDeleteTodo(id) {
        setTodos(prev => prev.filter(elem => elem.id !== id))
    }

    return (
        <div>
            <div className="header">
                <h1>Tod Do List</h1>
                <form action=""
                      onSubmit={handleInputValue}
                >
                    <input
                        value={inputValue}
                        type="text"
                        placeholder={"Write todo"}
                        onChange={handleInputValue}
                    />
                    <button disabled={!inputValue} onClick={handleAddTodoButton}>Add Todo</button>
                </form>
                <br/>

            </div>
            <div className="main">
                {todos.map(elem => <Todo
                        key={elem.id}
                        deleteTodo={handleDeleteTodo}
                        {...elem}
                    /> )
                }
            </div>
            <button>Clear Completed</button>
        </div>
    );
};

export default TodoList;