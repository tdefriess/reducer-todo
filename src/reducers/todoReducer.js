export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: true,
            id: 0
        },
        {
            item: 'Complete afternoon project',
            completed: false,
            id: 1
        }
    ]
}

export const todoReducer = (state, action ) => {
    switch (action.type) {
        case 'ADD_ITEM':            
            return {
                ...state,
                todos: [...state.todos, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            }
        case 'TOGGLE_COMPLETED':
            let newTodos = state.todos.map(item => {
                if (item.id === action.payload){                    
                    return {
                        item: item.item,
                        completed: !item.completed,
                        id: item.id
                    }
                } else return item
            });            
            return {
                ...state,
                todos: newTodos
            }
        case 'CLEAR_COMPLETED':
            let filteredTodos = state.todos.filter(item => item.completed !== true)            
            return {
                ...state,
                todos: filteredTodos
            }
        default:
            return state;
    }
}