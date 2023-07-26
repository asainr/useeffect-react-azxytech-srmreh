import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Sample from './Sample';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      show: true,
    };
  }

  onInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.onInputChange} />
        <button onClick={this.toggle}>Toggle</button>
        {this.state.show && <Hello name={this.state.name} />}
        <Sample />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
