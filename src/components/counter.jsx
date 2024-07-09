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

  // instead of adding constructor we can hadel this event binding with arrow functions
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1});
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
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
