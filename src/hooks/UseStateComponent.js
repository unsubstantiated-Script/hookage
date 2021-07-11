import  React, { useState } from "react";
import { Button } from "reactstrap";

const UseStateComponent = () => {

	//Gotta use these in the same order above as below...
	// cannot put inside an "if" statement
	//cannot put inside of functions or nested in anything. 

	// const [count, setCount] = useState(0); //can also put a function here, but it will only run when the component first renders! If a function call is here, it will change every time state is changed...

	//using with objects

	const [count, setCount] = useState(0)
	const [color, setColor] = useState('black')



	function decrementCount () {
		setCount(prevState => prevState - 1)
		setColor('red')
	}


	function incrementCount () {
		setCount(prevState => prevState + 1)
		setColor('green')
	}


	return (
		<>
			<p>Use State</p>
			<Button color='danger' className='mx-3' disabled={count<= 0 ? true : false} onClick={decrementCount}>
				-
			</Button>
			<span style={{color: color}}>{count}</span>
			<Button color='success' className='mx-3' onClick={incrementCount}>
				+
			</Button>
		</>
	);
};

export default UseStateComponent;
