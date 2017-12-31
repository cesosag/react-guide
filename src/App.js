import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Melissa', age: 28},
      {name: 'Carlos', age: 30}
    ]
  }

  switchNameHandler = (newName) => {
    console.log(this.state.persons);
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Carlos', age: 30}
      ]
    });
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {name: e.target.value, age: 28},
        {name: 'Carlos', age: 30}
      ]
    });
  }

  render = () => {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler('Andrea')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Carolina')}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Who knows?')}>My hobbies: Cycling</Person>
      </div>
    );
  }
}

export default App;
