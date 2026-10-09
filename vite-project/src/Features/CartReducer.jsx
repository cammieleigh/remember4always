
const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, action.props]
        case "Remove":
            
        case "Increase":
            const indexI = state.findIndex( p => p.id === action.id)
            state[indexI].quantity += 1
            return [...state]

        case "Decrease":
            const indexD = state.findIndex( p => p.id === action.id)
            state[indexD].quantity -= 1
            return [...state]

        default:
            state;
    }
}

export default CartReducer;