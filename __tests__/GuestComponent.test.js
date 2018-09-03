import React from 'react';
import GuestComponent from '../client/src/components/GuestComponent';
import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<GuestComponent />);

describe('Guest Component - State Tests', () => {
  it('should start with correct state', () => {
    const obj = {
      open: false,
      adults: 1,
      children: 0,
      infants: 0,
    };
    expect(wrapper.state()).toEqual(obj);
  });
});

describe('Guest Component - Render Tests', () => {
  it('should render without throwing error', () => {
    expect((wrapper).find('.guestDropdownMain').exists()).toBe(true);
  });

  it('should render three drowDown items', () => {
    expect((wrapper).find('.dropdownItem').length).toEqual(3);
  });
});

describe('Guest Component - Event Tests', () => {
  it('should respond to click event and change the state of state().open', () => {
    wrapper.find('.dropDownItems').simulate('click');
    expect(wrapper.state().open).toBe(true);
  });

  it('should not change state when clicking subtract button after initial render', () => {
    wrapper.find('.subtractBtn').simulate('click');
    expect(wrapper.state().adults).toEqual(1);
    expect(wrapper.state().children).toEqual(0);
    expect(wrapper.state().infants).toEqual(0);
  });

  it('should change state when clicking add button after initial render', () => {
    wrapper.find('.addBtn').simulate('click');
    expect(wrapper.state().adults).toEqual(2);
    expect(wrapper.state().children).toEqual(1);
    expect(wrapper.state().infants).toEqual(1);
  });
});
