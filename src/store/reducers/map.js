import {
    GET_LIST,
} from '../types/map';

let initialState = {
    markers: [
        {
            id: 1,
            name: '',
        }
    ],
};

export function MapState (state = initialState, action) {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                markers: action.markers
            };
        default:
            return state;
    }
}