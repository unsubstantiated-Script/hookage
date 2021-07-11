import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

export default function UseEffectComponent() {
	const [resourceType, setResourceType] = useState("posts");
	const [items, setItems] = useState([]);

	useEffect(() => {
		console.log("resource changed");
		return () => {
			//cleanup code! Subscribing to an API? Then unsubscribe here!
			console.log("component unmounted");
		};
	}, [resourceType]); //when the array is empty, this useEffect only fires on mounting this component

	// useEffect(() => {
	// 	fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
	// 		.then((response) => response.json())
	// 		.then((json) => setItems(json));
	// }, [resourceType]); //attach this to an item that changes to fire the hook so you control when it fires

	// const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// const handleResize = () => {
	// 	setWindowWidth(window.innerWidth);
	// };

	// useEffect(() => {
	// 	window.addEventListener("resize", handleResize);
	// 	//important to clean up the event listener!
	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);
	// <div>{windowWidth}</div>

	return (
		<div>
			<p>Use Effect</p>
			<Button onClick={() => setResourceType("posts")}>Posts</Button>
			<Button onClick={() => setResourceType("users")}>Users</Button>
			<Button onClick={() => setResourceType("comments")}>Comments</Button>
			<h1>{resourceType}</h1>
			{items.map((item) => {
				return <pre>{JSON.stringify(item)}</pre>;
			})}
		</div>
	);
}
