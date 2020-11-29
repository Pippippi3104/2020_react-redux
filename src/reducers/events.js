import _ from "lodash";
import { 
    READ_EVENTS,
    READ_EVENT,
    DELETE_EVENTS,
 } from "../actions";

// eslint-disable-next-line
export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENT:
            const data = action.response.data;
            console.log(action.response.data);
            return { ...events, [data.id]: data };
        case READ_EVENTS:
            return _.mapKeys(action.response.data, "id");
        case DELETE_EVENTS:
            console.log(action.id);
            delete events[action.id];
            return { ...events };
        default:
            return events;
    }
}