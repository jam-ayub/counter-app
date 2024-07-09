import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tag: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tag.length === 0) return <p>There is not tag!!</p>;

    return (
      <ul>
        {this.state.tag.map((tag) => {
          <li key={tag}>{tag}</li>;
        })}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.state.tag.length === 0 && "Please add a tag"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
