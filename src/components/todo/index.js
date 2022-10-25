import React, {useState} from 'react';
import deleteIcon from "./../../assets/delete.svg"

const Todo = (props) => {
    const {title, id, deleteTodo} = props;


    const [isComplete, setIsComplete] = useState(false)


    function handleChecked (e) {
        setIsComplete(e.target.checked)
    }

   // function handleDeleteIsCompleted(isComplete) {
   //     isComplete.filter(checked => )
   //
   // }

    console.log(isComplete)
    return (
        <div>
            <div className={"todo"}>

                <input type="checkbox" checked={props.isCompleted} onChange={handleChecked} />

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