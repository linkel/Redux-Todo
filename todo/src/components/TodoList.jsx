import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {console.log(props)}
            <h1>TodoList</h1>
            {props.todos.map(todo => {
                return <Todo delete={props.delete} onClick={() => props.toggle(todo.id)} key={todo.id} id={todo.id} value={todo.value} completed={todo.completed}></Todo>
                }
            )}
        </div>
    )
}

export default TodoList;