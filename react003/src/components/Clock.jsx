import React from "react";

class Clock extends React.Component {

  // constructor method of class component
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // this method runs after initial rendering of the class component
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(),1000);
  }

  // this method runs when the component is going to unmount
  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  tick(){
    this.setState({
      date: new Date(),
    });
  }

  // this method is responsible for rendering the component.
  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Hello {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

export default Clock;
