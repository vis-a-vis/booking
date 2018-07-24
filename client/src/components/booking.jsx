import React from 'react';
import ReactDOM from 'react-dom';
const SampleData = require('../sampleData.js')


class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'init',
      currentListing: [],
      renderedStars: '',
    };
    this.getData = this.getData.bind(this);
    this.renderStars = this.renderStars.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.renderStars();
  }

  getData() {
    this.setState({ currentListing: SampleData }, () => console.log(this.state.currentListing));
  }

  renderStars() {
    const { reviewStars } = this.state;
    let result = '';
    for (let i = 0; i < reviewStars; i += 1) {
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
