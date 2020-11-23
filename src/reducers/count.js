import { INCREMENT, DECREMENT } from "../actions";

const initialState = { value: 0};

// eslint-disable-next-line
export default (state = initialState, actions) => {
    switch (actions.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value:  state.value - 1 }
        default:
            return state
    }
}