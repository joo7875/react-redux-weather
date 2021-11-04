import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data ]); // concat doesn't mutate original state, create new array
            return [ action.payload.data, ...state ]; // same as above
    }
    
    return state;
}