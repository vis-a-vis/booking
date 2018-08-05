import React from 'react';
import GuestComponent from '../client/src/components/GuestComponent';
import { shallow, mount, render } from 'enzyme';


describe('Guest Component', () => {
  const wrapper = shallow(<GuestComponent />);
  // STATE TESTS //////////////////////////////////////////////////////

  it('should start with correct state key-value pairs', () => {
    const obj = {
      open: false,
      adults: 1,
      children: 0,
      infants: 0,
    };
    expect(wrapper.state()).toEqual(obj);
  });

  // RENDER TESTS /////////////////////////////////////////////////////

  it('should render without throwing error', () => {
    expect((wrapper).find('.guestDropdownMain').exists()).toBe(true);
  });

  it('should render three drowDown items', () => {
    expect((wrapper).find('.dropdownItem').length).toEqual(3);
  });

  // EVENT TESTS /////////////////////////////////////////////////////

  it('should respond to change event and change the state of the Guest Component', () => {
    wrapper.find('.dropDownItems').simulate('click');
    expect(wrapper.state().open).toBe(true);
  });
});
