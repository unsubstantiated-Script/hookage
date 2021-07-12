import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
	const [items, setItems] = useState([]);

	//This is set to update every time items change from the "API"
	useEffect(() => {
		setItems(getItems(5));
		console.log("Updating Items");
	}, [getItems]);

	return items.map((item) => <div key={item}> {item}</div>);
};

export default List;
