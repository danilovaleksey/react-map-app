import  React from 'react';
import { shallow } from 'enzyme';
import {
  findByDataTestAttr,
  checkProps,
} from '../../../../utils';
import AddMark from "./AddMark";

describe('AddMark Component', () => {
  const defaultProps = {
    newMarkName: 'testMark1',
  };

  describe('Checking PropTypes', () => {
    it('Should NOT throw warning', () => {
      const propError = checkProps(AddMark, defaultProps);
      expect(propError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<AddMark {...defaultProps}/>)
    });
    it('Should render component', () => {
      const component = findByDataTestAttr(wrapper, 'addMark');
      expect(component.length).toBe(1);
    });
    it('Should render input', () => {
      const component = findByDataTestAttr(wrapper, 'addInput');
      expect(component.length).toBe(1);
    });
    it('Check value newMarkName in input', () => {
      const input = findByDataTestAttr(wrapper, 'addInput').prop('value');
      expect(input).toEqual('testMark1');
    })
  });
});