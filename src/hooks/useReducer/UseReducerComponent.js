import React, { useState, useReducer } from "react";
import TodoComponent from "./TodoComponent";

const ACTIONS = {
	ADD_TODO: "add-todo",
	TOGGLE_TODO: "toggle-todo",
	DELETE_TODO: "delete-todo",
};

export const { ADD_TODO, TOGGLE_TODO, DELETE_TODO } = ACTIONS;

function reducer(todos, action) {
	switch (action.type) {
		case ADD_TODO:
			return [...todos, newTodo(action.payload.name)];
		case TOGGLE_TODO:
			return todos.map((todo) => {
				//makes sure the todo in question matches the one chilling in the payload
				if (todo.id === action.payload.id) {
					//takes the current todo, spreads it, and negates or flips the todo's complete status
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});
		case DELETE_TODO:
			//returning all the todos but the one we want to remove...
			return todos.filter((todo) => todo.id !== action.payload.id);
		default:
			return todos;
	}
}

function newTodo(name) {
	return { id: Date.now(), name: name, complete: false };
}

const UseReducerComponent = () => {
	//Use objects instead of values...
	const [todos, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		//Loads an action and a variable
		dispatch({ type: ADD_TODO, payload: { name: name } });
		setName("");
	}

	console.log(todos);

	return (
		<>
			<p>Use Reducer</p>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
			{todos.map((todo) => {
				return <TodoComponent key={todo.id} todo={todo} dispatch={dispatch} />;
			})}
		</>
	);
};

export default UseReducerComponent;
