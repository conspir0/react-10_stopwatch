import React, { Component } from 'react';
import './App.css';
import SwitchButton from './SwitchButton'


export default class App extends Component {
  state = {
    time: 0,
    active: false
  }

  addSecond = () => {
    const { time } = this.state;

    this.setState({ time: time + 1 });
  }

  handleClick = () => {
    const { active } = this.state

    if (active) {
      clearInterval(this.idInterval);
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000);
    }

    this.setState({ active: !active });
  }

  render() {
    const { time, active } = this.state;

    return (
      <div className="container">
        <SwitchButton
          click={this.handleClick}
          isActive={active}
        />
        <div className="result-container">
          {time}
        </div>
      </div>
    );
  }
}