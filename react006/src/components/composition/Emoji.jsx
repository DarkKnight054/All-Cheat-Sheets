import React from "react";

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render() {
    const addEmoji = this.addEmoji;

    return this.props.children({ addEmoji });
  }
}
