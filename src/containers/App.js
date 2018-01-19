import React, { PureComponent } from 'react';
import styles from './App.sass';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js]: Inside constructor()', props);
    this.state = {
      persons: [
        {id: 'ad123a', name: 'Melissa', age: 28},
        {id: 'asdqwq', name: 'Carlos', age: 30},
        {id: 'zdqr12', name: 'Andrea', age: 28},
        {id: 'asd215', name: 'Ernesto', age: 30}
      ],
      showPersons: false
    }
  }

  componentWillMount = () => {
    console.log('[App.js]: Inside componentWillMount()');
  }

  componentDidMount = () => {
    console.log('[App.js]: Inside componentDidMount()');
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
    console.log('[App.js]: Inside render()');
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <ul>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </ul>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit appTitle={this.props.appTitle} persons={this.state.persons} toggle={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
