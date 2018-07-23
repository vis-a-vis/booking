import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'initial',
    };
    this.method = this.method.bind(this);
  }

  method(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        test
      </div>
    )
  }
}