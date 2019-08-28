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
} from "../types/map";
import {
  setMapCenter,
  setNewMarkName,
  addNewMark,
  addNewPolylineGeometry,
  cleanAddMarkInput,
  changeMarkGeometry,
  changePolylineGeometry,
  deleteMarker,
  deletePolylineGeometry,
  updateMarkers,

  createNewMark,
  changeMarkPosition,
  deleteMark,
} from "./mapActions";

import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk";

const middlwares = [thunk];
const mockStore = configureMockStore(middlwares);

describe('Map Actions', () => {
  it('setMapCenter', () => {
    const event = {
      originalEvent: {
        newCenter: [55, 56]
      }
    };
    const expectedAction = {
      type: SET_MAP_CENTER,
      mapCenter: event.originalEvent.newCenter
    };
    expect(setMapCenter(event)).toEqual(expectedAction);
  });
  it('setNewMarkName', () => {
    const name = 'mark1';
    const expectedAction = {
      type: SET_NEW_MARK_NAME,
      newMarkName: name
    };
    expect(setNewMarkName(name)).toEqual(expectedAction);
  });
  it('addNewMark', () => {
    const expectedAction = {
      type: ADD_NEW_MARK,
    };
    expect(addNewMark()).toEqual(expectedAction);
  });
  it('addNewPolylineGeometry', () => {
    const expectedAction = {
      type: ADD_NEW_POLYLINE_GEOMETRY,
    };
    expect(addNewPolylineGeometry()).toEqual(expectedAction);
  });
  it('cleanAddMarkInput', () => {
    const expectedAction = {
      type: CLEAN_ADD_MARK_INPUT,
    };
    expect(cleanAddMarkInput()).toEqual(expectedAction);
  });
  it('changeMarkGeometry', () => {
    const geometry = [51, 32];
    const index = 3;
    const expectedAction = {
      type: CHANGE_MARK_GEOMETRY,
      geometry: geometry,
      index: index,
    };
    expect(changeMarkGeometry(geometry, index)).toEqual(expectedAction);
  });
  it('changePolylineGeometry', () => {
    const geometry = [51, 32];
    const index = 3;
    const expectedAction = {
      type: CHANGE_POLYLINE_GEOMETRY,
      geometry: geometry,
      index: index,
    };
    expect(changePolylineGeometry(geometry, index)).toEqual(expectedAction);
  });
  it('deleteMarker', () => {
    const index = 3;
    const expectedAction = {
      type: DELETE_MARK,
      index: index,
    };
    expect(deleteMarker(index)).toEqual(expectedAction);
  });
  it('deletePolylineGeometry', () => {
    const index = 3;
    const expectedAction = {
      type: DELETE_POLYLINE_GEOMETRY,
      index: index,
    };
    expect(deletePolylineGeometry(index)).toEqual(expectedAction);
  });
  it('updateMarkers', () => {
    const markers = [{geometry: [55, 56], id: 1, markerName: 'mark1' }];
    const expectedAction = {
      type: UPDATE_MARKERS,
      markers: markers,
    };
    expect(updateMarkers(markers)).toEqual(expectedAction);
  });
  it('createNewMark', async () => {
    const store = mockStore();
    await store.dispatch(createNewMark());
    const actions = store.getActions();
    expect(actions[0]).toEqual({type: ADD_NEW_MARK,});
    expect(actions[1]).toEqual({type: ADD_NEW_POLYLINE_GEOMETRY,});
    expect(actions[2]).toEqual({type: CLEAN_ADD_MARK_INPUT,});
  });
  it('changeMarkPosition', async () => {
    const geometry = [52,65];
    const index = 5;
    const store = mockStore();
    await store.dispatch(changeMarkPosition(geometry, index));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: CHANGE_MARK_GEOMETRY,
      geometry: geometry,
      index: index,
    });
    expect(actions[1]).toEqual({
      type: CHANGE_POLYLINE_GEOMETRY,
      geometry: geometry,
      index: index,
    });
  });
  it('deleteMark', async () => {
    const index = 5;
    const store = mockStore();
    await store.dispatch(deleteMark( index ));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: DELETE_MARK,
      index: index,
    });
    expect(actions[1]).toEqual({
      type: DELETE_POLYLINE_GEOMETRY,
      index: index,
    });
  });
});