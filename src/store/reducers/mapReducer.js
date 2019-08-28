import {
    SET_MAP_CENTER,
    SET_NEW_MARK_NAME,
    ADD_NEW_MARK,
    ADD_NEW_POLYLINE_GEOMETRY,
    CLEAN_ADD_MARK_INPUT,
    CHANGE_MARK_GEOMETRY,
    CHANGE_POLYLINE_GEOMETRY,
    DELETE_MARK,
    DELETE_POLYLINE_GEOMETRY,
    UPDATE_MARKERS,
} from '../types/map';

export const initialState = {
    // markers: {id: 1, markerName: 'Name', geometry: [55, 54]}
    markers: [],

    // properties to create new mark
    mapCenter: [55.751574, 37.573856],
    newMarkName: '',

    // geometry to create polylines
    polylineGeometry: []
};

export default function MapState (state = initialState, action) {
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
        case ADD_NEW_MARK: {
            let name = state.newMarkName;
            let geometry = state.mapCenter;
            let id = 1;
            if (state.markers.length !== 0) {
                state.markers.map((marker) => {
                    if (marker.id >= id) {
                        id = marker.id;
                    }
                    return null;
                });
                id += 1;
            }
            return {
                ...state,
                markers: [...state.markers,{id: id, markerName: name, geometry: geometry}],
            };
        }
        case ADD_NEW_POLYLINE_GEOMETRY: {
            let mapCenter = state.mapCenter;
            return {
                ...state,
                polylineGeometry: [...state.polylineGeometry, mapCenter]
            };
        }
        case CLEAN_ADD_MARK_INPUT:
            return {
                ...state,
                newMarkName: '',
            };
        case CHANGE_MARK_GEOMETRY: {
            let newArray = [...state.markers];
            newArray[action.index].geometry = action.geometry;
            return {
                ...state,
                markers: newArray,
            };
        }
        case CHANGE_POLYLINE_GEOMETRY: {
            let newArray = [...state.polylineGeometry];
            newArray[action.index] = action.geometry;
            return {
                ...state,
                polylineGeometry: newArray,
            };
        }
        case DELETE_MARK: {
            let newArray = [...state.markers];
            newArray.splice(action.index, 1);
            return {
                ...state,
                markers: newArray,
            };
        }
        case DELETE_POLYLINE_GEOMETRY: {
            let newArray = [...state.polylineGeometry];
            newArray.splice(action.index, 1);
            return {
                ...state,
                polylineGeometry: newArray,
            };
        }
        case UPDATE_MARKERS: {
            return {
                ...state,
                markers: action.markers,
            };
        }

        default:
            return state;
    }
}