import {
    SET_MAP_CENTER,
    SET_NEW_MARK_NAME,
    ADD_NEW_MARK,
    ADD_NEW_POLYLINE_GEOMETRY,
    CLEAN_ADD_MARK_INPUT,
} from '../types/map';

let initialState = {
    markers: [],

    mapCenter: [55.751574, 37.573856],
    newMarkName: '',

    polylineGeometry: []
};

export function MapState (state = initialState, action) {
    switch (action.type) {
        case SET_MAP_CENTER:
            return {
                ...state,
                mapCenter: action.mapCenter
            };
        case SET_NEW_MARK_NAME:
            return {
                ...state,
                newMarkName: action.newMarkName
            };
        case ADD_NEW_MARK:
            let name = state.newMarkName;
            let geometry = state.mapCenter;
            return {
                ...state,
                markers: [...state.markers,{markerName: name, geometry: geometry}],
            };
        case ADD_NEW_POLYLINE_GEOMETRY:
            let mapCenter = state.mapCenter;
            return {
                ...state,
                polylineGeometry: [...state.polylineGeometry, mapCenter]
            };
        case CLEAN_ADD_MARK_INPUT:
            return {
                ...state,
                newMarkName: '',
            };
        default:
            return state;
    }
}