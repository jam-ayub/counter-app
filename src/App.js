
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const updatedCouters = [...this.state.counters];
    const idx = updatedCouters.indexOf(counter);
    updatedCouters[idx] = {...counter};
    updatedCouters[idx].value++;
    this.setState({ counters: updatedCouters });
  };

  handelReset = () => {
    const resetedCouters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: resetedCouters });
  };

  handelDelete = (counterId) => {
    const updatedCouters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: updatedCouters });
  };

  render () {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
        <Counters counters={this.state.counters} onReset={this.handelReset} onIncrement={this.handleIncrement} onDelete={this.handelDelete}/>
        </main>
        </React.Fragment>
    );
  }
}

export default App;
