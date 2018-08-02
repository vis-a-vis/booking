// IMPORTS///////////////////////////////////////////////////////////

import React from 'react';
import dataProcessor from '../dataProcessor';
import GuestComponent from './GuestComponent';
import RenderSVG from './RenderSVG';
import '../../styling/Booking.css';

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
    return stars.map((item, index) => (<RenderSVG.star key={index} />));
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
              <span className="smallText">
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

          <div>
            <span className="smallText">
              Dates
            </span>
            <div className="datesContainer">
              <button type="button" className="checkInOutBtn">
                {today}
              </button>
              <span> {<RenderSVG.rightArrow />} </span>
              <button type="button" className="checkInOutBtn">
                {today}
              </button>
            </div>
          </div>

          <GuestComponent
            guestCount={guestCount}
            maxGuests={listing.maxGuests}
            incrementGuestCount={this.incrementGuestCount}
            decrementGuestCount={this.decrementGuestCount}
          />

          <div className="bookSummary">
            <button className="bookButton" type="button">
              Book
            </button>
          </div>

          <div style={{ marginTop: '8px', textAlign: 'center'}}>
            <span className="smallText">
              You won’t be charged yet
            </span>
          </div>

        </div>
      </div>
    );
  }
}

export default Booking;

/*
let objectCopy = JSON.parse(JSON.stringify(this.state.object))
*/

