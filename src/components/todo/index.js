import React, {useState} from 'react';
import deleteIcon from "./../../assets/delete.svg"

const Todo = (props) => {
    const {title, id, deleteTodo} = props;


    const [isComplete, setIsComplete] = useState(true)

    function handleClick (e) {
        if (e.target.style.textDecoration) {
            e.target.style.removeProperty('text-decoration');
        } else {
            e.target.style.setProperty('text-decoration', 'line-through');
        }

    }

    return (
        <div>
            <div className={"todo"}>
                <input type="checkbox" onChange={(e) => {
                }}/>
                <p onClick={handleClick}
                   className={"todo_Completed"}>{title}</p>
                <img
                    className={"icon"}
                    src={deleteIcon}
                    alt=""
                    onClick={() => deleteTodo(id)}
                />

            </div>

        </div>

    );
};

export default Todo;