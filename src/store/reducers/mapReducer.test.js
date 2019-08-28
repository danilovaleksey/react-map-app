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
import reducer, {initialState} from "./mapReducer";


describe('map reducer', () => {
  it(SET_MAP_CENTER, ()=> {
    const action = {
      type: SET_MAP_CENTER,
      mapCenter: [55, 56]
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      mapCenter: action.mapCenter
    });
  });
  it(SET_NEW_MARK_NAME, ()=> {
    const action = {
      type: SET_NEW_MARK_NAME,
      newMarkName: 'mark name'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      newMarkName: action.newMarkName
    });
  });
  it(ADD_NEW_MARK, ()=> {
    const stateBefore = {
      ...initialState,
      newMarkName: 'mark1',
      mapCenter: [55, 56],
    };
    const action = {
      type: ADD_NEW_MARK,
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      markers: [...stateBefore.markers, {geometry: [55, 56], id: 1, markerName: 'mark1' }]
    });
  });
  it(ADD_NEW_POLYLINE_GEOMETRY, ()=> {
    const action = {
      type: ADD_NEW_POLYLINE_GEOMETRY,
      mapCenter: initialState.mapCenter
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      polylineGeometry: [...initialState.polylineGeometry, action.mapCenter]
    });
  });
  it(CLEAN_ADD_MARK_INPUT, ()=> {
    const action = {
      type: CLEAN_ADD_MARK_INPUT,
      newMarkName: ''
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      newMarkName: action.newMarkName
    });
  });
  it(CHANGE_MARK_GEOMETRY, ()=> {
    const stateBefore = {
      ...initialState,
      markers: [{geometry: [55.751574, 37.573856], id: 1, markerName: 'mark 1'} ]
    };
    const action = {
      type: CHANGE_MARK_GEOMETRY,
      index: 0,
      geometry: [55, 56]
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      markers: [ {geometry: action.geometry, id: 1, markerName: 'mark 1'} ]
    });
  });
  it(CHANGE_POLYLINE_GEOMETRY, ()=> {
    const stateBefore = {
      ...initialState,
      polylineGeometry: [[55, 56]]
    };
    const action = {
      type: CHANGE_POLYLINE_GEOMETRY,
      index: 0,
      geometry: [55, 56]
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      polylineGeometry: [ action.geometry ]
    });
  });
  it(DELETE_MARK, ()=> {
    const stateBefore = {
      ...initialState,
      markers: [
        {geometry: [55.751574, 37.573856], id: 1, markerName: 'mark 1'},
        {geometry: [52.751574, 34.573856], id: 2, markerName: 'mark 2'}
      ]
    };
    const action = {
      type: DELETE_MARK,
      index: 1,
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      markers: [{geometry: [55.751574, 37.573856], id: 1, markerName: 'mark 1'}]
    });
  });

  it(DELETE_POLYLINE_GEOMETRY, ()=> {
    const stateBefore = {
      ...initialState,
      polylineGeometry: [[55, 56], [52, 43]]
    };
    const action = {
      type: DELETE_POLYLINE_GEOMETRY,
      index: 1,
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      polylineGeometry: [[55, 56]]
    });
  });
  it(UPDATE_MARKERS, ()=> {
    const action = {
      type: UPDATE_MARKERS,
      markers: [1, 2, 3]
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      markers: [...action.markers]
    });
  });
});