import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            <h1>TodoList</h1>
            {props.todos.map(todo => <Todo key={Math.random()} value={todo.value} completed={todo.completed}></Todo>)}
        </div>
    )
}

export default TodoList;