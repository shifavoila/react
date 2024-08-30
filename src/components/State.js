import React from 'react';

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      isRunning: true,
    }
  }

  tick = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}));
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  }

  render() {
    return (
      <>
        <h4>{this.state.seconds}</h4>
        {this.state.isRunning ? 
            <button onClick={this.stopTimer}>Stop Timer</button>
          :
          <p>Timer Stopped</p>
        }
      </>
    )
  }
}

export default State;
