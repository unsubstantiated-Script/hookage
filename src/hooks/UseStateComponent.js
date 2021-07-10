import { React, useState } from "react";
import { Button } from "reactstrap";

const UseStateComponent = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Button color='danger' onClick={() => setCount(count + 1)}>
				{count}
			</Button>
		</div>
	);
};

export default UseStateComponent;
