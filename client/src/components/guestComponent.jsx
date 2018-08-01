import React from 'react';
import PropTypes from 'prop-types';

class GuestDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      adults: 1,
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
      guestCount, maxGuests, incrementGuestCount,
    } = this.props;

    if (string === 'adults' && adults < maxGuests && guestCount < maxGuests) {
      incrementGuestCount();
      this.setState({ adults: adults + 1 });
    }
    if (string === 'children' && children < maxGuests && guestCount < maxGuests) {
      incrementGuestCount();
      this.setState({ children: children + 1 });
    }
    if (string === 'infants' && infants < 9) {
      this.setState({ infants: infants + 1 });
    }
  }

  handleMinusClick(string) {
    const { adults, children, infants } = this.state;
    const {
      guestCount, decrementGuestCount,
    } = this.props;

    if (string === 'adults' && adults > 0 && guestCount > 0) {
      decrementGuestCount();
      this.setState({ adults: adults - 1 });
    }
    if (string === 'children' && children > 0 && guestCount > 0) {
      decrementGuestCount();
      this.setState({ children: children - 1 });
    }
    if (string === 'infants' && infants > 0) {
      this.setState({ infants: infants - 1 });
    }
  }

  render() {
    const { guestCount } = this.props;
    const { adults, children, infants } = this.state;
    return (
    <div>
      <button type="button">
        {guestCount === 1 && <span>{`${guestCount} guest`}</span>}
        {guestCount > 1 && <span>{`${guestCount} guests`}</span>}
        {infants === 1 && <span>{`, ${infants} infant`}</span>}
        {infants > 1 && <span>{`, ${infants} infants`}</span>}

        <ul>


          <li>
            <span>Adult</span>
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
            <span>Children</span>
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
            <span>Infants</span>
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
      </button>
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
