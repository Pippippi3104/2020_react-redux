import _ from "lodash";
import { 
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENTS,
    DELETE_EVENTS,
 } from "../actions";

// eslint-disable-next-line
export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENTS:
            const data = action.response.data;
            return {...events, [data.id]: data };
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