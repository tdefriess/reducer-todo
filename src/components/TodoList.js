import React, { useReducer } from 'react';
import { todoReducer, initialState } from  '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            {state.todos.map(todo => {
                return (
                    <h3>{todo.item}</h3>                    
                )
            })}
        </>
    )
}

export default TodoList;