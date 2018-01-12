import React from 'react';
import styles from './Person.sass';

const person = (props) => {
	return (
		<li className={styles.Person}>
			<p onClick={props.click}>I'm {props.name} and I'm {props.age}!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</li>
	)
}

export default person;