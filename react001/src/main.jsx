import React from "react";
import ReactDOM from "react-dom";

const index = 0;
setInterval(()=>{
  const element = (
    <h1 className="heading" tabIndex={index}>
      <span>Hello World! {new Date().toLocaleTimeString()}</span>
      <img src = "" />
    </h1>
  );
  ReactDOM.render(element,document.getElementById('root'));
},1000);