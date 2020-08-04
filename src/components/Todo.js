import React from 'react';

export default function Todo(props) {    
    return (
        <h3 onClick={() => props.dispatch({
            type: 'TOGGLE_COMPLETED',            
            payload: props.todo.id
        })} style={props.todo.completed === true ?
            {color: 'red', textDecoration: 'line-through'} :
            {}
        }>{props.todo.item}</h3>
    )
}