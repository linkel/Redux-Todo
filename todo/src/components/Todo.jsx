import React from 'react';

const Todo = (props) => {
    return (
        <div onClick={props.onClick} style={{ textDecoration: props.completed ? 'line-through' : 'none'}}>{props.value}
            <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
    )
}

export default Todo;