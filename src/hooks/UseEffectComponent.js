import { React, useEffect, useState } from "react";
import { Button } from "reactstrap";

const UseEffectComponent = () => {
	const [count, setCount] = useState(0);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		//build function
		alert("hello side effect!");

		//tear down function
		return () => alert("goodbye bits!");
	});

	useEffect(() => {
		fetch("foo").then(() => setLoaded(true));
		//will load effect every time this bit of state changes!
	}, [count]);

	return (
		<>
			<Button color='warning' onClick={() => setCount(count + 1)}>
				{count}
			</Button>
		</>
	);
};

export default UseEffectComponent;
