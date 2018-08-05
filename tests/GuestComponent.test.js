import React from 'react';
import GuestComponent from '../client/src/components/GuestComponent';
import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<GuestComponent />);

describe('Guest Component State Tests', () => {
  it('should start with correct state key-value pairs', () => {
    const obj = {
      open: false,
      adults: 1,
      children: 0,
      infants: 0,
    };
    expect(wrapper.state()).toEqual(obj);
  });
});

describe('Guest Component Render Tests', () => {
  it('should render without throwing error', () => {
    expect((wrapper).find('.guestDropdownMain').exists()).toBe(true);
  });

  it('should render three drowDown items', () => {
    expect((wrapper).find('.dropdownItem').length).toEqual(3);
  });
});

describe('Guest Component Event Tests', () => {
  it('should respond to change event and change the state of the Guest Component', () => {
    wrapper.find('.dropDownItems').simulate('click');
    expect(wrapper.state().open).toBe(true);
  });
});
