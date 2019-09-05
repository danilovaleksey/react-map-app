import  React from 'react';
import { mount } from 'enzyme';
import {
  findByDataTestAttr,
  checkProps,
} from '../../../../utils';
import List from "./List";

describe('List Component', () => {
  const defaultProps = {
    markers: [
      {geometry: [55, 56], id: 1, markerName: 'mark1' },
      {geometry: [45, 26], id: 2, markerName: 'mark2' },
      {geometry: [15, 76], id: 3, markerName: 'mark3' },
    ],
  };

  describe('Checking PropTypes', () => {
    it('Should NOT throw warning', () => {
      const propError = checkProps(List, defaultProps);
      expect(propError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<List {...defaultProps}/>)
    });
    it('Should render component', () => {
      const component = findByDataTestAttr(wrapper, 'listComponent');
      expect(component.length).toBe(1);
    });
    it('Should render markers, with props', () => {
      const markers = findByDataTestAttr(wrapper, 'markerItem');
      expect(markers.length).toBe(3);
    });
  });
});