import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tag: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button className="btn btn-secondory btn-sm">Increment</button>
        <ul>
          {this.state.tag.map(tag => {<li key={tag}>{tag}</li>})}
        </ul>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
