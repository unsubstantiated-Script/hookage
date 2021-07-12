import React from "react";
import { Button } from "reactstrap";
import { TOGGLE_TODO, DELETE_TODO } from "./UseReducerComponent.js";

export default function TodoComponent({
	todo: { complete, name, id },
	dispatch,
}) {
	return (
		<div>
			<div className='my-3'>
				<span style={{ color: complete ? "#AAA" : "#000" }}>{name}</span>
			</div>
			<div className='my-3'>
				<Button
					onClick={() => dispatch({ type: TOGGLE_TODO, payload: { id: id } })}>
					Toggle
				</Button>
				<Button
					onClick={() => dispatch({ type: DELETE_TODO, payload: { id: id } })}>
					Delete
				</Button>
			</div>
		</div>
	);
}
