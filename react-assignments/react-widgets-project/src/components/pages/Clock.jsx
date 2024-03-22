import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      hours: "",
      minutes: "",
      seconds: "",
    };
    this.getTime = this.getTime.bind(this);
  }

  componentDidMount() {
    this.getTime();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getTime() {
    this.timer = setInterval(() => {
      this.setState(() => {
        return { date: new Date() };
      });
      this.setState(() => {
        return { hours: this.state.date.getHours() };
      });
      this.setState(() => {
        return { minutes: this.state.date.getMinutes() };
      });
      this.setState(() => {
        return { seconds: this.state.date.getSeconds() };
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <h3>{this.state.date.toDateString()}</h3>
        {this.state.minutes ? (
          <h2>
            {this.state.hours < 10 && 0}
            {this.state.hours}:{this.state.minutes < 10 && 0}
            {this.state.minutes}:{this.state.seconds < 10 && 0}
            {this.state.seconds}
          </h2>
        ) : (
          <FontAwesomeIcon icon="fa-circle-notch" spin />
        )}
      </div>
    );
  }
}

export default Clock;
