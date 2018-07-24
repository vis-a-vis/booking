import React from 'react';
import ReactDOM from 'react-dom';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'init',
    };
    this.method = this.method.bind(this);
  }

  method(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="card-panel">This is a card panel with a teal lighten-2 class
        <form action="#">
          <p>
            <label>
              <input type="checkbox" />
              <span>Red</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" checked="checked" />
              <span>Yellow</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" className="filled-in" defaultChecked="checked" />
              <span>Filled in</span>
            </label>
          </p>
          <p>
            <label>
              <input id="indeterminate-checkbox" type="checkbox" />
              <span>Indeterminate Style</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" checked="checked" disabled="disabled" />
              <span>Green</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" disabled="disabled" />
              <span>Brown</span>
            </label>
          </p>
        </form>

        <button className="waves-effect waves-dark btn btn-large red white-text">
         Request to Book
         </button>
         <i className="material-icons right">cloud</i>
         <a className="waves-effect waves-dark btn"><i className="material-icons left">cloud</i>button</a>

      </div>
    )
  }
}

export default Booking;
