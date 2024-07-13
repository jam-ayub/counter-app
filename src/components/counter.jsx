import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tag: ["tag1", "tag2", "tag3"],
  // };

  componentDidUpdate (prevPorps, prevState) {
    console.log("prevState", prevPorps);
    console.log("prevState", prevState);
    if (prevPorps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from server
      //here we can handel these kind of things...
    }
  }

  componentWillUnmount () {
    console.log("Counter - Unmount!");
  }

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
  // handleIncrement = (product) => {
  //   //console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
