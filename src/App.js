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

  switchNameHandler = () => {
    console.log(this.state.persons);
    this.setState({
      persons: [
        {name: 'Who knows?', age: 28},
        {name: 'Carlos', age: 30}
      ]
    });
  }

  render = () => {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Cycling</Person>
      </div>
    );
  }
}

export default App;
