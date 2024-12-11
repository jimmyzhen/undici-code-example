import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../app';

describe('<App />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });

  test('It should contain 2 routes', () => {
    expect(component.find('Route').length).toBe(2);
  });
});
