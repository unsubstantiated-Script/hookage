import React from "react";
import UseLocalStorage from "./UseLocalStorage";
import UseUpdateLogger from "./UseUpdateLogger";

const UseCustomHook = () => {
	//Custom hook works the same as useState, but just have to pass a key and will save in local storage
	const [name, setName] = UseLocalStorage("name", "");
	UseUpdateLogger(name);
	return (
		<>
			<p>Custom Hook</p>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</>
	);
};

export default UseCustomHook;
