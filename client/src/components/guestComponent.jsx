import React from 'react';
import PropTypes from 'prop-types';
import '../../styling/GuestComponent.css';

// CONSTRUCTION OF GUESTDROPDOWN CLASS///////////////////////////////

class GuestDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      adults: 1,
      children: 0,
      infants: 0,
    };
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleDropdownButtonClick = this.handleDropdownButtonClick.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }

  // DROPDOWN CLICKHANDLERS//////////////////////////////////////////

  onClickOutside() {
    this.setState({ open: false }, () => {
      console.log("the new state for open is: ", this.state.open);
    });
  }

  handleDropdownClick() {
    this.setState({ open: true });
  }

  handleDropdownButtonClick(e) {
    e.stopPropagation();
    this.setState({ open: false });
  }

  // BUTTON CLICKHANDLERS////////////////////////////////////////////

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

    if (string === 'adults' && adults > 1 && guestCount > 1) {
      decrementGuestCount();
      this.setState({ adults: adults - 1 });
    }
    if (string === 'children' && children > 0 && guestCount > 1) {
      decrementGuestCount();
      this.setState({ children: children - 1 });
    }
    if (string === 'infants' && infants > 0) {
      this.setState({ infants: infants - 1 });
    }
  }

  // RENDER//////////////////////////////////////////////////////////

  render() {
    const { guestCount, maxGuests } = this.props;
    const {
      open, adults, children, infants,
    } = this.state;

    return (
      <div>
        <div className="guestDropdownMain">
          <span className="smallText">Guests</span>

          <div
            className="dropDownItems"
            role="button"
            onClick={this.handleDropdownClick}
          >
            <div >
              {(guestCount === 1 && <span>{`${guestCount} guest`}</span>) || (guestCount > 1 && <span>{`${guestCount} guests`}</span>)}
              {(infants === 1 && <span>{`, ${infants} infant`}</span>) || (infants > 1 && <span>{`, ${infants} infants`}</span>)}
            </div>

            <div className={`dropdownItems ${open ? 'show' : 'hide'}`}>


              <div className="dropdownItem">
                <span>Adult</span>
                <div>
                  <button type="button" onClick={() => this.handleMinusClick('adults')}> - </button>
                  <span> { adults } </span>
                  <button type="button" onClick={() => this.handlePlusClick('adults')}> + </button>
                </div>
              </div>

              <div className="dropdownItem">
                <span>Children</span>
                <div>
                  <button type="button" onClick={() => this.handleMinusClick('children')}> - </button>
                  <span> { children } </span>
                  <button type="button" onClick={() => this.handlePlusClick('children')}> + </button>
                </div>
              </div>

              <div className="dropdownItem">
                <span>Infants</span>
                <div>
                  <button type="button" onClick={() => this.handleMinusClick('infants')}> - </button>
                  <span> { infants } </span>
                  <button type="button" onClick={() => this.handlePlusClick('infants')}> + </button>
                </div>
              </div>

              <span className="smallText">
                { maxGuests }
                {(maxGuests === 1 && <span>{` guest `}</span>) || (maxGuests > 1 && <span>{` guests `}</span>)}
                maximum. Infants don’t count toward the number of guests.
              </span>

              <button type="button" onClick={this.handleDropdownButtonClick}> Close </button>

            </div>
          </div>
        </div>
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
