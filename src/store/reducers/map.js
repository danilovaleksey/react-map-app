import {
    GET_LIST,
} from '../types/map';

let initialState = {
    list: [],
};

export function MapState (state = initialState, action) {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                list: action.list
            };
        default:
            return state;
    }
}