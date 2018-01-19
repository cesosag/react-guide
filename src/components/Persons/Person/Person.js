import React from 'react';
import PropTypes from 'prop-types';
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

person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
	children: PropTypes.node
};

export default person;