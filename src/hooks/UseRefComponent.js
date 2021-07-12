import React, { useRef, useState, useEffect } from "react";
import { Button } from "reactstrap";

//A ref is similar to state in that it persists between renders of a component, but refs do not cause a component to reupdate!

const UseRefComponent = () => {
	// const renderCount = useRef(0);
	// //This will return an object with a "current" property
	// //useState would create an infinite loop in this instance...

	// useEffect(() => {
	// 	renderCount.current = renderCount.current + 1;
	// });

	//Can also reference elements in the DOM. Every html item has a "ref" attribute! Works a bit like document.querySelector
	// <div>I rendered {renderCount.current} times</div>;
	const [name, setName] = useState("");
	const inputRef = useRef();
	const previousName = useRef();

	const focus = () => {
		inputRef.current.focus();
	};

	//Storing the previous value of state
	useEffect(() => {
		previousName.current = name;
	}, [name]);

	return (
		<>
			<p>Use Ref</p>
			<input
				ref={inputRef}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<div>
				My name is {name}, but it used to be {previousName.current}
			</div>
			<Button onClick={focus}>Focus</Button>
		</>
	);
};

export default UseRefComponent;
