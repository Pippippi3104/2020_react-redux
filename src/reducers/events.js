import { READ_EVENTS } from "../actions";

// eslint-disable-next-line
export default (state = {}, actions) => {
    switch (actions.type) {
        case READ_EVENTS:
            return state
        default:
            return state
    }
}