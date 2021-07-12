import React, { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
	const savedValue = JSON.parse(localStorage.getItem(key));
	//checks to see if this is chilling in storage, if so, returns
	if (savedValue) return savedValue;

	//Checks to see if stored value is a function, if so, just gonna call it!
	if (initialValue instanceof Function) return initialValue();

	//if not, returns the initial value
	return initialValue;
}

export default function UseLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		return getSavedValue(key, initialValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);
	return [value, setValue];
}
