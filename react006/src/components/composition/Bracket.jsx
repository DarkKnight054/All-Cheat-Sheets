import React from "react";

export default class Bracket extends React.Component {
  addBracket = (text) => `[ ${text} ]`;

  render() {
    const addBracket = this.addBracket;

    return this.props.children({ addBracket });
  }
}
