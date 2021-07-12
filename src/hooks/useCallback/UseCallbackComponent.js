import React, { useState, useCallback } from "react";
import List from "./List.js";
import { Button } from "reactstrap";

const UseCallbackComponent = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	//An imaginary GET from an API, wrapping in useCallback to avoid re-rendering unless "number" changes

	//useMemo returns the return of a function thus "getItems" would be loaded with the finished array
	//useCallback returns the actual function thus "getItems" is filled with the function that can keep operating and we can keep passing parameters

	const getItems = useCallback(
		(incrementor) => {
			return [number, number + incrementor, number + incrementor * 2];
		},
		[number],
	);

	const theme = {
		backgroundColor: dark ? "#333" : "#FFF",
		color: dark ? "#FFF" : "#333",
	};

	return (
		<>
			<p>Use Callbacks</p>
			<div style={theme}>
				<div className='input-group my-3'>
					<input
						type='number'
						value={number}
						onChange={(e) => setNumber(parseInt(e.target.value))}
					/>
					<Button onClick={() => setDark((prevDark) => !prevDark)}>
						Toggle Theme
					</Button>
				</div>
				<div className='my-3'>
					{/*this is firing a re-render every time it changes, numbers or style --> */}
					<List getItems={getItems} />
				</div>
			</div>
		</>
	);
};

export default UseCallbackComponent;
