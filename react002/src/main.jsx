import React from "react";
import ReactDOM from "react-dom";

const index = 0;

// Functional COmponent

// function Clock({locale}){
//   return(
//     <h1 className="heading" tabIndex={index}>
//       <span>Hello World! {new Date().toLocaleTimeString(locale)}</span>
//     </h1>
//   );
// }


// Class Component

class Clock extends React.Component{
  render()
  {
    return(
      <h1 className="heading" tabIndex={index}>
        {/* Any props send from outside is located in this.props  */}
        <span className="text">Hello World! {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  };
}
ReactDOM.render(<Clock locale="bn-BD"/>,document.getElementById('root'));