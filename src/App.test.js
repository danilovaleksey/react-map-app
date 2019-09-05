import React from 'react';
import {
  findByDataTestAttr,
} from './utils';
import { shallow } from 'enzyme';
import App from "./App";

describe('App Component', () => {
  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('Should render a component', () => {
      const app = findByDataTestAttr(wrapper, 'appComponent');
      expect(app.length).toBe(1);
    });
    it('Should render a InterfaceContainer component', () => {
      const InterfaceContainer = findByDataTestAttr(wrapper, 'InterfaceContainer');
      expect(InterfaceContainer.length).toBe(1);
    });
    it('Should render a MapContainer component', () => {
      const MapContainer = findByDataTestAttr(wrapper, 'MapContainer');
      expect(MapContainer.length).toBe(1);
    });
  });
});
