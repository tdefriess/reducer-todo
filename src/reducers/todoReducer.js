export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
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
            console.log(state.todos);
            return {
                ...state,
                todos: [...state.todos, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            }
    }
}