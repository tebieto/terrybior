import { cartActionTypes } from './cart.types'

const INITIAL_STATE = {
    showCartDropdown: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.SHOW_DROP_DOWN:
            return {
                ...state,
                showCartDropdown: !state.showCartDropdown
            }
        default:
            return state
    }
}

export default cartReducer;