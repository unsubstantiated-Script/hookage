import React, { useState, useMemo, useEffect } from "react";
import { Button } from "reactstrap";

const UseMemoComponent = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	//useMemo will cache the input so that it won't need to rerender if this doesn't change
	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]); //dependencies always show when this should be running again

	//Wrapping this in useMemo to avoid the conflict of React updating the entire component even though nothing is changing here. Thus, this only will change when the item is manipulated! So, we get the exact same JS reference everytime unless it actually changes!
	const themeStyles = useMemo(() => {
		return {
			backgroundColor: dark ? "black" : "white",
			color: dark ? "white" : "black",
		};
	}, [dark]);

	useEffect(() => {
		console.log("Theme changed");
	}, [themeStyles]);

	//useMemo should be used sparingly as it does give performance and memory overhead

	return (
		<div>
			<p>Use Memo</p>
			<div className='my-3'>
				<input
					type='number'
					value={number}
					onChange={(e) => setNumber(parseInt(e.target.value))}
				/>
			</div>
			<div className='my-3'>
				<Button onClick={() => setDark((prevDark) => !prevDark)}>
					Change Theme
				</Button>
			</div>
			<div style={themeStyles}>{doubleNumber}</div>
		</div>
	);
};

//This is gonna get called and slow everything down every change that happens to the component!
function slowFunction(num) {
	console.log("calling the slow function");
	for (let index = 0; index <= 1000000000; index++) {}
	return num * 2;
}

export default UseMemoComponent;
