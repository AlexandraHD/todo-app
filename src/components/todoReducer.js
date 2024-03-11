export const todoReducer = ( initialState=[], action ) => {
    switch (action.type) {
        case 'Add todo':
            return [ ...initialState, action.payload ];  //El payload tiene el nuevo TODO
        
        case 'Remove todo':
            return initialState.filter( todo => todo.id !== action.payload );
        
        case 'Toggle todo':
            return initialState.map( todo => {
                if(todo.id === action.payload) {    //payload es el id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
    
        default:
            return initialState;
    }
}