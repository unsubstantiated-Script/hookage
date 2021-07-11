import "./App.css";
import { Container } from "reactstrap";
import UseStateComponent from "./hooks/UseStateComponent";

function App() {
	return (
		<>
			<Container>
				{" "}
				<h1>Hooks testing!</h1>
				<ol>
					<li>
						<UseStateComponent />
					</li>
				</ol>
			</Container>
		</>
	);
}

export default App;
