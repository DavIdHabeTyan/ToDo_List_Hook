import React, {useState} from 'react';
import Todo from "../todo";

import {SearchInput} from "./../todo/button.js"


const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [inputSearchValue, setInputSearchValue] = useState("")

    const formatTodo = {
        title: inputValue,
        id: Math.random(),
        complete: false,
    }

    function handleInputValue(e) {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    function handleSearchList(e) {
        setInputSearchValue(e.target.value)
        if (inputSearchValue.length >= 2) {
            setTodos(prev => prev.filter(elem => elem.title.include(inputSearchValue)))
        }
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

                <SearchInput handleSearchList={handleSearchList}/>

            </div>
            <div className="main">

                {  todos.filter(elem => elem.title.includes(inputSearchValue))
                    .map(elem => <Todo
                        key={elem.id}
                        deleteTodo={handleDeleteTodo}
                        {...elem}
                    /> )

                }
                {/*{todos.map(elem => <Todo*/}
                {/*    key={elem.id}*/}
                {/*    deleteTodo={handleDeleteTodo}*/}
                {/*    {...elem}*/}
                {/*/>)}*/}
            </div>
        </div>
    );
};

export default TodoList;