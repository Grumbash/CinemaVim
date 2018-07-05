import React, { Component } from 'react';
// import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { os: null };
  }

  componentDidMount() {
    fetch('/api/getOSType')
      .then(res => res.json())
      .then(OSType => this.setState({ os: os.type }));
  }

  render() {
    return (
      <div>
        {this.state.os ? (
          <h1>Hello {this.state.os}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}
