// IMPORTS///////////////////////////////////////////////////////////

import React from 'react';
import dataProcessor from '../dataProcessor';
import GuestComponent from './GuestComponent';
import RenderStars from './RenderStars';

const moment = require('moment');

// CONSTRUCTION OF BOOKING CLASS/////////////////////////////////////

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultView: 'closed',
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
      today: moment().calendar('LL'),
      stayCost: 0,
      extraGuestCost: 10,
      guestCount: 1,
      nightCount: 0,
    };
    this.retreiveData = this.retreiveData.bind(this);
    this.renderStars = this.renderStars.bind(this);
    this.incrementGuestCount = this.incrementGuestCount.bind(this);
    this.decrementGuestCount = this.decrementGuestCount.bind(this);
  }

  componentDidMount() {
    this.retreiveData();
    this.renderStars();
  }

  // AJAX METHODS////////////////////////////////////////////////////

  retreiveData() {
    const location = `/api${window.location.pathname}`;
    dataProcessor.getData(location, (error, response) => {
      if (error) {
        //insert error handling
      } else {
        this.setState(
          { listing: response.data },
          () => { this.updateStayCost(); },
        );
      }
    });
  }

  // SUBCOMPONENT CLICKHANDLERS//////////////////////////////////////

  incrementGuestCount() {
    const { guestCount } = this.state;
    this.setState({ guestCount: guestCount + 1 }, () => {
      this.updateStayCost();
    });
  }

  decrementGuestCount() {
    const { guestCount } = this.state;
    this.setState({ guestCount: guestCount - 1 }, () => {
      this.updateStayCost();
    });
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

  renderStars() {
    const { listing } = this.state;
    const stars = new Array(4).fill(null);
    return stars.map((item, index) => (<RenderStars key={index} />));
  }

  // RENDER//////////////////////////////////////////////////////////

  render() {
    const {
      listing, today, stayCost, guestCount,
    } = this.state;

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
                <span className="test">
                  {this.renderStars()}
                  {` ${listing.reviewCount}`}
                </span>
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
              <span> {".  ---->  ."} </span>
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
            guestCount={guestCount}
            maxGuests={listing.maxGuests}
            incrementGuestCount={this.incrementGuestCount}
            decrementGuestCount={this.decrementGuestCount}
          />
          <hr/>

        </div>
      </div>
    );
  }
}

export default Booking;

/*
let objectCopy = JSON.parse(JSON.stringify(this.state.object))
*/

