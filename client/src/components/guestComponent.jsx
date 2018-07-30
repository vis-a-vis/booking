import React from 'react';

class guestDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
    <div>
      <nav>
        <p>guests</p>
        <ul>
          <li>
            <a href="#">Adults</a>
            <button>+</button>
            <a href="">##</a>
            <button>-</button>
            </li>
          <li>
            <a href="#">Children</a>
            <button>+</button>
            <a href="">##</a>
            <button>-</button>
          </li>
          <li>
            <a href="#">Infants</a>
            <button>+</button>
            <a href="">##</a>
            <button>-</button>
          </li>
        </ul>
      </nav>
    </div>
    );
  }
}
export default guestDropdown;
