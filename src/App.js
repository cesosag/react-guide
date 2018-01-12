import React, { PureComponent } from 'react';
import styles from './App.sass';
import Person from './Person/Person';

class App extends PureComponent {
  state = {
    persons: [
      {id: 'ad123a', name: 'Melissa', age: 28},
      {id: 'asdqwq', name: 'Carlos', age: 30},
      {id: 'zdqr12', name: 'Andrea', age: 28},
      {id: 'asd215', name: 'Ernesto', age: 30}
    ],
    showPersons: false
  }

  deletePersonHandler = (id) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    const personIndex = this.findPersonIndex(id);
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  findPersonIndex = (id) => {
    return this.state.persons.findIndex(p => {
      return p.id === id;
    });
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.findPersonIndex(id);
    const person = {...this.state.persons[personIndex]};
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  render = () => {
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <ul>
          {this.state.persons.map((person) => {
            return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, person.id)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          })}
        </ul>
      );
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push(styles.indigo);
    }
    if(this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
