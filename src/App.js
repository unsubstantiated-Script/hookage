import "./App.css";
import { Container } from "reactstrap";
import UseStateComponent from "./hooks/UseStateComponent";
import UseEffectComponent from "./hooks/UseEffectComponent";

function App() {
	return (
		<Container>
			<h1>Hooks testing!</h1>
			<UseStateComponent />
			<UseEffectComponent />
		</Container>
	);
}

export default App;
