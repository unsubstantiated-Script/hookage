import React from "react";
import { Button } from "reactstrap";
import { useTheme, useThemeUpdate } from "./ThemeContext";

//Drastically simpler than doing it class style
export default function FunctionContextComponent() {
	const darkTheme = useTheme();
	const toggleTheme = useThemeUpdate();

	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333",
		padding: "2rem",
		margin: "2rem",
	};

	return (
		<>
			<Button onClick={toggleTheme}>Toggle Theme</Button>
			<div style={themeStyles}>Function Theme</div>
		</>
	);
}
