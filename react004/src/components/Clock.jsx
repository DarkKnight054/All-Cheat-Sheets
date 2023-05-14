import React from "react";
import Button from "./Button.jsx";

class Clock extends React.Component {

  state = {date: new Date(),locale: "bn-BD"};

  // this method runs after initial rendering of the class component
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(),1000);
  }

  // this method runs when the component is going to unmount
  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  handleClick = (locale)=>{
    this.setState({
      locale: locale,
    })
  }


  tick(){
    this.setState({
      date: new Date(),
    });
  }

  // this method is responsible for rendering the component.
  render() {
    const { date, locale } = this.state;
    console.log('Clock component rendered');
    return (
      <h1 className="heading">
        <span className="text">
          Hello {date.toLocaleTimeString(locale)}
        </span>
        {/* Passing locale parameter through bind function. Remember first we've to sent this, from 2nd all the other will be parameters
        <button change={this.handleClick} >Change Clock Time Zone</button> */}
        <Button change={this.handleClick} locale = {locale}>Click Here</Button>
      </h1>
    );
  }
}

export default Clock;
