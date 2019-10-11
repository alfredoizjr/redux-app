const initialState = {
    appoiment: []
}

export default function(state = initialState ,action) {

    switch (action.type) {
        case 'ADD_APPOIMENT':
            
            return {
                ...state,
                appoiment: [...state.appoiment, action.payload]
            }
            case 'REMOVE_APPOIMENT':
            
            return {
                ...state,
                appoiment: state.appoiment.filter(appoiment => appoiment.id !== action.payload)
            }
    
        default:
            return state;
    }

}