import React, { Component } from 'react';
<<<<<<< HEAD
import { CardList } from './components/card-list/card-list.component';

=======
import logo from './logo.svg';
>>>>>>> 3708840276a3adc335ef9c87184d01b578b21666
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters} />
=======
      string: 'Hello Cornel'
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: 'Hello CodeTap' })}>
            Change Text
          </button>
        </header>
>>>>>>> 3708840276a3adc335ef9c87184d01b578b21666
      </div>
    );
  }
}

export default App;
