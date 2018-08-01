import React from 'react';

class guestDropdown extends React.Component {
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
    if (string === 'adults') {
      this.setState({ adults: adults + 1 });
    } else if (string === 'children') {
      this.setState({ children: children + 1 });
    } else if (string === 'infants') {
      this.setState({ infants: infants + 1 });
    }
  }

  handleMinusClick(string) {
    const { adults, children, infants } = this.state;
    if (string === 'adults') {
      this.setState({ adults: adults - 1 });
    } else if (string === 'children') {
      this.setState({ children: children - 1 });
    } else if (string === 'infants') {
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
export default guestDropdown;
