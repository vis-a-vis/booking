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
    };
    this.retreiveData = this.retreiveData.bind(this);
    this.renderStars = this.renderStars.bind(this);
  }

  componentDidMount() {
    this.retreiveData();
    this.renderStars();
  }

  retreiveData() {
    console.log(window.location.pathname);
    const location = `/window${window.location.pathname}`;
    dataProcessor.getData(location, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log(response.data);
        this.setState(
          { listing: response.data });
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

  render() {
    const { listing, stars, today } = this.state;
    return (
      <div className="outerContainer">
        <div className="innerContainer">

          <div className="priceSummary">
            <div>
              <span className="priceText">
                {`$${listing.price} `}
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
          <GuestComponent />
          <hr/>

        </div>
      </div>
    );
  }
}

export default Booking;
