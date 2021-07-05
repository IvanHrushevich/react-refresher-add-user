const AddUser = props => {
	const addUserHandler = event => {
		event.preventDefault();
	};

	return (
		<form onSubmit={addUserHandler}>
			<label htmlFor="userName">User name</label>
			<input id="userName" type="text" />
			<label htmlFor="age">Age (years)</label>
			<input id="age" type="number" />
			<button type="submit">Add User</button>
		</form>
	);
};

export default AddUser;
