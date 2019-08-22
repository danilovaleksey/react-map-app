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
} from "../types/map";

// ACTIONS
const setMapCenter = (event) => ({
    type: SET_MAP_CENTER,
    mapCenter: event.originalEvent.newCenter
});

const setNewMarkName = (name) => ({
    type: SET_NEW_MARK_NAME,
    newMarkName: name
});

const addNewMark = () => ({
    type: ADD_NEW_MARK,
});

const addNewPolylineGeometry = () => ({
    type: ADD_NEW_POLYLINE_GEOMETRY
});

const cleanAddMarkInput = () => ({
    type: CLEAN_ADD_MARK_INPUT
});
const changeMarkGeometry = (geometry, index) => ({
    type: CHANGE_MARK_GEOMETRY,
    geometry,
    index
});
const changePolylineGeometry = (geometry, index) => ({
    type: CHANGE_POLYLINE_GEOMETRY,
    geometry,
    index
});
const deleteMarker = (index) => ({
    type: DELETE_MARK,
    index
});
const deletePolylineGeometry = (index) => ({
    type: DELETE_POLYLINE_GEOMETRY,
    index
});

// THUNK FUNCTIONS
const createNewMark = () => {
    return (dispatch) => {
        dispatch(addNewMark());
        dispatch(addNewPolylineGeometry());
        dispatch(cleanAddMarkInput());
    }
};
const changeMarkPosition = (geometry, index) => {
    return (dispatch) => {
        dispatch(changeMarkGeometry(geometry, index));
        dispatch(changePolylineGeometry(geometry, index));
    }
};
const deleteMark = (index) => {
    return (dispatch) => {
        dispatch(deleteMarker(index));
        dispatch(deletePolylineGeometry(index));
    }
};


export {
    setMapCenter,
    setNewMarkName,
    createNewMark,
    changeMarkPosition,
    deleteMark,
};