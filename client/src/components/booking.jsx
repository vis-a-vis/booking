// IMPORT/////////////////////////////////////////////////////////////

import React from 'react';
import dataProcessor from '../dataProcessor';
import GuestComponent from './guestComponent';
const moment = require('moment');
// CONSTRUCTION OF BOOKING CLASS////////////////////////////////////////

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'init',
      listing: {
        bookings: [
          [new Date('July 4, 2018'), new Date('July 8, 2018')],
        ],
        listingId: 1,
        price: 1,
        cleaningFee: 1,
        minStay: 1,
        maxGuests: 1,
        lastUpdate: new Date('January 1, 2000'),
        reviewStars: 1,
        reviewCount: 1,
      },
      stars: '',
      today: moment().calendar('LL'),
      stayCost: 0,
      extraGuestCost: 10,
      guestCount: 0,
      nightCount: 0,
    };
    this.retreiveData = this.retreiveData.bind(this);
    this.renderStars = this.renderStars.bind(this);
    this.incrementGuestCount = this.incrementGuestCount.bind(this);
  }

  componentDidMount() {
    this.retreiveData();

    this.renderStars();
  }

  retreiveData() {
    const location = `/window${window.location.pathname}`;
    dataProcessor.getData(location, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log(response.data);
        this.setState(
          { listing: response.data },
          () => { this.updateStayCost(); },
        );
      }
    });
  }

  renderStars() {
    const { listing } = this.state;
    let result = '';
    for (let i = 0; i < listing.reviewStars; i += 1) {

      result += '★';
    }
    this.setState({ stars: result });

  }

  // UX METHODS /////////////////////////////////////////////////////

  updateStayCost() {
    const {
      listing,
      extraGuestCost,
      guestCount,
      nightCount,
    } = this.state;

    let tempStayCost = listing.price;

    // FUTURE REFACTOR TO TERNARY EXPRESSION
    // console.log(tempStayCost);
    // tempStayCost += guestCount !== 0;
    // console.log(tempStayCost);
    // tempStayCost *= nightCount !== 0;
    // console.log(tempStayCost);

    if (nightCount === 0 && guestCount > 0) {
      tempStayCost += (extraGuestCost * guestCount);
    } else if (nightCount > 0 && guestCount === 0) {
      tempStayCost *= nightCount;
    } else if (nightCount > 0 && guestCount > 0) {
      tempStayCost += (extraGuestCost * guestCount);
      tempStayCost *= nightCount;
    }

    this.setState({ stayCost: tempStayCost });
  }

  incrementGuestCount() {
    const { guestCount } = this.state;
    this.setState({ guestCount: guestCount + 1 }, () => {
      this.updateStayCost();
    });
  }

  render() {
    const { listing, stars, today, stayCost } = this.state;
    return (
      <div className="outerContainer">
        <div className="innerContainer">

          <div className="priceSummary">
            <div>
              <span className="priceText">
                {`$${stayCost} `}
              </span>
              <span className="text1">
                per night
              </span>
            </div>
            <div className="reviewSummary">
              <button className="moveToReview" type="button">
                <span>{`${stars} ${listing.reviewCount}`}</span>
              </button>
            </div>
          </div>

          <hr/>
          <hr/>

          <div>
            <span className="text1">
              Dates
            </span>
            <div className="datesContainer">
              <button type="button" className="checkInOutBtn">
                {today}
              </button>
              <span> {"  ---->  "} </span>
              <button type="button" className="checkInOutBtn">
                {today}
              </button>
            </div>
          </div>

          <div className="bookSummary">
            <button type="button">
              Request to Book
            </button>
          </div>

          <hr/>
          <GuestComponent
            maxGuests={listing.maxGuests}
            incrementGuestCount={this.incrementGuestCount}
          />
          <hr/>

        </div>
      </div>
    );
  }
}

export default Booking;





















