import React from 'react';
import GuestComponent from '../client/src/components/GuestComponent';
import { shallow } from 'enzyme';

describe('GuestComponent', () => {
  it('starts with an adult count of 1', () => {
    const wrapper = shallow(<GuestComponent />);
    const adultsState = wrapper.state().adults;
    expect(adultsState).toEqual(1);
  });
});


//use find for actual html