import React, { Fragment } from 'react';
import styles from './Cockpit.sass';
// import Wrapper from '../hoc/Wrapper';

const cockpit = (props) => {
  
  const classes = [];

  if(props.persons.length <= 2) {
    classes.push(styles.indigo);
  }
  if(props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <Fragment>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button onClick={props.toggle}>Switch name</button>
    </Fragment>
  );
}

export default cockpit;