// IMPORT/////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import dataProcessor from '../dataProcessor.js';
const moment = require('moment');


// CONSTRUCTION OF BOOKING CLASS////////////////////////////////////////

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'init',
      listing: {
        listingId: 1,
        price: 90,
        minStay: 1,
        lastUpdate: new Date('July 17, 2018'),
        bookings: [
          [new Date('July 4, 2018'), new Date('July 8, 2018')],
          [new Date('July 19, 2018'), new Date('July 22, 2018')],
          [new Date('July 29, 2018'), new Date('August 7, 2018')],
        ],
        reviewStars: 4,
        reviewCount: 18,
      },
      stars: '',
      today: moment().calendar('L'),
    };
    this.retreiveData = this.retreiveData.bind(this);
    this.renderStars = this.renderStars.bind(this);
  }

  componentDidMount() {
    // this.retreiveData();
    this.renderStars();
  }

  retreiveData() {
    dataProcessor.getData(window.location.href, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        // console.log(response.data);
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
              <span className="price">
                {`${listing.price} per night`}
              </span>
            </div>
            <div className="reviewSummary">
              <button className="moveToReview" type="button">
                <span>{`${stars} ${listing.reviewCount}`}</span>
              </button>
            </div>
          </div>

          <hr/>

          <div>
            <span>
              Dates
            </span>
            <div className="datesContainer">
              <button type="button" className="checkInOutBtn">
                {today}
              </button>
              <span>  ---->  </span>
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
        </div>
      </div>
    )
  }
}

export default Booking;
