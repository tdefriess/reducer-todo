import React, { useReducer } from 'react';
import { todoReducer, initialState } from  '../reducers/todoReducer';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleClick = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETED',            
        })
    }

    return (
        <>
            <TodoForm dispatch={dispatch} />
            {state.todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch} />                    
                )
            })}
            <button onClick={handleClick} >Clear Completed</button>
        </>
    )
}

export default TodoList;