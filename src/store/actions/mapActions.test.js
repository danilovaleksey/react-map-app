import {
  ADD_NEW_MARK,
} from "../types/map";
import {
  addNewMark,
} from "./mapActions";

describe('Map Actions', () => {
  it('addNewMark', () => {
    expect(addNewMark()).toEqual({
      type: ADD_NEW_MARK,
    });
  });
});