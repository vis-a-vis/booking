import React from 'react';
import PropTypes from 'prop-types';

class GuestDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      adults: 0,
      children: 0,
      infants: 0,
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }


  //contain 0 to maxGuests
  handlePlusClick(string) {
    const { adults, children, infants } = this.state;
    const {
      guestCount, maxGuests, incrementGuestCount, decrementGuestCount,
    } = this.props;

    if (guestCount < maxGuests && string !== 'infants') {
      incrementGuestCount();
      if (string === 'adults') {
        this.setState({ adults: adults + 1 });
      } else if (string === 'children') {
        this.setState({ children: children + 1 });
      }
    } else if (string === 'infants' && infants < 9) {
      this.setState({ infants: infants + 1 });
    }
  }

  handleMinusClick(string) {
    const { adults, children, infants } = this.state;
    const { guestCount, maxGuests, decrementGuestCount } = this.props;

    if (guestCount > 0 && string !== 'infants') {
      decrementGuestCount();
      if (string === 'adults') {
        this.setState({ adults: adults - 1 });
      } else if (string === 'children') {
        this.setState({ children: children - 1 });
      }
    } else if (string === 'infants' && infants > 0) {
      this.setState({ infants: infants - 1 });
    }
  }


  render() {
    const { adults, children, infants } = this.state;
    return (
    <div>
      <nav>
        <p>guests</p>
        <ul>


          <li>
            <a href="adults">Adults</a>
            <button
              type="button"
              onClick={() => this.handleMinusClick('adults')}
            >
             -
            </button>
            <span>
              { adults }
            </span>
            <button
              type="button"
              onClick={() => this.handlePlusClick('adults')}
            >
             +
            </button>
          </li>


          <li>
            <a href="children">Children</a>
            <button
              type="button"
              onClick={() => this.handleMinusClick('children')}
            >
             -
            </button>
            <span>
              { children }
            </span>
            <button
              type="button"
              onClick={() => this.handlePlusClick('children')}
            >
             +
            </button>
          </li>


          <li>
            <a href="infants">Infants</a>
            <button
              type="button"
              onClick={() => this.handleMinusClick('infants')}
            >
             -
            </button>
            <span>
              { infants }
            </span>
            <button
              type="button"
              onClick={() => this.handlePlusClick('infants')}
            >
             +
            </button>
          </li>


        </ul>
      </nav>
    </div>
    );
  }
}

GuestDropdown.propTypes = {
  guestCount: PropTypes.number,
  maxGuests: PropTypes.number,
  incrementGuestCount: PropTypes.func,
  decrementGuestCount: PropTypes.func,
};

GuestDropdown.defaultProps = {
  guestCount: 0,
  maxGuests: 0,
  incrementGuestCount: null,
  decrementGuestCount: null,
};

export default GuestDropdown;
