import _ from "lodash";
import { READ_EVENTS } from "../actions";

// eslint-disable-next-line
export default (state = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            console.log(action.response.data);
            console.log(_.mapKeys(action.response.data, "id"));
            return state
        default:
            return state
    }
}