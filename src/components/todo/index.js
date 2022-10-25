import React, {useState} from 'react';
import deleteIcon from "./../../assets/delete.svg"

const Todo = (props) => {
    const {title, id, deleteTodo} = props;


    const [isComplete, setIsComplete] = useState(true)


    return (
        <div>
            <div className={"todo"}>


                <input type="checkbox" onChange={(e) => {

                }}/>

                <p className={"todo_Completed"}>{title}</p>
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