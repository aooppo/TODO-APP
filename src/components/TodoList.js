import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo, onDelete}) => (
    <ul>
        {
            todos.map(
                todo => 
                    <Todo 
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                        onDelete= {() => onDelete(todo.id)}
                    />
            )
        }
    </ul>    
)

export default TodoList