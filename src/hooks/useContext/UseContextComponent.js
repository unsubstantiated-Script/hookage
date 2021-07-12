import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

//useContext is for passing props down from parent to any of the children...
export default function UseContextComponent() {
	return (
		<>
			<p>Use Context</p>
			<ThemeProvider>
				<FunctionContextComponent />
			</ThemeProvider>
		</>
	);
}
