import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = props => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = event => {
		event.preventDefault();

		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0 ||
			Number(enteredAge) < 1
		) {
			return;
		}

		props.onAddUser(enteredUsername, enteredAge);

		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = event => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = event => {
		setEnteredAge(event.target.value);
	};

	return (
		<>
			<ErrorModal title="An error occured" message="Something went wrong" />
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="userName">User name</label>
					<input
						id="userName"
						type="text"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age (years)</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
