// IMPORT/////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import dataProcessor from '../dataProcessor.js';

// CONSTRUCTION OF BOOKING CLASS////////////////////////////////////////

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'init',
      listingData: {},
      renderedStars: '',
    };
    this.retreiveData = this.retreiveData.bind(this);
    this.renderStars = this.renderStars.bind(this);
  }

  componentDidMount() {
    this.retreiveData();
    this.renderStars();
  }

  retreiveData() {
    dataProcessor.getData(window.location.href, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log(response.data);
        // this.setState({ listingData: response.data }, () => console.log(this.state.currentListing));
      }
    });
  }

  renderStars() {
    const { listingData } = this.state;
    let result = '';
    for (let i = 0; i < listingData.reviewStars; i += 1) {
      result += '★';
    }
    return result;
  }

  render() {
    const {view, price, reviewStars, reviewCount} = this.state;
    return (
      <div>
        <div className="container">
          <div className="priceSummary">
            <span className="price">
              ${price} per night
            </span>
          <div className="reviewSummary">
            <button className="review">
              <span>{reviewStars}</span>
              <span>{this.renderStars()}</span>
            </button>
          </div>
            <div>line</div>
          </div>




          <button>
            Request to Book
          </button>
        </div>
      </div>
    )
  }
}

export default Booking;
